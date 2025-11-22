//Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).
//Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.
//Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined
//Dica: pesquisar sobre o método find

interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[] = [];

    adicionarProduto(produto: ProdutoLoja) {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const loja = new Loja();

loja.adicionarProduto({ codigo: 1, nome: "Camisa"});
loja.adicionarProduto({ codigo: 2, nome: "Boné"});
loja.adicionarProduto({ codigo: 3, nome: "Calça"});

console.log(loja.buscarProdutoPorCodigo(2));

console.log(loja.buscarProdutoPorCodigo(99));