const TempleteExpression = () => {

    const name = 'Cauã'

    const date = {
        age: 19,
        job: 'programador'
    }

  return (
    <div>
        <p>a soma é {2 + 2}</p>
        <p>bem vindo {name}</p>
        <p>a idade é de {date.age} e o trabalho {date.job}</p>
    </div>
  )
}

export default TempleteExpression