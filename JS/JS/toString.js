// === TO STRING ===

// ЧИСЛО К СТРОКЕ

let value = 0;

// 1-й СПОСОБ

let toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `,typeof toString);

// 2-й СПОСОБ 

toString = value + "";
console.log(`${value}, через конкатинацию String(): `, toString);
console.log(`тип данных ${value}, через конкатинацию String(): `,typeof toString);


// ЧИСЛО К СТРОКЕ

value = 1;

// 1-й СПОСОБ

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `,typeof toString);

// 2-й СПОСОБ 

toString = value + "";
console.log(`${value}, через конкатинацию String(): `, toString);
console.log(`тип данных ${value}, через конкатинацию String(): `, typeof toString);

//  НЕ ЧИСЛО К СТРОКЕ

value = Infinity;

// 1-й СПОСОБ

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `,typeof toString);

// 2-й СПОСОБ 

toString = value + "";
console.log(`${value}, через конкатинацию String(): `, toString);
console.log(`тип данных ${value}, через конкатинацию String(): `, typeof toString);

//  НЕ ЧИСЛО К СТРОКЕ

value = NaN;

// 1-й СПОСОБ

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `,typeof toString);

// 2-й СПОСОБ 

toString = value + "";
console.log(`${value}, через конкатинацию String(): `, toString);
console.log(`тип данных ${value}, через конкатинацию String(): `, typeof toString);

// Булевое(логическое) true к строке

value = true;

// 1-й СПОСОБ

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `,typeof toString);

// 2-й СПОСОБ 

toString = value + "";
console.log(`${value}, через конкатинацию String(): `, toString);
console.log(`тип данных ${value}, через конкатинацию String(): `, typeof toString);

// Булевое(логическое) false к строке

value = false;

// 1-й СПОСОБ

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `,typeof toString);

// 2-й СПОСОБ 

toString = value + "";
console.log(`${value}, через конкатинацию String(): `, toString);
console.log(`тип данных ${value}, через конкатинацию String(): `, typeof toString);

// UNDEFINED к строке

value = undefined;

// 1-й СПОСОБ

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `,typeof toString);

// 2-й СПОСОБ 

toString = value + "";
console.log(`${value}, через конкатинацию String(): `, toString);
console.log(`тип данных ${value}, через конкатинацию String(): `, typeof toString);

// NULL к строке

value = null;

// 1-й СПОСОБ

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `,typeof toString);

// 2-й СПОСОБ 

toString = value + "";
console.log(`${value}, через конкатинацию String(): `, toString);
console.log(`тип данных ${value}, через конкатинацию String(): `, typeof toString);