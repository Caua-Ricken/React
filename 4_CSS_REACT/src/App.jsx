import './App.css'

import MyComponent from './components/MyComponent'

import Title from './components/Title'

function App() {

  // inline style dinamico
  const n = 6

  // classes dinamicas
  const redTitle = true

  return (
    <>
     {/* CSS global */}
     <h1>CSS no React</h1>

     {/* CSS de componete */}
     <MyComponent/>

     {/* inline style */}
     <p style={{color: 'blue', fontSize: '35px', padding: '25px'}}>este elemento é inline style</p>

     {/* inline style dinamico */}
     <h2 style={n > 5 ? {color:'orange'} : {color:'red'}}>CSS dinamico</h2>
     <h2 style={n > 10 ? {color:'orange'} : {color:'red'}}>CSS dinamico 2</h2>

     {/* classes dinamicas */}
     <h2 className={redTitle ? 'red-title' : 'title'}>classes dinamicas</h2>

     {/* CSS modules */}
     <Title/>

    </>
  )
}

export default App
