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
                    <C.Paragraph>Name: {name}</C.Paragraph>
                    <C.Paragraph>Type: {type}</C.Paragraph>
                    <C.Paragraph>Weight: {averageWeight.value} {averageWeight.measurementUnit}</C.Paragraph>
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
