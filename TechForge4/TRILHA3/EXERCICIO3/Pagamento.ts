//Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.

abstract class Pagamento {
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    private _numeroCartao: number;

    constructor(numeroCartao: number) {
        super()
        this._numeroCartao = numeroCartao;
    }

    public processar() {
        if(String(this._numeroCartao).length !== 6){
            console.log("Número do cartão inválido (deve ter 6 dígitos).");
            return;
        }
        console.log(`Pagamento com cartão ${this._numeroCartao} processado com sucesso!`);
    }
}

class PagamentoBoleto extends Pagamento {

    private gerarBoleto(): string{
        const codigo = "BOLETO-" + Math.floor(Math.random() * 99999999);
        return codigo;
    }

    public processar(): void{
        const codigo = this.gerarBoleto();
        console.log(`Boleto gerado com sucesso! Código: ${codigo}`);
    }
}

function processarPagamento(p: Pagamento): void {
    p.processar();
}

const pagamento1 = new PagamentoCartao(123456);
const pagamento2 = new PagamentoBoleto();
const pagamento3 = new PagamentoCartao(222222);

processarPagamento(pagamento1);
processarPagamento(pagamento2);
processarPagamento(pagamento3);