/*1. Utilizando o enunciado e código do exercício "as rosas não falam", presentes no bloco de exercícios anterior, você deve implementar a mesma solução, porém utilizando promises e funções async/await (os dois formatos). Dica: Os setTimeout's dos métodos dos versos devem ser sustituídos por timeouts promisificados. Uma possível implementação de timeout em modo promise é:

=====*/

//Cria Promise. Void faz parte da tipagem do TS, significa "nada" (não é nem null).
const timeout = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
};

//Funções das frases da música para uma melhor manutenção.
const queixoMeAsRosas = () => {
        console.log('Queixo-me às rosas');
        return timeout(1000);
};

const masQueBobagem = () => {
        console.log('Mas que bobagem');
        return timeout(1000);
};

const asRosasNaoFalam = () => {
        console.log('As rosas não falam');
        return timeout(1000);
};

const simplesmenteAsRosasExalam = () => {
        console.log('Simplesmente as rosas exalam');
        return timeout(1000);
};

const oPerfumeQueRoubamDeTi = () => {
        console.log('O perfume que roubam de ti, ai');
        return timeout(1000);
};

//Chama as funções usando Promise com async/await.
async function timeoutAsAw() {
  await timeout(2000);
  await queixoMeAsRosas();
  await masQueBobagem();
  await asRosasNaoFalam();
  await simplesmenteAsRosasExalam();
  await oPerfumeQueRoubamDeTi();
};

//Chama a função async/await.
timeoutAsAw();