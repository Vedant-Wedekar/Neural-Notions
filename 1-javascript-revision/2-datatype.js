// Array to store different data types
const dataTypes = [
    { type: 'String', value: 'Hello World' },
    { type: 'Number', value: 42 },
    { type: 'Boolean', value: true },
    { type: 'Undefined', value: undefined },
    { type: 'Null', value: null },
    { type: 'Object', value: { name: 'John', age: 30 } },
    { type: 'Symbol', value: Symbol('symbol') },
    { type: 'BigInt', value: BigInt(9007199254740991) }
];

// Iterate over the dataTypes array and log the type and value
dataTypes.forEach(dataType => {
    console.log(`Type: ${dataType.type}, Value: ${dataType.value}`);
});
