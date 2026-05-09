class Sumar {
    num1: number;
    num2: number;

constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
}

calcularSuma(): number {
    return this.num1 + this.num2;
    }
}

const suma = new Sumar(5, 10);

console.log("La suma es:", suma.calcularSuma());
