class Poupanca extends Conta {
    dataAniversario;

    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }
}
