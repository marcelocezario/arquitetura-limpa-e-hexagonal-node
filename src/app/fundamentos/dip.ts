import corrida from "@/core/fundamentos/Corrida";
import TerminalUtil from "../util/TerminalUtil";
import Carro from "@/core/fundamentos/Carro";
import Fusca from "@/core/fundamentos/Fusca";
import Ferrari from "@/core/fundamentos/Ferrari";
import Civic from "@/core/fundamentos/Civic";
import { terminal } from "terminal-kit";

export default async function dip() {
    TerminalUtil.titulo('DIP - Dependency Inversion Principle');

    const [tipo] = await TerminalUtil.selecao('Tipo de carro?', ['Fusca', 'Civic', 'Ferrari']);

    let carro: Carro;
    switch(tipo) {
        case 0:
            carro = new Fusca();
            break;
        case 1:
            carro = new Civic();
            break;
        case 2:
            carro = new Ferrari();
            break;
        default:
            throw new Error('Selecione um veículo');
    }
    // corrida(carro);
    corrida(carro, terminal.gray);
    await TerminalUtil.esperarEnter();
}