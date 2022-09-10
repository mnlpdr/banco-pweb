const c1 = new Conta('1', 100);
const c2 = new Conta('2');
console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();
const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
let p1 = new PessoaJuridica('PP Coach Relacionamento', '216237', 3, new Date('10/08/2019'));
let p2 = new PessoaFisica('Pedro Paulo Cantalice Marinho Braga', '11122233344', 19, new Date('04/04/2003'));
console.log(p1.nome);
console.log(p2.nome);
