import EspacoSenhaCripto from "@/adapter/auth/EspacoSenhaCripto";
import InverterSenhaCripto from "@/adapter/auth/InverterSenhaCripto";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/TerminalUtil";
import Usuario from "@/core/usuario/model/Usuario";

export default async function registrarUsuario() {
    TerminalUtil.titulo('Registrar Usuário');

    const nome = await TerminalUtil.campoRequerido('Nome: ', 'Ana da Silva');
    const email = await TerminalUtil.campoRequerido('Email: ', 'ana.silva@empresa.com.br');
    const senha = await TerminalUtil.campoRequerido('Senha: ', 'abc@123');

    const usuario: Usuario = { nome, email, senha };

    // const provedorCripto = new InverterSenhaCripto();
    const provedorCripto = new EspacoSenhaCripto();
    const casoDeUso = new RegistrarUsuario(provedorCripto);

    await casoDeUso.executar(usuario);

    TerminalUtil.sucesso('Usuário registrado com sucesso');

    await TerminalUtil.esperarEnter();

    try {
        await casoDeUso.executar(usuario);
    } catch(e: any) {
        TerminalUtil.erro(e.message);
    } finally {
        await TerminalUtil.esperarEnter();
    }
}