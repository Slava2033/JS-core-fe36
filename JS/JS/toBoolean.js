// === TO BOOLEAN ===

// ЛЮБОЕ СТРОЧНОЕ ЗНАЧЕНИЕ К БУЛЮ

let value = "Bla Bla Bla";

// 1-й СПОСОБ

let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// ЛЮБОЕ СТРОЧНОЕ ЧИСЛО К БУЛЮ

value = "123";

// 1-й СПОСОБ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// ПУСТАЯ СТРОКА К БУЛЮ

value = "";

// 1-й СПОСОБ

toBoolean = Boolean(value);
console.log(`пустая строка ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных пустая строка ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`пустая строка ${value}, через !!: `, toBoolean);
console.log(`тип данных пустая строка ${value}, через !!: `, typeof toBoolean);

// СТРОКА С ПРОБЕЛОМ К БУЛЮ

value = " ";

// 1-й СПОСОБ

toBoolean = Boolean(value);
console.log(`строка с пробелом ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных строка с пробелом ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`строка с пробелом ${value}, через !!: `, toBoolean);
console.log(`тип данных строка с пробелом ${value}, через !!: `, typeof toBoolean);


// ЧИСЛО К БУЛЮ

value = 0;

// 1-й СПОСОБ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// ЧИСЛО К БУЛЮ

value = 1;

// 1-й СПОСОБ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// Undefined К БУЛЮ

value = undefined;

// 1-й СПОСОБ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// Null К БУЛЮ

value = null;

// 1-й СПОСОБ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// NaN К БУЛЮ

value = NaN;

// 1-й СПОСОБ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// Infinity К БУЛЮ

value = Infinity;

// 1-й СПОСОБ

toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `,typeof toBoolean);

// 2-й СПОСОБ 

toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);