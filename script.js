// 1. Declare uma variável de nome weight.
let weight

// 2. Que tipo de dado é a variável acima?
// R: Undefined
console.log(typeof weight)

// 3. Declare uma variável e atribua valores para cada um dos dados:
// name: String
// age: Number (integer)
// stars: Number (float)
// isSubscribed: Boolean
let name = 'Gabriel'
let age = 33
let note = 4.5
let isSubscribed = true

console.log(name, age, note, isSubscribed)

// 4. A variável student abaixo é de que tipo de dados?
// R: String
let student = 'Gabriel'
let age2 = 33
let weight2 = 76.8
let isHuman = true
console.log(typeof student)

// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
let student2

student2 = {
  name: 'Gabriel Augusto da Silva',
  age: 33,
  weight: 76.8,
}
console.log(student2)

// 4.2 Mostre no console a seguinte mensagem: "<name> de <age> pesa <weight> kg.
// ATENÇÃO: substitua <name>, <age> e <weight> pelos valores de cada propriedade do objeto.
console.log(`O aluno chamado ${student2.name} tem ${student2.age} anos de idade e pesa ${student2.weight} Kg.`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja,somente Array vazio
// R: let students = []

// 6. Reatribua valor para variável acima, colocando dentro dela o objeto student da questão 4 (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array).
let students = [
  'Gabriel Augusto da Silva',
  33,
  76.8
]

// 7. Coloque no console o valor da posição zero do Array acima.
console.log(students[0])

// 8. Crie um novo student e coloque na posição 4 do Array students.
const john = {
  name: 'John',
  age: 45,
  weight: 80.7
}

students[4] = john

// 9. Sem rodar o código, defina a resposta do código abaixo e por quê? Após sua resposta, rode o código e veja se você acertou.
// console.log(a)
// var a = 1
// R: Ao ser rodado, será mostrado o valor como indefinido porque o console.log é exibido antes da variável a ter um valor de atribuição.

console.log(a)
var a = 1
