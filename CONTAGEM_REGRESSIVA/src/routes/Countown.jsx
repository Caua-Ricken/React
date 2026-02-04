import Counter from "../components/Counter"
import Title from "../components/Title"
import useCountonw from "../hooks/useCountown"

const Countown = () => {
  const [days, hours, minutes, seconds] = useCountonw('Jan 1, 2027 00:00:00')
  
  return (
    <div>
      <Title title="Contagem Regressiva" />
        <div className="contador-container">
        <Counter title="Dias" number={days} />
        <Counter title="horas" number={hours} />
        <Counter title="minutos" number={minutes} />
        <Counter title="segundos" number={seconds} />
        </div>
    </div>
  )
}

export default Countown