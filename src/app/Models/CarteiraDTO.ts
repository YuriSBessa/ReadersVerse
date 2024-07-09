export class CarteiraDTO {
    username : string;
    saldo_atual : string;

    constructor(username : string, saldo_atual : string) {
        this.username = username;
        this.saldo_atual = saldo_atual;
    }
}