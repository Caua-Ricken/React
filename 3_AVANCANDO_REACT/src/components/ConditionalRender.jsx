const ConditionalRender = () => {

  const x = true
  const y = 5

  return (
    <div>
      {/* render condicional */}
      <h2>isto sera exibido</h2>
      {x && <p>se x for true sim!</p>}

      <h2>isto sera exibido</h2>
      {y > 3 && <p>se y for sim!</p>}
    </div>
  )
}

export default ConditionalRender