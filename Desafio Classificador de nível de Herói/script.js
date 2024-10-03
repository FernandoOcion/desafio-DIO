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
