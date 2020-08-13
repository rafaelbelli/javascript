<h1> Exercícios RocketSeat </h1>

<h2>1º exercício<h2>
  
<p>Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.</p>

<h2>2º exercício</h2>

<p>Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:</p>

    function getRandomColor() {
     var letters = "0123456789ABCDEF";
     var color = "#";
     for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
    }
    var newColor = getRandomColor(); // #E943F0

<h2>3º exercício</h2>

<p>A partir do seguinte vetor:</p> 
var nomes = ["Diego", "Gabriel", "Lucas"];
 
Preencha uma lista (<*ul*>) no HTML com os itens da seguinte forma:<br>
● Diego<br>
● Gabriel<br>
● Lucas<br>
  
<h2>4º exercício</h2>

<p>Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:</p><br>

          <input type="text" name="nome"><br>
          <button onClick="adicionar()">Adicionar</button><br>
                    
<p>Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.</p>

<a href="https://rafaelbellintani.github.io/javascript-rocketseat-1/"><h2>Exercícios Resolvidos</h2></a>
