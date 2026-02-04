import { use, useState } from "react"

const useCountonw = (data) => {

    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    const countown = () => {
        const countDate = new Date(data).getTime();
        const now = new Date().getTime();

        const interval = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const dayNumber = Math.floor(interval / day)
        const hourNumber = Math.floor((interval % day) / hour)
        const minuteNumber = Math.floor((interval % hour) / minute)
        const secondNumber = Math.floor((interval % minute) / second)

         setDay(dayNumber);
         setHour(hourNumber);
         setMinute(minuteNumber);
         setSecond(secondNumber);
    }

    setInterval(countown, 1000);

    return [day, hour, minute, second];
}

export default useCountonw;