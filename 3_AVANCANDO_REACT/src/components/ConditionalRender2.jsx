const ConditionalRender2 = () => {

    const name = 'Cauã'

  return (
    <div>
        <h2>condicional ternaria ou com else</h2>
        {name === 'João' ? (
            <div>
                <p>olá, joão</p>
            </div>    
        ) : (
            <div>
                <p>seu nome não é joão</p>
            </div>    
        )}
    </div>
  )
}

export default ConditionalRender2