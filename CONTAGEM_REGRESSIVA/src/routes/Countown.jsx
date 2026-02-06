import Counter from "../components/Counter"
import Title from "../components/Title"
import useCountonw from "../hooks/useCountown"
import { useContext } from "react"
import { CountdownContext } from "../context/CountdownContext"
import { Navigate } from "react-router-dom"

const Countown = () => {

  const {event} = useContext(CountdownContext);

    if (!event) return <Navigate to="/" replace />;
  
  const titleEvent = event.title;
  const eventColor = event.color;

  const [days, hours, minutes, seconds] = useCountonw(event.date);
  return (
    <div>
      <Title title={titleEvent} eventColor={eventColor} />
        <div className="contador-container">
        <Counter title="Dias" number={days} eventColor={eventColor}/>
        <Counter title="horas" number={hours} eventColor={eventColor}/>
        <Counter title="minutos" number={minutes} eventColor={eventColor}/>
        <Counter title="segundos" number={seconds} eventColor={eventColor}/>
        </div>
    </div>
  )
}

export default Countown