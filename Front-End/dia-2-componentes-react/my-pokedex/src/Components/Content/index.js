import React from 'react'
import * as C from './styles'
import pokemons from '../../data'

const Content = () => {
  return (
    <C.Container>
       {
        pokemons.map(({name, type, averageWeight, image}) => {
            return (
                <C.Card>
                    <span>
                    <C.Paragraph>Nome: {name}</C.Paragraph>
                    <C.Paragraph>Tipo: {type}</C.Paragraph>
                    <C.Paragraph>Peso: {averageWeight.value} {averageWeight.measurementUnit}</C.Paragraph>
                    </span>
                    <img src={image} alt="texto alternativo"/>
                </C.Card>
            )
        })
       }
    </C.Container>
  )
}

export default Content;
