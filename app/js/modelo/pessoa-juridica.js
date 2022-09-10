class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(nome, cnpj, idade, dataNascimento) {
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    get nome() {
        return this._nome + '-Jurídica';
    }
}
