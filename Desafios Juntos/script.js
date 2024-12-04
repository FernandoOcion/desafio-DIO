// Código 1: Calcular Rank por Vitórias/Derrotas
function calcularRank() {
	let vitorias = parseInt(document.getElementById("vitorias").value);
	let derrotas = parseInt(document.getElementById("derrotas").value);
	let eloImg = document.getElementById("elo-img");

	let saldoVitorias = vitorias - derrotas;
	let nivel = determinarNivel(saldoVitorias);

	document.getElementById("resultado").innerHTML =
		`O Herói tem de saldo de <span class="hero-winlvl">${saldoVitorias}</span> e está no nível de <span class="hero-winlvl">${nivel}</span>`;

	switch (true) {
		case saldoVitorias <= 10:
			eloImg.src = "./assets/ferro.png";
			break;
		case saldoVitorias >= 11 && saldoVitorias <= 20:
			eloImg.src = "./assets/bronze.png";
			break;
		case saldoVitorias >= 21 && saldoVitorias <= 50:
			eloImg.src = "./assets/prata.png";
			break;
		case saldoVitorias >= 51 && saldoVitorias <= 80:
			eloImg.src = "./assets/ouro.png";
			break;
		case saldoVitorias >= 81 && saldoVitorias <= 90:
			eloImg.src = "./assets/diamante.png";
			break;
		case saldoVitorias >= 91 && saldoVitorias <= 100:
			eloImg.src = "./assets/lendario.png";
			break;
		default:
			eloImg.src = "./assets/imortal.png";
	}
}

function determinarNivel(vitorias) {
	if (vitorias <= 10) {
		return "Ferro";
	} else if (vitorias >= 11 && vitorias <= 20) {
		return "Bronze";
	} else if (vitorias >= 21 && vitorias <= 50) {
		return "Prata";
	} else if (vitorias >= 51 && vitorias <= 80) {
		return "Ouro";
	} else if (vitorias >= 81 && vitorias <= 90) {
		return "Diamante";
	} else if (vitorias >= 91 && vitorias <= 100) {
		return "Lendário";
	} else if (vitorias >= 101) {
		return "Imortal";
	}
}

// Código 2: Classificar Herói por XP
const classifyButton = document.getElementById("classify-button");
const resultMessage = document.getElementById("result-message");
const resultImg = document.getElementById("result-img");

classifyButton.addEventListener("click", () => {
	const heroName = document.getElementById("hero-name").value;
	const heroXP = parseInt(document.getElementById("hero-xp").value);

	let nivel;

	switch (true) {
		case heroXP <= 1000:
			nivel = "Ferro";
			resultImg.src = "./assets/ferro.png";
			break;
		case heroXP >= 1001 && heroXP <= 2000:
			nivel = "Bronze";
			resultImg.src = "./assets/bronze.png";
			break;
		case heroXP >= 2001 && heroXP <= 5000:
			nivel = "Prata";
			resultImg.src = "./assets/prata.png";
			break;
		case heroXP >= 5001 && heroXP <= 7000:
			nivel = "Ouro";
			resultImg.src = "./assets/ouro.png";
			break;
		case heroXP >= 7001 && heroXP <= 8000:
			nivel = "Platina";
			resultImg.src = "./assets/platina.png";
			break;
		case heroXP >= 8001 && heroXP <= 9000:
			nivel = "Ascendente";
			resultImg.src = "./assets/ascendente.png";
			break;
		case heroXP >= 9001 && heroXP <= 10000:
			nivel = "Imortal";
			resultImg.src = "./assets/imortal.png";
			break;
		default:
			nivel = "Radiante";
			resultImg.src = "./assets/radiante.png";
	}

	resultMessage.innerHTML = `O Herói de nome <span class="hero-nameRank">${heroName}</span> está no nível de <span class="hero-nameRank">${nivel}</span>`;
});

// Código 3: Ataque do Herói
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
		document.getElementById("resultado-ataque").innerHTML =
			`O <span class="hero-nameRankAttack">${this.tipo} ${this.nome}</span> atacou usando <span class="hero-nameRankAttack">${ataque}</span>!`;

		// Substitui a imagem pelo GIF
		document.getElementById("hero-img").src = `./assets/${this.tipo}gif.gif`;

		// Volta para a imagem original após o término da animação
		if (this.tipo === "mago") {
			setTimeout(() => {
				document.getElementById("hero-img").src = `./assets/${this.tipo}.png`;
			}, 8000);
		} else if (this.tipo === "guerreiro" || this.tipo === "monge") {
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
		document.getElementById("resultado-ataque").innerHTML =
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
