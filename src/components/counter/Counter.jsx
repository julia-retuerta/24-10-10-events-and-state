// EVENTOS EN REACT

// const Counter = () => {
//   return <button onClick={printClick}>+1</button>;
// };

// export default Counter;

// const printClick = () => {
//   console.log('CLICK');
// };

////////////////////////////////////////

// CON ENVÍO DE PARÁMETROS:

// const Counter = () => {
//   const name = 'Marcos';
//   return <button onClick={() => printClick(name)}>+1</button>;
// };

// export default Counter;

// Dejar siempre la función fuera:

// const printClick = name => {
//   console.log('CLICK' + name);
// };

////////////////////////////////////////

// De forma automática se envía la inf del evento y se puede ver en la consola:

// const printClick = event => {
//     console.log(event);
//   };

////////////////////////////////////////

// HOOK DEL ESTADO useState

// import { useState } from 'react';

// const Counter = () => {
//   const [value, setValue] = useState(0);

//   console.log(value);
//   return (
//     <>
//       <h1></h1>
//       <button onClick={printClick}>+1</button>
//     </>
//   );
// };

// const printClick = () => {
//   console.log('CLICK');
// };

// export default Counter;

////////////////////////////////////////

import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => decrement(value, setValue)}>-1</button>
      <button onClick={() => reset(setValue)}>Reset</button>
      <button onClick={() => increment(value, setValue)}>+1</button>
    </>
  );
};

const decrement = (value, setValue) => {
  setValue(value - 1);
};

const reset = setValue => {
  setValue(0);
};

const increment = (value, setValue) => {
  setValue(value + 1);
};

export default Counter;
