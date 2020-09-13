import React, { useState } from 'react';

const PlayerContext = React.createContext({});


export const PlayerProvider = ({ children }) => {
    const [ isRunning, setIsRunning ] = useState(false);
    const [ missile1Position, setMissile1Position ] = useState(0);
	const [ missile2Position, setMissile2Position ] = useState(0);
    const [ missile3Position, setMissile3Position ] = useState(0);
    const [ missile1XPosition, setMissile1XPosition ] = useState(0);
    const [ missile2XPosition, setMissile2XPosition ] = useState(0);
    const [ missile3XPosition, setMissile3XPosition ] = useState(0);
    const [finishLineX, setFinishLineX] = useState(0);

    const updateMissile1XPosition = (position) => {
        setMissile1XPosition(position)
    }
    const updateMissile2XPosition = (position) => {
        setMissile2XPosition(position)
    }
    const updateMissile3XPosition = (position) => {
        setMissile3XPosition(position)
    }
	const updateMissile1Position = (position) => {
		setMissile1Position(position);
	}
	const updateMissile2Position = (position) => {
		setMissile2Position(position);
	}
	const updateMissile3Position = (position) => {
		setMissile3Position(position);
    }

    const updatefinishLineX = position => {
        setFinishLineX(position);
    }

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    }

    return <PlayerContext.Provider value={{
        isRunning,
        toggleRunning,
        missile1Position,
        missile2Position,
        missile3Position,
        missile1XPosition,
        missile2XPosition,
        missile3XPosition,
        finishLineX,
        updateMissile1Position,
        updateMissile2Position,
        updateMissile3Position,
        updateMissile1XPosition,
        updateMissile2XPosition,
        updateMissile3XPosition,
        updatefinishLineX
    }}>
        {children}
        </PlayerContext.Provider>
};


export default PlayerContext;
