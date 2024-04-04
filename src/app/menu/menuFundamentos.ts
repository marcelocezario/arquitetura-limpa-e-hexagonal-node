import TerminalUtil from "@/app/util/TerminalUtil";
import polimorfismo from "../fundamentos/polimorfismo";

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos');

    const [indice] = await TerminalUtil.menu([
        '1. Polimorfismo',
        'Voltar'
    ]);

    switch (indice) {
        case 0:
            await polimorfismo();
            break;
        default:
            return;
    }

    await menuFundamentos();
}