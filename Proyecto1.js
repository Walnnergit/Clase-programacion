"use strict";
class Sumar {
    num1;
    num2;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    calcularSuma() {
        return this.num1 + this.num2;
    }
}
const suma = new Sumar(5, 10);
console.log("La suma es:", suma.calcularSuma());
