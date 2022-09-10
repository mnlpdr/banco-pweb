class PessoaFisica extends Pessoa {
    private readonly _cpf: string;

    constructor (nome: string, cpf: string, idade: number, dataNascimento: Date){
        super (nome, idade, dataNascimento);
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }

    get nome(): string {
        return this._nome + '-Física';
    }

}