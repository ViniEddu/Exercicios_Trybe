import React from 'react';
import * as C from './styles';

class Button extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        return (
            console.log("Clicou!"),
            console.log(this)
        )
    };
    handleClick2 = () => console.log("Clicou errado!");
    handleClick3 = () => console.log("Clicou super errado!");
    render () {
        return (
          <C.Container>
              <C.Button onClick={this.handleClick} > Clique!</C.Button>
              <C.Button onClick={this.handleClick2} > Aqui!</C.Button>
              <C.Button onClick={this.handleClick3} > Nesse Botão!</C.Button>
          </C.Container>
        )
    }
}

export default Button;
