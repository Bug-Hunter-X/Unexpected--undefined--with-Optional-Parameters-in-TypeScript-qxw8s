function printName(name?: string): void {
  if (name === undefined) {
    console.log('No name provided');
  } else {
    console.log(name);
  }
}

printName(); // Prints 'No name provided'
printName(undefined); // Prints 'No name provided'
printName('John'); // Prints 'John' 