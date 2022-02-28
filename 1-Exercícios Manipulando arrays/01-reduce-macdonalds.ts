/*
Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer. Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string?

=====*/
const ingredientes = [
    '2 hambúrgueres',
    'alface',
    'queijo',
    'molho especial',
    'cebola',
    'picles',
    'pão com gergelim'
];

//Tipagem em ts de uma array de strings que pede um retorno (return) do tipo string.
const fazUmBigMac = (ingredientes: string[]): string => {
    //Array 'ingredientes' pede para o reduce um acúmulo/soma de seus valores. Em sua sintaxe é nomeado o acumulador resultante (resultLanche) e os valores da array (ingrediente). Depois da arrow temos o retorno e a "formatação" dos valores acumulados/somados (2 hambúrgueres, alface, etc).
    return ingredientes.reduce((resultLanche, ingrediente) => `${resultLanche}, ${ingrediente}`);
};

console.log(fazUmBigMac(ingredientes));
