import React from 'react'

const criaBlocoRodape = () => {
    return (
        <div className='bloco-rodape'>
            <h1 className='h1footer'>Isso é só o começo!</h1>
        </div>
    )
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
            {criaBlocoRodape()}
            </footer>
        )
    }
}

export default Footer