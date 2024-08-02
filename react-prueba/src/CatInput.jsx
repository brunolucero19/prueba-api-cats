import React, { useState } from 'react'
import './CatInput.css'

const CatInput = () => {
  const [valorInput, setValorInput] = useState('')
  const [imageUrl, setImageUrl] = useState()

  const cambioValorInput = (e) => {
    setValorInput(e.target.value)
  }

  const enviarDatos = (e) => {
    e.preventDefault()
    setValorInput('')
    fetch(`https://cataas.com/cat/says/${valorInput}?fontSize=32&fontColor=orange&width=350&height=350&font=Arial Black`)
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }

  return (

    <main>
      <h1>Prueba API gatitos</h1>
      <p>Ingrese un texto debajo para generar una imagen de un gatito diciendo su texto. Presione enter para enviar su texto.</p>
      <form onSubmit={enviarDatos}>
        <input
          type='text'
          placeholder='Ingrese un texto'
          value={valorInput}
          onChange={cambioValorInput}
        />
      </form>
      {imageUrl && <img src={imageUrl} alt='Imagen de un gato random que incluye el texto que ingreses en el input.' />}
    </main>

  )
}

export default CatInput
