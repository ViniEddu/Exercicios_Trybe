import React from 'react'

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido',
      imagem: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/150773/Computador-PC-Completo-I5-8GB-HD-500GB-Wi-Fi-Windows-10-Monitor-19-_1654625624_g.jpg'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
      imagem: 'https://s2.glbimg.com/fPQS-2PM80vKZ8TNZBEQNp5ex3g=/0x0:695x574/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/V/W/z1AWGPStqtqrs1WphP1Q/2014-01-31-pc-desktop-compaq.jpg'
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei',
      imagem: 'https://m.media-amazon.com/images/I/612L4H-VcVL._AC_SY450_.jpg'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei',
      imagem: 'https://images-shoptime.b2w.io/produtos/3007942578/imagens/computador-completo-intel-core-i5-4gb-hd-500gb-monitor-19-5-led-hdmi-digital-corp/3007942578_1_large.jpg'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei',
        imagem: 'https://images-shoptime.b2w.io/produtos/3007942578/imagens/computador-completo-intel-core-i5-4gb-hd-500gb-monitor-19-5-led-hdmi-digital-corp/3007942578_1_large.jpg'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei',
        imagem: 'https://images-shoptime.b2w.io/produtos/3007942578/imagens/computador-completo-intel-core-i5-4gb-hd-500gb-monitor-19-5-led-hdmi-digital-corp/3007942578_1_large.jpg'
      },
  ];

const criaObjeto = ({conteudo, bloco, status, imagem}, index) => {
    return (
        <div className='card' key= {index}>
            <span className='span'>
            <p className='item-card'>Conteudo: {conteudo}</p>
            <p className='item-card'>Bloco: {bloco}</p>
            <p className='item-card'>Status: {status}</p>
            </span>
            <img className='card-imagem' src={imagem} alt=""/>
        </div>
    )
}

const objetoList = () => {
    return (
        conteudos.map(({conteudo, bloco, status, imagem}, index) => {
           return criaObjeto({conteudo, bloco, status, imagem}, index)
        })
    )
}

/* const criaCard = (conteudo) => {
    return (
        <div className='card'>{conteudo}</div>
    )
}; */


const criaBloco = () => {
    return (
        <div className='bloco'>
            {objetoList()}
        </div>
    )
}

const criaBlocoLateral = () => {
    return (
        <div className='bloco-lateral'></div>
    )
}

class Content extends React.Component {
    render() {
        return (
            <main className='conteudo-principal'>
                {criaBloco()}
                {criaBlocoLateral()}               
            </main>
        )
    }
};

export default Content;