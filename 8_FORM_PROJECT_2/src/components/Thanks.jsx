import './Thanks.css'
import{BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill} from 'react-icons/bs'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>
}

const Thanks = ({data}) => {

  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>a sua opinião é muito importante, em breve você recebera um cupom de 10% de desconto para sua compra.</p>
      <p>para concluir a avaliação clique no botão enviar</p>
      <h3>aqui está o resumo da sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className='review-data'>
        <span>comentario:</span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thanks