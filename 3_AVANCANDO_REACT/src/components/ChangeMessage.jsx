const ChangeMessage = ({handleMessage}) => {

    const messages = ['ola', 'oi', 'tudo bem?']

  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>mensagem 1</button>
        <button onClick={() => handleMessage(messages[1])}>mensagem 2</button>
        <button onClick={() => handleMessage(messages[2])}>mensagem 3</button>
    </div>
  )
}

export default ChangeMessage