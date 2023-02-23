import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // Create a "State Hook"
  // Sets an object with default attributes, and creates a setter function.
  const [binary, setBinary] = useState({
    val: '',
    isBinary: false,
  });

  // Same thing here, but I don't need default atributes.
  const [dec, setDec] = useState(0);

  useEffect(() => {
    if (binary.val.length >= 0 && binary.isBinary) {
      // Set the decimal val to the bin -> dec conversion.
      setDec(4);
    } 
  }, [binary]);

  // Create regular expression to determine if valid binary.
  const isInValidBinary: RegExp = /[^01]/;

  function handleBinaryInput(event: React.FormEvent<HTMLInputElement>): void {
    const value = event.currentTarget.value;

    setBinary({
      val: value,
      isBinary: !isInValidBinary.test(value),
    });
  };

  function binToDec(bin: string): number {
    let result = 0;

    bin
      .split('')
      .reverse()
      .map((val, idx) => {
        return val === '1' && (result += Math.pow(2, idx));
      });
    return result;
  } 

  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Convert Binary to Decimal
        </p>

      </header>
    </div>
  );
}

export default App;
