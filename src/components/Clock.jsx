import React, { useState, useEffect } from "react";
import '../styles/GeneralStyles.scss'

const Clock = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");
            const time = `${hours}:${minutes}:${seconds}`;
            setTime(time);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            {time}
        </div>
    );
};

export default Clock;
