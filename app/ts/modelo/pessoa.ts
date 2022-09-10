class Pessoa {
    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    get nome(): string{
        return this._nome;
    }

    set nome(nome: string){
        this._nome = nome;

    }

    get idade(): number{
        return this._idade;
    }

    set idade(idade: number){
        this._idade = idade;

    }

    get dataNascimento(): Date{
        return this._dataNascimento;
    }

    set dataNascimento(novadataNascimento: Date){
        this._dataNascimento = novadataNascimento;

    }
    

}

