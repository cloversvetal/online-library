/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from 'react';
import {Book} from '../types';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

interface ReadingClockProps{
    isReading: boolean;
    book: Book;
}

const ReadingClock: React.FC<ReadingClockProps> = ({
    isReading,
    book
}) => {
    const [isCounting, setIsCounting] = useState<boolean>(isReading);
    const [readingTime, setReadingTime] = useState<number>(0);

    useEffect (() => {
        let intervalID: number | null = null;

        if(isCounting) {

            intervalID = setInterval(() => {
                setReadingTime(prevTime => prevTime +1);
            }, 1000) as unknown as number;

        }

        return() => {
            if(intervalID) {
                clearInterval(intervalID)

            }
        }
        
    }, [isCounting]);

    const resumeClock = () => {
        setIsCounting(true);
    }

    const stopClock = () => {
        setIsCounting(false);
    }

    const resetClock = () => {
        setIsCounting(false);
        setReadingTime(0);
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
            <Clock value={new Date(readingTime * 1000)} size={200} />
            </div>


            { isCounting? (<button onClick={stopClock}> Stop </button>) : (<button onClick={resumeClock}> Resume </button>)}
            <button onClick={resetClock}> Reset </button>

            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.published_year}</p>
            <p>{book.genre}</p>
            <p>{book.stock}</p>

        </div>
    );
    
}

export default ReadingClock;
