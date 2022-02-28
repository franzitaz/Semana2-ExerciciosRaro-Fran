/*1. As rosas não falam
"As rosas não falam", música do compositor Cartola, possui a seguinte estrofe:

 Queixo-me às rosas
 Mas que bobagem
 As rosas não falam
 Simplesmente as rosas exalam
 O perfume que roubam de ti, ai

No código abaixo, esta música foi implementada, porém cada verso leva um tempo indefinido (aleatório) para ser "cantado" na tela. A consequência disso é que raramente a música será cantada da forma correta.

Modifique os métodos de versos, utilizando callbacks, de forma que a música seja reproduzida na sequência correta. o tipo do callback já está definido em callbackFn

=====*/

const desafio1asRosasNaoFalam = () => {
    //Void quer dizer que retorna nada
    type callbackFn = () => void;
    const geraIntervaloAleatorio = (): number => Math.floor(Math.random() * 3 * 1000);
  
    // métodos de versos. Estes métodos deverão ser modificados.
    const queixoMeAsRosas = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('Queixo-me às rosas');
        return callback();
      }, geraIntervaloAleatorio());
    };
  
    const masQueBobagem = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('Mas que bobagem');
        return callback();
      }, geraIntervaloAleatorio());
    };
  
    const asRosasNaoFalam = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('As rosas não falam');
        return callback();
      }, geraIntervaloAleatorio());
    };
  
    const simplesmenteAsRosasExalam = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('Simplesmente as rosas exalam');
        return callback();
      }, geraIntervaloAleatorio());
    };
  
    const oPerfumeQueRoubamDeTi = (callback: callbackFn) => {
      setTimeout(() => {
        console.log('O perfume que roubam de ti, ai');
        return callback();
      }, geraIntervaloAleatorio());
    };
  
    // Tentativa de cantar a música. Este bloco precisa ser modificado.
    //Callback Hell
    queixoMeAsRosas(() => {
      masQueBobagem(() => {
        asRosasNaoFalam(() => {
          simplesmenteAsRosasExalam(() => {
            oPerfumeQueRoubamDeTi(() => {
            });
          });
        });
      });
    });
  };
  
  desafio1asRosasNaoFalam();