import { useEffect, useState } from 'react'

// eslint-disable-next-line camelcase
const cat_endpoint_random_fact = 'https://catfact.ninja/fact'
// const cat_endpoint_image_url = `https://cataas.com/cat/says/${primeraPalabra}?fontSize=32&fontColor=red&width=700&height=500&json=true`

const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Para recuperar la frase random de la API.
  useEffect(() => {
    fetch(cat_endpoint_random_fact)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Para recuperar la imagen de la API
  useEffect(() => {
    if (!fact) return
    const primeraPalabra = fact.split(' ', 1)
    console.log(primeraPalabra)

    fetch(`https://cataas.com/cat/says/${primeraPalabra}?fontSize=32&fontColor=blue&width=350&height=350`)
      .then(response => {
        const { url } = response
        console.log(response)
        console.log(url)
        setImageUrl(url)
      })
  }, [fact])

  // useEffect(() => {
  //   async function getRandomFact () {
  //     const res = await fetch(cat_endpoint_random_fact)
  //     const data = await res.json()
  //     setFact(data.fact)
  //   }
  //   getRandomFact()
  // }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='Cat' />}
    </main>
  )
}

export default App
