import React from 'react';
import * as C from './styles';

const handleClick = () => console.log("Clicou!");
const handleClick2 = () => console.log("Clicou errado!");
const handleClick3 = () => console.log("Clicou super errado!");

const Button = () => {
  return (
    <C.Container>
        <C.Button onClick={handleClick} > Clique!</C.Button>
        <C.Button onClick={handleClick2} > Aqui!</C.Button>
        <C.Button onClick={handleClick3} > Nesse Botão!</C.Button>
    </C.Container>
  )
}

export default Button;
