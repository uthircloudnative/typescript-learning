var Stack = /** @class */ (function () {
    function Stack(items) {
        this.items = [];
        this.items = items;
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function (item) {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack = new Stack([]);
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack);
console.log(numberStack.pop(3)); // Output: 3
console.log(numberStack);
var stringStack = new Stack([]);
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack);
console.log(stringStack.pop("World")); // Output: World
console.log(stringStack);
