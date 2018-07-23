Algoritmo Minimax

função starGame -> Reinicia o tabuleiro, percorrendo cada celula, limpado todas as cores e 
setando os espaços vazios
origBoard tem o indice e o numero de cada posição da célula

função turnClick -> Verifica se há espaço vazio fazendo uma comparação com numero 
e se há, habilita o jogador huPlayer a jogar através da chamada da função "turn", que passa
o id(indice) da posição onde o jogador irá jogar; Logo em seguida será a vez do "aiPlayer" que irá
jogar se o huPlayer não ganhou (ganhar é impossível) ou se não houver empate, desta maneira chamara a 
função "turn" passando a funçao bestspot que chama o minimax, e o aiPlayer

funçao turn -> tem dois parameto que é o id e o jogador, é atribuido a cada célula o id onde
o jogador irá jogar; exemplo na posição na celula 0 id: 0 = player(O); e a cada jogada faço a
chamada da função checkWin e verifica se o estado atual esta entre os estados de vitória(winCombos)
(se sim checWing retorna o indice e o jogador(x ou O) ganhador se não gameWon é setado como null
Logo adiante é chamada a função "gameOver"  passando gameWon como parametro que verifica se o huPlayer ganhou ou perdeu e mostrando a mensagem na tela, onde também é setado as cores dos ganhadores.

função checkWin -> plays recebe todos os indices que o jogador jogou , Para que assim possa ser possível verificar se as celulas jogadas pelo huPlayer esta entre os estados de vitória(winCombos),
gameWon é setado como null inicialmente, se houver um ganhador o gameWon recebe o indice e o 
jogador(X ou O)
-------
As observações
Na funçao turn o gameOver só é chamada com existe um gameWon ou seja um ganhador, passando o indice
e o player ganhador.
-------

função gameOver = > nessa primeira interação é para verificar o index(posição) do wimCombos, que possui
os estados vencedores, exemplo: qual foi o indice do estado terminal(vencedor) foi encontrado(match)
logo pinto as celulas de acordo ao ganhador, maquina ou humano, acessado pelo objeto gameWon.player;
seguindo adiante para cada celula ele desabilita, para que o huPlayer não possa continuar a jogada
e chama a função declareWiner

função emptySquares => verificar se as celular é igual a tipo numérico se for , é porque esta vazia

função bestSpot chama o minimax

função checkTie verifica se o tamanho for igual a 0 é porque não há mais espaços para ser jogado
entao pinta todos os quadrados de zero, e emite "Tie Game"


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
