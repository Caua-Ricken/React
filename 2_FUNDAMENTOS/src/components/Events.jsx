import React from 'react'

const Events = () => {

  const handleClick = (e) => {
    console.log(e)
    console.log('executou')
  }

  const renderSomething = (x) => {
    if(x){
        return <h1>renderizou item 1</h1>
    }else{
        return <h1>renderizou item 2</h1>
    }
  }

  return (
    <div>
        <div>
            <button onClick={() => console.log('testando um evento')}>clique aqui</button>
        </div>

        <div>
            <button onClick={handleClick}>clique aqui - com função</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events