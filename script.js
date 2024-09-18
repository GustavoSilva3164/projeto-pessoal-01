let salary;
do {
    salary = prompt("Por favor, insira sua média salarial:");
    salary = parseFloat(salary); // Converter para número decimal

    if (salary <= 0) {
        console.log("Por favor, insira um valor válido para a média salarial.");
    }
} while (salary <= 0);  // Continuar pedindo até que o salário seja maior que 0

let gasExpense, foodExpense, leisureExpense, saveAmount;
let salaryBracket;

// Determinar a faixa salarial
switch (true) {
    case salary <= 1500:
        salaryBracket = 1;
        break;
    case salary <= 2000:
        salaryBracket = 2;
        break;
    case salary <= 3500:
        salaryBracket = 3;
        break;
    case salary <= 5000:
        salaryBracket = 4;
        break;
    default:
        salaryBracket = 5;
}

// Calcular as despesas com base na faixa salarial
switch (salaryBracket) {
    case 1:
        gasExpense = salary * 0.05;
        foodExpense = salary * 0.5;
        leisureExpense = salary * 0.15;
        saveAmount = salary * 0.3;
        break;
    case 2:
        gasExpense = salary * 0.1;
        foodExpense = salary * 0.4;
        leisureExpense = salary * 0.2;
        saveAmount = salary * 0.3;
        break;
    case 3:
        gasExpense = salary * 0.15;
        foodExpense = salary * 0.35;
        leisureExpense = salary * 0.2;
        saveAmount = salary * 0.3;
        break;
    case 4:
        gasExpense = salary * 0.2;
        foodExpense = salary * 0.3;
        leisureExpense = salary * 0.25;
        saveAmount = salary * 0.25;
        break;
    case 5:
        gasExpense = salary * 0.25;
        foodExpense = salary * 0.25;
        leisureExpense = salary * 0.2;
        saveAmount = salary * 0.3;
        break;
}

// Mostrar os resultados
console.log(`Para uma média salarial de R$${salary.toFixed(2)}, é recomendado você gastar aproximadamente (ao mês):`);

let expenses = ["Gasolina", "Alimento", "Lazer", "Guardar"];
let values = [gasExpense, foodExpense, leisureExpense, saveAmount];

for (let i = 0; i < expenses.length; i++) {
    console.log(`${expenses[i]}: R$${values[i].toFixed(2)}`);
}

let days = 30;
let dailyFoodExpense = (foodExpense / days).toFixed(2);

console.log(`Gasto diário médio com alimentação: R$${dailyFoodExpense}`);
