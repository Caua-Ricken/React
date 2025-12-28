import './App.css'
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {

  // 1 - resgatando os dados
  const [products, setProducts] = useState([])

  // 4 - custom hook
  const {data: itens, httpConfig, loading, error} = useFetch(url)



/* começa a 1
  useEffect(() => {
    async function getData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    getData()
  }, [])
  termina a 1 */ 

  // 2 - envio de dados
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    // 5 - refatorando o POST
    httpConfig(product, 'POST')

    /*
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    // 3 - carregamento dinamico
    const addProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addProduct])*/

    // limpar os inputs
    setName("")
    setPrice("")
  }

  return (
    <>
    <h1>HTTP em React</h1>

    {/* 6 - loading */}
    {loading && <p>carregando...</p>}

    {/* 7 - tratando erros */}
    {error && <p>{error}</p>}

    {/* 1 - resgate de dados */}
    <ul>
      {itens && itens.map((product) => (
        <li key={product.id}>{product.name} - R$ 
        {product.price}</li>
      ))}
    </ul>

    {/* 2 - enviando os dados */}
    <div className="add-product">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label>
          <span>Preço:</span>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>

        {/*<input type="submit" value='enviar' />*/}
        {/* 7 - loading post */}
        {loading && <input type="submit" disabled value='aguarde'/>}
        {!loading && <input type="submit" value='criar'/>}
      </form>
    </div>

    </>
  )
}

export default App
