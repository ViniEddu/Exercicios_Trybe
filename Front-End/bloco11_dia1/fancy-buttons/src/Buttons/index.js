import React from 'react';
import * as C from './styles';

class Button extends React.Component {
    constructor() {
      super();

      this.state = {
        clicksBtnOne: 0,
        clicksBtnTwo: 0,
        clicksBtnThree: 0,
      };

      this.handleButtonOne = this.handleButtonOne.bind(this);
      this.handleButtonTwo = this.handleButtonTwo.bind(this);
      this.handleButtonThree = this.handleButtonThree.bind(this);
    }

    handleButtonOne() {
      this.setState(({ clicksBtnOne }) => ({
        clicksBtnOne: clicksBtnOne + 1,
      }),
      () => {
        console.log(this.getButtonColor(this.state.clicksBtnOne))
      }
      );
    }
    
    handleButtonTwo() {
      this.setState(({ clicksBtnTwo }) => ({
        clicksBtnTwo: clicksBtnTwo + 1,
      }),
      () => {
        console.log(this.getButtonColor(this.state.clicksBtnTwo))
      }
      );
    }
    
    handleButtonThree() {
      this.setState(({ clicksBtnThree }) => ({
        clicksBtnThree: clicksBtnThree + 1,
      }),
      
      () => {
        console.log(this.getButtonColor(this.state.clicksBtnThree))
      });

      console.log(this)
    }

    // Para essa função, não precisamos utilizar o bind porque ela é utilizada
    // apenas dentro do contexto do componente App
    getButtonColor(num) {
      // Essa função contém um ternário que realiza a lógica para mudarmos
      // a cor do botão para verde quando for um número par
      return num % 2 === 0 ? 'green' : 'white';
    }

    render() {
      const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
      const { velocidade, força, inteligencia } = this.props;
      return (
        <C.Container>
          <C.Button
            onClick={ this.handleButtonOne }
            // Para renderizarmos as cores, precisamos acrescentar a função
            // que contém a nossa lógica ao "inline style", passando o estado
            // correspondente como parâmetro
            style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
          >
            Botão 1 | {velocidade} = { clicksBtnOne }
          </C.Button>
          <C.Button
            onClick={ this.handleButtonTwo }
            style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
          >
            Botão 2 | {força} = { clicksBtnTwo }
          </C.Button>
          <C.Button
            onClick={ this.handleButtonThree }
            style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
          >
            Botão 3 | {inteligencia} = { clicksBtnThree }
          </C.Button>
        </C.Container>
      );
    }
  }

export default Button;
