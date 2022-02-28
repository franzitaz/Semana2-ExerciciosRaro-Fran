/*A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos do array para adicionar os meses faltantes.

Como adicionar os meses de "fev", "mai", "ago", "nov" nas posições corretas?

=====*/
const meses = [
    'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];

//Uso do método splice para adicionar valores na array (length, elementos deletados, adicionar o valor).
meses.splice(1,1,'fev');
meses.splice(4,0,'mai');
meses.splice(7,0,'ago');
meses.splice(10,0,'nov');

console.log(meses);

//Obs: Paulo, eu gostaria de ter feito uma função automatizada, mas, infelizmente, não consegui fazê-la apenas usando os métodos do array. Onde essa função pudesse receber o valor mês, organizasse e também arrumasse a array caso tivesse meses repetidos.