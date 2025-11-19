//Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.

class Agenda {
    private _compromissos: string[] = [];

    adicionarCompromisso(compromisso: string): void {
        this._compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado com sucesso!`);
    }

    listarCompromissos(): void {
        if (this._compromissos.length === 0) {
            console.log("Nenhum compromisso registrado.");
            return;
        }
        console.log("Lista de compromissos:")
        this._compromissos.forEach((item, index) => {
            console.log(`${index + 1} - ${item}`);
        });
    }
}

const agenda1 = new Agenda();

agenda1.adicionarCompromisso("Ir ao médico");
agenda1.adicionarCompromisso("Reunião às 15hrs");

agenda1.listarCompromissos();