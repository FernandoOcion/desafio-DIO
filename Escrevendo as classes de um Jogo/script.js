class Heroi {
	constructor(nome, idade, tipo) {
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
	}

	atacar() {
		let ataque;
		switch (this.tipo) {
			case "mago":
				ataque = "magia";
				break;
			case "guerreiro":
				ataque = "espada";
				break;
			case "monge":
				ataque = "artes marciais";
				break;
			case "ninja":
				ataque = "shuriken";
				break;
		}
		document.getElementById("resultado").innerHTML =
			`O <span class="hero-nameRankAttack">${this.tipo} ${this.nome}</span> atacou usando <span class="hero-nameRankAttack">${ataque}</span>!`;

		// Substitui a imagem pelo GIF
		document.getElementById("hero-img").src = `./assets/${this.tipo}gif.gif`;

		// Volta para a imagem original após o término da animação

		// Corrigindo o if else
		if (this.tipo === "mago") {
			setTimeout(() => {
				document.getElementById("hero-img").src = `./assets/${this.tipo}.png`;
			}, 8000);
		} else if (this.tipo === "guerreiro" || this.tipo === "monge") {
			// Corrigindo a condição
			setTimeout(() => {
				document.getElementById("hero-img").src = `./assets/${this.tipo}.png`;
			}, 2000);
		} else if (this.tipo === "ninja") {
			setTimeout(() => {
				document.getElementById("hero-img").src = `./assets/${this.tipo}.png`;
			}, 3500);
		}
	}
}

const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const tipoSelect = document.getElementById("tipo");
const btnAtacar = document.getElementById("btn-atacar");

btnAtacar.addEventListener("click", () => {
	const nome = nomeInput.value;
	const idade = parseInt(idadeInput.value);
	const tipo = tipoSelect.value;

	if (nome && idade && tipo) {
		hero = new Heroi(nome, idade, tipo); // Atribui a instância do herói à variável global
		hero.atacar();
	} else {
		document.getElementById("resultado").innerHTML =
			"Por favor, preencha todos os campos!";
	}
});

// Evento para mudar a imagem do herói ao selecionar o tipo
tipoSelect.addEventListener("change", () => {
	const tipo = tipoSelect.value;
	document.getElementById("hero-img").src = `./assets/${tipo}.png`;
	if (hero) {
		// Verifica se a instância do herói já existe
		hero.tipo = tipo; // Atualiza o tipo do herói
	}
});
