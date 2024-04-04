import corrida from "@/core/fundamentos/Corrida";
import TerminalUtil from "../util/TerminalUtil";

export default async function dip() {
    TerminalUtil.titulo('DIP - Dependency Inversion Principle');
    corrida();
    await TerminalUtil.esperarEnter();
}