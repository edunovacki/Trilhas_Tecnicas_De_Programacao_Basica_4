//Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].

//Crie duas subclasses: Project e DailyTasks.
//Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
//DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
//Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
//Dica: para diferenciar as tarefas e dizer se ela são de projetos ou diárias, utilizem objetos

type Task = {
    type: string;
    description: string;
}

abstract class TaskManager {
    public abstract addTask(task: string): void;
    public abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: Task[] = [];

    public addTask(task: string): void {
        if (this.tasks.some(t => t.description === task)) {
            console.log("Tarefa já existe no projeto!");
            return;
        }
        
        this.tasks.push({
            type: "project",
            description: task
        })
    }

    public listTasks(): string[] {
        return this.tasks.map(t => `[PROJETO] ${t.description}`);
    }
}

class DailyTasks extends TaskManager {
    private tasks: Task[] = [];

    public addTask(task: string): void {
        if(this.tasks.some(t => t.description === task)) {
            console.log("Tarefa diária já existe!");
            return;
        }

        this.tasks.push({
            type: "daily",
            description: task
        });
    }

    public listTasks(): string[] {
        return this.tasks.map(t => `[DIÁRIA] ${t.description}`);
    }
}

const projeto = new Project();
projeto.addTask("Criar layout");
projeto.addTask("Criar layout");
projeto.addTask("Configurar banco");

console.log(projeto.listTasks());

const diaria = new DailyTasks();
diaria.addTask("Arrumar a cama");
diaria.addTask("Tomar café");
diaria.addTask("Arrumar a cama");

console.log(diaria.listTasks());