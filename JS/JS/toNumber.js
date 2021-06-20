// === TO NUMBER ===

// ЛЮБОЕ СТРОЧНОЕ ЗНАЧЕНИЕ К ЧИСЛУ

let value = "Bla Bla Bla";

// 1-й СПОСОБ

let toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `,typeof toNumber);

// 2-й СПОСОБ 

toNumber = +value;
console.log(`${value}, через унарный + Number(): `, toNumber);
console.log(`тип данных ${value}, через унарный + Number(): `, typeof toNumber);

//  СТРОЧНОЕ ЧИСЛО К ЧИСЛУ

value = "123";

// 1-й СПОСОБ

toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `,typeof toNumber);

// 2-й СПОСОБ 

toNumber = +value;
console.log(`${value}, через унарный + Number(): `, toNumber);
console.log(`тип данных ${value}, через унарный + Number(): `, typeof toNumber);

//  ПУСТАЯ СТРОКА К ЧИСЛУ

value = "";

// 1-й СПОСОБ

toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных пустая строка ${value}, через конструктор Number(): `,typeof toNumber);

// 2-й СПОСОБ 

toNumber = +value;
console.log(`пустая строка ${value}, через унарный + Number(): `, toNumber);
console.log(`тип данных пустая строка ${value}, через унарный + Number(): `, typeof toNumber);

// СТРОКА С ПРОБЕЛОМ К ЧИСЛУ

value = " ";

// 1-й СПОСОБ

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных строка с пробелом  ${value}, через конструктор Number(): `,typeof toNumber);

// 2-й СПОСОБ 

toNumber = +value;
console.log(`строка с пробелом  ${value}, через унарный + Number(): `, toNumber);
console.log(`тип данных строка с пробелом ${value}, через унарный + Number(): `, typeof toNumber);


// Булевое(логическое) true к числу

value = true;

// 1-й СПОСОБ

// 1-й СПОСОБ

toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `,typeof toNumber);

// 2-й СПОСОБ 

toNumber = +value;
console.log(`${value}, через унарный + Number(): `, toNumber);
console.log(`тип данных ${value}, через унарный + Number(): `, typeof toNumber);

// Булевое(логическое) false к числу

value = false;

// 1-й СПОСОБ

toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `,typeof toNumber);

// 2-й СПОСОБ 

toNumber = +value;
console.log(`${value}, через унарный + Number(): `, toNumber);
console.log(`тип данных ${value}, через унарный + Number(): `, typeof toNumber);

// UNDEFINED к числу

value = undefined;

// 1-й СПОСОБ

toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `,typeof toNumber);

// 2-й СПОСОБ 

toNumber = +value;
console.log(`${value}, через унарный + Number(): `, toNumber);
console.log(`тип данных ${value}, через унарный + Number(): `, typeof toNumber);

// NULL к числу

value = null;

// 1-й СПОСОБ

toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `,typeof toNumber);

// 2-й СПОСОБ 

toNumber = +value;
console.log(`${value}, через унарный + Number(): `, toNumber);
console.log(`тип данных ${value}, через унарный + Number(): `, typeof toNumber);