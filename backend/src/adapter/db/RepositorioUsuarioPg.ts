import Usuario from "@/core/usuario/model/Usuario";
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario";
import db from "./db";

export default class RepositorioUsuarioPg implements RepositorioUsuario {

    private static readonly items: Usuario[] = [];

    async inserir(usuario: Usuario) {
        await db.query(
            `insert into usuarios
            (id, nome, email, senha)
            values ($1, $2, $3, $4)`,
            [
                usuario.id,
                usuario.nome,
                usuario.email,
                usuario.senha
            ]);
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const usuario = await db.oneOrNone(
            `select * from usuarios where email = $1`,
            [email]
        );
        return !usuario ? null : usuario;
    }

}