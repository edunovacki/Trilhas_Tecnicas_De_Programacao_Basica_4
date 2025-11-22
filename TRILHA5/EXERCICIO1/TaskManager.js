"use strict";
//Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].
Object.defineProperty(exports, "__esModule", { value: true });
class TaskManager {
}
class Project extends TaskManager {
    tasks = [];
    addTask(task) {
        if (this.tasks.some(t => t.description === task)) {
            console.log("Tarefa já existe no projeto!");
            return;
        }
        this.tasks.push({
            type: "project",
            description: task
        });
    }
    listTasks() {
        return this.tasks.map(t => `[PROJETO] ${t.description}`);
    }
}
class DailyTasks extends TaskManager {
    tasks = [];
    addTask(task) {
        if (this.tasks.some(t => t.description === task)) {
            console.log("Tarefa diária já existe!");
            return;
        }
        this.tasks.push({
            type: "daily",
            description: task
        });
    }
    listTasks() {
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
//# sourceMappingURL=TaskManager.js.map