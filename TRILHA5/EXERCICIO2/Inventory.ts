//Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript

//Crie duas subclasses WarehouseInventory e StoreInventory.
//WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
//StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
//Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.

abstract class Inventario {
    public abstract adicionarItem(item: string, quantidade: number): void;
    public abstract removerItem(item: string): void;
    public abstract getInventario(): Record<string, number>;
}

class InventarioArmazem extends Inventario {
    private inventario: Record<string, number> = {}

    public adicionarItem(item: string, quantidade: number): void {
        if(this.inventario[item]) {
            this.inventario[item] += quantidade;
        } else {
            this.inventario[item] = quantidade;
        }
    }

    public removerItem(item: string): void {
        delete this.inventario[item];
    }

    public getInventario(): Record<string, number> {
        return this.inventario;
    }
}

class InventarioLoja extends Inventario {
    private inventario: Record<string, number> = {};
    private limitePorItem = 10;

    public adicionarItem(item: string, quantidade: number): void {
        const quantidadeAtual = this.inventario[item] || 0;
        const novaQuantidade = quantidadeAtual + quantidade;

        this.inventario[item] = Math.min(novaQuantidade, this.limitePorItem);
    }

    public removerItem(item: string): void {
        delete this.inventario[item]
    }

    public getInventario(): Record<string, number> {
        return this.inventario;
    }
}

const armazem = new InventarioArmazem();
armazem.adicionarItem("Arroz", 60);
armazem.adicionarItem("Arroz", 20);
armazem.adicionarItem("Feijão", 30);

console.log(armazem.getInventario());

armazem.removerItem("Feijão");

const loja = new InventarioLoja();
loja.adicionarItem("Arroz", 7);
console.log(loja.getInventario());

loja.adicionarItem("Arroz", 5); 
console.log(loja.getInventario());

loja.adicionarItem("Feijão", 15);
console.log(loja.getInventario());

loja.removerItem("Arroz");
console.log(loja.getInventario());