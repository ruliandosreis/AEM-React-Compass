import React, { useState, useRef, useEffect } from "react";
import { TimerArea, TimerContainer } from "./style";
import { ResetButtonContainer, ResetButtonText } from "../ResetTimer/style";

export const LogoutTimer = ({ seconds, fontSize, text }) => {
    const [timer, setTimer] = useState(180);
    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
    }

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000)
        return () => clear();
    }, []);

    useEffect(() => {
        if (timer === 0) {
            console.log("zerou!"); // Change this line to redirect to loginPage once routes is done 
        }

    }, [timer]);

    useEffect(() => {
        setTimer(180);
    }, []);

    useEffect(() => {
        seconds && seconds >= 10 && seconds <= 999 && setTimer(seconds);
    }, [seconds]);

    const resetTimer = () => setTimer(180);

    return (
        <>
            <TimerContainer>
                <TimerArea>
                    <span>Application <br /> refresh in</span>
                    <div>
                        <p>{timer}</p>
                        <span>seconds</span>
                    </div>
                </TimerArea>
                <ResetButtonContainer onClick={resetTimer}>
                    <ResetButtonText
                        fontSize={`${fontSize}px`}
                    >
                        {text}
                    </ResetButtonText>
                </ResetButtonContainer>
            </TimerContainer>
        </>
    )
};
