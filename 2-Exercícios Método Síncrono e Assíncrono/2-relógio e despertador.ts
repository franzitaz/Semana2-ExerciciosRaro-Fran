/*2. Neste desafio, precisamos criar duas funções: A primeira o despertador, deverá receber um parâmetro de intervalo em segundos. O despertador deverá "tocar" após o intervalo definido pelo parâmetro.

A segunda função, o relogio, deverá escrever na tela a hora atual, a cada segundo. O formato da saída deverá ser em horas:minutos:segundos.

Importante 1: Ambos os métodos recebem o intervalo em segundos, mas os setInterval e setTimeout trabalham com milissegundos. A conversão de medida será necessária.

Importante 2: a princípio, o relógio deverá rodar indefinidamente. Para parar a execução dele, você pode apetar um ctrl + c, para finalizar a execução do relógio

=====*/

//Função despertador recebe parâmentro em segundos e no 'setTimeout' o valor milisegundos é convertido para segundos.
const despertador = (intervaloEmSegundos: number) => {
    setTimeout(() => {
        console.log(`passaram-se os ${intervaloEmSegundos} segundos`);
    }, intervaloEmSegundos * 1000)
}

//Função relógio printa horário a cada um segundo.
const relogio = () => {

    setInterval(() => {
        const now = new Date();
        console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    }, 1000)
};

despertador(10);
relogio();

