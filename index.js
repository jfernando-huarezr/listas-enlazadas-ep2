import NumberLinkedList from './src/number-linked-list.js'

// se crea una lista de números
let list = new NumberLinkedList()
let list2 = new NumberLinkedList

//verificando que solo acepte valores numericos (OK)
// list.add('probando')

// se agregan números a la lista
console.log("********************Lista completa***********************")
list.add(10)
list.add(5)
list.add(8)
list.add(2)
list.add(7)
list.add(1)
list.add(3)
list.add(16)
list.add(9)
list.add(11)
list.add(4)

list.print() //10, 5, 8, 2, 7, 1, 3, 16, 9, 11, 4

console.log("\n**************Lista par/ Lista impar*******************")

let even = list.getEven()
let odd = list.getOdd()

even.print() // salida: 10, 8, 2, 16, 4
odd.print() // salida: 5, 7, 1, 3, 9, 11

console.log("\n******Lista menores que 'number' / Lista numeros removidos********")


let listRemoved = list.removeGreaterThan(8)
list.print() // salida: 5, 2, 7, 1, 3, 4
listRemoved.print() // salida: 10, 8, 16, 9, 11

console.log("\n******Lista vacia********")
list2.getEven().print()
