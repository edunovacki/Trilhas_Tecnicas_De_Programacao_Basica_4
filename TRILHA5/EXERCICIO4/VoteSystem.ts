//Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.

//Crie duas subclasses: Election e Poll.
//Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
//Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).

abstract class SistemaDeVotacao {
    public abstract votar(candidato: string): void;
    public abstract obterResultados(): object;
}

class Eleicao extends SistemaDeVotacao {
    private votos: Record<string, number> = {};

    public votar(candidato: string): void {
        if (this.votos[candidato]) {
            this.votos[candidato]++;
        } else {
            this.votos[candidato] = 1;
        }
    }

    public obterResultados(): object {
        return this.votos;
    }
}

class Enquete extends SistemaDeVotacao {
    private votos: Record<string, number> = {};

    public votar(candidato: string): void {
        if (this.votos[candidato]) {
            this.votos[candidato]++;
        } else {
            this.votos[candidato] = 1;
        }
    }

    public obterResultados(): object {
        return Object.entries(this.votos)
            .sort((a, b) => b[1] - a[1])
            .map(([candidato, votos]) => ({
                candidato,
                votos
            }));
    }
}

const eleicao = new Eleicao();
eleicao.votar("Ana");
eleicao.votar("João");
eleicao.votar("João");
eleicao.votar("Ana");
eleicao.votar("João");

console.log("Resultados da Eleição:");
console.log(eleicao.obterResultados());
// { Ana: 2, João: 3 }

const enquete = new Enquete();
enquete.votar("Bolo");
enquete.votar("Pizza");
enquete.votar("Pizza");
enquete.votar("Hambúrguer");
enquete.votar("Pizza");

console.log("Resultados da Enquete (ordenados):");
console.log(enquete.obterResultados());
