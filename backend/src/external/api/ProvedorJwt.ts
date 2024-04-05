import jwt from 'jsonwebtoken';

export default class ProvedorJwt {

    constructor(private _segredo: string) { }

    gerar(dados: string | object): string {
        return jwt.sign(dados, this._segredo, {
            expiresIn: "1d"
        })
    }

    obter(token: string): string| object {
        return jwt.verify(token, this._segredo)
    }
}