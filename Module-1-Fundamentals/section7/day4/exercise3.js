const greet = (name = 'user', phrase = 'Hi') => `${phrase} ${name}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet());
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'