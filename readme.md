Algoritmo Minimax

Entendendo a função minimax 

Primeiramente é criado uma variavel que recebe o retorno de uma função se aquele espaço(quadrado)
esta vazio(é um numero) ou nao; logo em seguida é feito alguns if para veririficar se é o estado
termnial retornando um valor , usando para isso a função "checkWin" que é passado o tabuleiro
(que tem seu valoro mudado a cada chamada) e o jogador(huPlayer e aiPlayer) dessa maneira os
jogadores recebem uma pontuação(score). Logo adiante é declarada um vetor moves que irá
armazenar o indice e o score do jogador, para que no final possa ser dada a jogada maximizadora
onde é fornecida o indice e o score. Logo em seguida é percorrido todos os espaços vazios 
disponiveis para ser jogado , em "move.index"  passo o index do espaço vazio e guardo em "move" 
em seguida é passado a jogada "X"; em seguida é feita a comparação se o jogador for o computador(Ia)
a proxima jogada vai ser do humano, fazendo a chamada recursiva do minimax e retornando um valor
caso seja estado terminal (-10 no caso do huPlayer); na proxima jogada se repitira mas com a chamada
do aiPlayer. Depois de ter percorrido, como é uma busca em profundidade, voltase para 
o estado inicial,"newBoard[availSpots[i]] = move.index", para outra opção de jogada 
(que é o proximo espaço em branco) e sera armazenada no vetor de objetos "moves" o indice e o score.
Depois de ter percorrido todas as opçoes de jogada, e identificado os estados terminais atribuindo
um score, é feita a verificaçao no vetor de objetos "moves" que contem o indice e o score de cada
jogada se for o aiPlayer é atribuido um maior valor que é +10, setando inicialmente um valor 
muito pequeno, se for o huPlayer é atribuido um menor valor -10. A verificaçao é feita 
de baixo pra cima e a parti da esquerda da árvore.
