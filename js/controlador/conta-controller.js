class ContaController {
    constructor() {
      this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
      this.repositorioContas.adicionar(conta);
    }

    listar() {
      this.repositorioContas.getContas().forEach(conta =>
        this.inserirContaNoHTML(conta)
      );
    }

    inserir(evento) {
      evento.preventDefault();
      const elementoNumero = document.querySelector('#numero');
      const elementoSaldo = document.querySelector('#saldo');
      const elementoDataAniversario = document.querySelector('#data_aniversario');
      const elementoTipoConta = document.querySelector('#tipo_conta');

      let conta;

      switch (elementoTipoConta.value) {
        case 'conta':
          conta = new Conta(
            elementoNumero.value,
            Number(elementoSaldo.value)
          );
          break;

        case 'conta_bonificada':
          conta = new ContaBonificada(
            elementoNumero.value,
            Number(elementoSaldo.value)
          );
          break;

        case 'poupanca':
          conta = new Poupanca(
            elementoNumero.value,
            Number(elementoSaldo.value),
            elementoDataAniversario.value
          );
          break;
      }

      this.repositorioContas.adicionar(conta);
      this.inserirContaNoHTML(conta);
    }

    inserirContaNoHTML(conta) {
      const elementoP = document.createElement('p');
      elementoP.textContent = `Conta ${conta.numero}: R$ ${conta.saldo} `;
      if (conta.dataAniversario)
        elementoP.textContent += `Venc: ${conta.dataAniversario}`;
      const botaoApagar = document.createElement('button');
      botaoApagar.textContent = 'X';

      botaoApagar.addEventListener('click', (event) => {
        this.repositorioContas.remover(conta.numero);
        event.target.parentElement.remove();
      });

      elementoP.appendChild(botaoApagar);
      document.body.appendChild(elementoP);
    }
}
