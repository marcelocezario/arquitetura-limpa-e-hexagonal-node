import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from "terminal-kit";
import menuFundamentos from "./menuFundamentos";

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu Principal');

    const [indice] = await TerminalUtil.menu([
        '1. Fundamentos',
        'Sair'
    ]);

    switch (indice) {
        case 0:
            await menuFundamentos();
            break;
        default:
            process.exit(0);
    }

    menuPrincipal();
}