class PessoaJuridica extends Pessoa {
    private readonly _cnpj: string;

    constructor (nome: string, cnpj: string, idade: number, dataNascimento: Date){
        super (nome, idade, dataNascimento);
        this._cnpj = cnpj;
    }

    get cnpj(): string {
        return this._cnpj;
    }

    get nome(): string {
        return this._nome + '-Jurídica';
    }

}