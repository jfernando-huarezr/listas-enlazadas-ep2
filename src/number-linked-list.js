class Node {
  constructor(value) {
    //verificar que el valor sea un numero.
    if (typeof(value) !== "number") {
      throw new Error('dato ingresado no es un numero')
    }

    this.value = value
    this.next = null
  }
}

export default class NumberLinkedList {
  constructor() {
    this.head = null
    //añadimos valor para saber el tamaño de la lista
    this.length = 0
  }
  

  add(number) {
    // agrega un nuevo nodo al final de la lista
    //creamos un nuevo nodo "newNode"    
    const newNode = new Node(number)

    //si "head" es null, la lista esta vacia. "newNode" es "head"
    if (!this.head) {
      this.head = newNode
    }

    //Si no, nos movemos al ultimo nodo y lo enlazamos a "newNode".
    else {
      let current = this.head
      for(let i=0; i< this.length-1; i++){
        current = current.next
      }
      current.next = newNode
    }

    //aumentamos el tamaño de la lista
    this.length++
  }

  getEven() {
    // devuelve un nuevo NumberLinkedList con los números pares
    let evenList = new NumberLinkedList()
    //nos pocisionamos en el "head"
    let current = this.head

    while(current) {
      if (current.value%2 == 0) {
        evenList.add(current.value)
      }
      current = current.next
    }

    return evenList
  }

  getOdd() {
    // devuelve un nuevo NumberLinkedList con los números impares  
    let oddList = new NumberLinkedList()
    //nos posicionamos en el "head"
    let current = this.head

    while(current) {
      if (current.value%2 !== 0) {
        oddList.add(current.value)
      }
      current = current.next
    }
    
    return oddList
  }

  removeGreaterThan(number) {
    // remueve los elementos de la lista que son mayores a un número dado
    //Si "head" es nulo, la lista esta vacia, retornamos "null"    
    if (!this.head) return null

    //Creamos una nueva Lista "removed" para almacenar los valores removidos
    let removed = new NumberLinkedList()
    //Nos posicionamos en "head"
    let current = this.head

    //Tenemos que trabajar en base al valor "next", porque si no perdemos ese valor
    //si current.next es nulo, salimos del bucle
    while(current.next) {
          //Si estamos en "head" y el valor es mayor igual que "number"
        if (current === this.head && current.value>=number) {
          //Almacenamos el valor en "removed"
          removed.add(current.value)

          //El "head" va a ser ahora el siguiente valor, y lo quitamos de la lista
          this.head = current.next
          //"current" es ahora el nuevo "head"
          current = this.head
          //Disminuimos el tamaño de la lista
          this.length--
        }

        //si el valor siguiente es mayor igual que "number"
        else if (current.next.value >= number) {
          //Almacenamos el "current.next.value" en la lista "removed"
          removed.add(current.next.value)
          //Ahora el "current.next" va a ser el "current.next.next" y asi quitamos el nodo "current.next" de la lista
          current.next = current.next.next
          //Disminuimos el tamaño de la lista
          this.length--
        }

        //Si no, solo pasamos de valor
        else {
          current = current.next
        }
    }
        
    return removed
  }

  print() {
    // imprime los elementos de la lista en forma de cadena, separados por comas
    //Nos posicionamos en "head" de la lista
    let current = this.head
    
    let answer = []

    while (current) {
      answer.push(current.value)
      current = current.next
    }

    //mostrar "answer" en la consola
    this.head ? console.log(answer.join(", ")) : console.log("La lista esta vacia")
  }
}
