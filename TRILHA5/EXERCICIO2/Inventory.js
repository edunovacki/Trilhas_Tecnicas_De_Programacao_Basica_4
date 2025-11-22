"use strict";
//Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
//Crie duas subclasses WarehouseInventory e StoreInventory.
//WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
//StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
//Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.
class Inventario {
}
class InventarioArmazem extends Inventario {
    inventario = {};
    adicionarItem(item, quantidade) {
        if (this.inventario[item]) {
            this.inventario[item] += quantidade;
        }
        else {
            this.inventario[item] = quantidade;
        }
    }
    removerItem(item) {
        delete this.inventario[item];
    }
    getInventario() {
        return this.inventario;
    }
}
class InventarioLoja extends Inventario {
    inventario = {};
    limitePorItem = 10;
    adicionarItem(item, quantidade) {
        const quantidadeAtual = this.inventario[item] || 0;
        const novaQuantidade = quantidadeAtual + quantidade;
        this.inventario[item] = Math.min(novaQuantidade, this.limitePorItem);
    }
    removerItem(item) {
        delete this.inventario[item];
    }
    getInventario() {
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
//# sourceMappingURL=Inventory.js.map