class Stack<T> {

    private items: T[] = [];

    constructor(items: T[]) {
        this.items = items;
    }

    push(item: T){
        this.items.push(item);
    }

    pop(item: T){
        return this.items.pop();
    }

}


let numberStack = new Stack<number>([])

numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack)
console.log(numberStack.pop(3)); // Output: 3
console.log(numberStack)

let stringStack = new Stack<string>([]);

stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack);
console.log(stringStack.pop("World")); // Output: World
console.log(stringStack);
