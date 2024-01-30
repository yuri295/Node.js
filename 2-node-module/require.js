require('./var');
console.log(require.cache);
console.log(require.main === module); //true
console.log(require.main.filename);
