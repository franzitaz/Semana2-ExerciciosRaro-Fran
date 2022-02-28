/*Implementar o método de pick que receba um parâmetro do tipo array de objetos, e outro parâmetro do tipo array de strings. Este método deverá retornar todos os itens do array original, porém, mantendo somente os atributos com os nomes passados no segundo atributo. Importante: o array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

pick(alunos, ['nome', 'nota']);
// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
//   { nome: 'Ana', nota: 8.7 }
// ]

// forma alternativa de implementação
// pick(alunos, 'nome', 'nome')

// se preferir uma assinatura de typescript, segue:
// export const pick = <T extends Record>(record: T, ...args: (keyof T)[]): Record => {
//   return null;
// };

=====*/

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

//Tipagem no objeto tipo personalizado
//O '?' quer dizer que o atributo pode ter valor ou ser undefined.
type aluno = {
  nome?: string
  nota?: number
  bolsista?: boolean
};

//Tipagem string tipo personalizado
type opcaoT = 'nome' | 'nota' | 'bolsista';

//Retorna atributos conforme o pedido no parâmetro. Usa o index do array no parâmetro (['nome', 'nota']) para fazer uso do seu valor 'string' e acessar o objeto 'alunos' com a parâmetro 'opcao'.
const pick = (alunos: aluno[], opcao: opcaoT[]): aluno[] => {
  return alunos.map(pessoa => {

    //Cria variável opcaoLength para trabalhar com if/else e dar livre escolha de retornar 1, 2 ou 3 atributos do array alunos.
    const opcaoLength = opcao.length;

    if (opcaoLength === 1) {
      return (
        {
          [opcao[0]]: pessoa[opcao[0] as keyof typeof pessoa]
        }
      )
    } else if (opcaoLength === 2) {
      return (
        {
          [opcao[0]]: pessoa[opcao[0] as keyof typeof pessoa],
          [opcao[1]]: pessoa[opcao[1] as keyof typeof pessoa]
        }
      )
    } else {
      return (
        {
          [opcao[0]]: pessoa[opcao[0] as keyof typeof pessoa],
          [opcao[1]]: pessoa[opcao[1] as keyof typeof pessoa],
          [opcao[2]]: pessoa[opcao[2] as keyof typeof pessoa]
        }
      )
    }
  }
  );
};

console.log(pick(alunos, ['nome', 'nota']));
console.log('Array original:');
console.log(JSON.stringify(alunos));


/*'keyof typeof' irá inferir o tipo de um objeto javascript e retornar um tipo que é a união de suas chaves. Como ele pode inferir o valor exato das chaves, ele pode retornar uma união de seus tipos literais em vez de apenas retornar 'string'.

Quando você precisa keyof typeof?
Quando você está lidando com algo que é um tipo e um valor ao mesmo tempo (como uma classe ou um enum), mas está interessado especificamente em qual é o tipo desse valor.

Fontes:
https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript

Como acessar atributos de objeto com base em uma variável no Typescript:
https://smartlogic.io/blog/accessing-object-attributes-based-on-a-variable-in-typescript/
*/