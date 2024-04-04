import CasoDeUso from "@/core/shared/CasoDeUso";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/Id";
import ProvedorCriptografia from "./ProvedorCriptografia";
import RepositorioUsuario from "./RepositorioUsuario";
import Usuario from "../model/Usuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {

    constructor(
        private _repositorio: RepositorioUsuario,
        private _provedorCripto: ProvedorCriptografia
    ) {}

    async executar(usuario: Usuario): Promise<void> {
        const senhaCripto = this._provedorCripto.criptografar(usuario.senha);
        const usuarioExistente = await this._repositorio.buscarPorEmail(usuario.email);
        if (usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE);

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto
        };

        this._repositorio.inserir(novoUsuario);
    }

}