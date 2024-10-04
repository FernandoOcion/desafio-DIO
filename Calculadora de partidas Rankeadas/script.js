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
