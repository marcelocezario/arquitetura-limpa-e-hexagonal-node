export default class Id {
    static gerarHash(): string {
        return `${Math.floor(Math.random() * 1000000000)}`;
    }
}