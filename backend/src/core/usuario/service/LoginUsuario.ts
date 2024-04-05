import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";
import Erros from "@/core/shared/Erros";
import ProvedorCriptografia from "./ProvedorCriptografia";

export type LoginUsuarioEntrada = {
    email: string;
    senha: string;
}

export type LoginUsuarioSaida = {
    usuario: Usuario;
    token: string;
}

export default class LoginUsuario implements CasoDeUso<LoginUsuarioEntrada, Usuario> {

    constructor(
        private _repositorio: RepositorioUsuario,
        private _provedorCripto: ProvedorCriptografia
    ) { }

    async executar(entrada: LoginUsuarioEntrada): Promise<Usuario> {
        const usuarioExistente = await this._repositorio.buscarPorEmail(entrada.email);
        if (!usuarioExistente) {
            throw new Error(Erros.USUARIO_NAO_EXISTE);
        }
        const mesmaSenha = this._provedorCripto.comparar(entrada.senha, usuarioExistente.senha!);
        if (!mesmaSenha) {
            throw new Error(Erros.SENHA_INCORRETA);
        }
        return { ...usuarioExistente, senha: undefined }
    }

}