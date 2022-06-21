// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import Greeting from './Components/Greeting';

class App extends React.Component {
  render() {
    return (
      <>
        <Greeting name='Vinicius' lastName='Eduardo' />
      </>
    )
  }
}

export default App;