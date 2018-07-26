var origTabuleiro;
const jogadorHuM = 'O';
const jogadorIa = 'X';
const estVitorioso = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

// Obtenho todas as celulas
const cells = document.querySelectorAll('.cell');
inicioJogo();

function inicioJogo() {
	document.querySelector(".fimJogo").style.display = "none";
	debugger
	origTabuleiro = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', exeClick, false);
	}
}

function exeClick(quadrado) {
	
	if (typeof origTabuleiro[quadrado.target.id] == 'number') {
		jogar(quadrado.target.id, jogadorHuM)
		if (!verGanhador(origTabuleiro, jogadorHuM) && !verEmpate()) jogar(melhorJogada(), jogadorIa);
	}
}

function jogar(quadradoId, jogador) {
	origTabuleiro[quadradoId] = jogador;
	document.getElementById(quadradoId).innerText = jogador;
	let vencJogo = verGanhador(origTabuleiro, jogador)
	if (vencJogo) gameOver(vencJogo)
}

function verGanhador(tabu, jogador) {
	let jogadores = tabu.reduce((a, e, i) =>
		(e === jogador) ? a.concat(i) : a, []);
	let vencJogo = null;
	for (let [index, win] of estVitorioso.entries()) {
		if (win.every(elem => jogadores.indexOf(elem) > -1)) {
			vencJogo = {index: index, jogador: jogador};
			break;
		}
	}
	return vencJogo;
}

function gameOver(vencJogo) {
	for (let index of estVitorioso[vencJogo.index]) {
		document.getElementById(index).style.backgroundColor =
			vencJogo.jogador == jogadorHuM ? "blue" : "red";
	}
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', exeClick, false);
	}
	declararVencendor(vencJogo.jogador == jogadorHuM ? "Voce Ganhou a partida!" : "Voce perdeu a partida.");
}

function declararVencendor(who) {
	document.querySelector(".fimJogo").style.display = "block";
	document.querySelector(".fimJogo .text").innerText = who;
}

function emptySquares() {
	return origTabuleiro.filter(s => typeof s == 'number');
}

function melhorJogada() {
	return minimax(origTabuleiro, jogadorIa).index;
}

function verEmpate() {
	
	if (emptySquares().length == 0) {
		for (var i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = "green";
			cells[i].removeEventListener('click', exeClick, false);
		}
		declararVencendor("Empate!")
		return true;
	}
	return false;
}

function minimax(novoTabuleiro, jogador) {
    debugger
	var posDisponiveis = emptySquares();

	if (verGanhador(novoTabuleiro, jogadorHuM)) {
		return {score: -10};
	} else if (verGanhador(novoTabuleiro, jogadorIa)) {
		return {score: 10};
	} else if (posDisponiveis.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < posDisponiveis.length; i++) {
		var move = {};
		move.index = novoTabuleiro[posDisponiveis[i]];
		novoTabuleiro[posDisponiveis[i]] = jogador;

		if (jogador == jogadorIa) {
			var result = minimax(novoTabuleiro, jogadorHuM);
			move.score = result.score;
		} else {
			var result = minimax(novoTabuleiro, jogadorIa);
			move.score = result.score;
		}

		novoTabuleiro[posDisponiveis[i]] = move.index;
        //debugger
		moves.push(move);
	}

	var bestMove;
	if (jogador === jogadorIa) {
		var bestScore = -100;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 100;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

    return moves[bestMove];
    console.log("teste" + moves[bestMove]) 
}
