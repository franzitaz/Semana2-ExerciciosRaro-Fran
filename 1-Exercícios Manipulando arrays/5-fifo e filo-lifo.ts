/*Na computação, estudamos algumas estruturas de dados importantes, muitas delas baseadas em arrays. Aqui em destaque, dois tipos diferentes, as filas e as pilhas. As filas são arrays que estabelecem a política de FIFO (First In, First Out), ou seja, o primeiro elemento adicionado é o primeiro a ser removido. As pilhas, por sua vez, são arrays que estabelecem a política de LIFO (Last In, First Out), ou seja, o último elemento adicionado é o primeiro a ser removido. Abaixo, foram iniciadas estruturas de código que implementam ambas estruturas. Pede-se que, utilizando os métodos de adicionar e remover os itens nos arrays, sejam implementados os movimentos corretos para cada estrutura.

=====*/

//função fila
function fila() {
    const fila:number[] = [];
  
    const adicionar = (elemento:number) => {
      return fila.push(elemento); //adiciona um novo elemento à variável de fila.
    };
  
    const remover = () => {
      return fila.shift(); //remove um novo elemento da variável de fila.
    };
  
    return { adicionar, remover };
  }
  
  //função pilha
  function pilha() {
    const pilha:number[] = [];
  
    const adicionar = (elemento:number) => {
      return pilha.push(elemento); //adiciona um novo elemento à variável de pilha.
    };
  
    const remover = () => {
      return pilha.pop(); //remove um novo elemento da variável de pilha.
    };
  
    return { adicionar, remover };
  }
  
  const fila1 = fila();
  fila1.adicionar(1);
  fila1.adicionar(2);
  fila1.adicionar(3);
  
  console.log('valor esperado: 1; valor removido: ', fila1.remover());
  console.log('valor esperado: 2; valor removido: ', fila1.remover());
  console.log('valor esperado: 3; valor removido: ', fila1.remover());
  
  
  const pilha1 = pilha();
  pilha1.adicionar(1);
  pilha1.adicionar(2);
  pilha1.adicionar(3);
  
  console.log('valor esperado: 3; valor removido: ', pilha1.remover());
  console.log('valor esperado: 2; valor removido: ', pilha1.remover());
  console.log('valor esperado: 1; valor removido: ', pilha1.remover());