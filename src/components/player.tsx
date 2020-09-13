import React, {useState, useContext, useEffect, useRef} from 'react';
import ReactSVG from 'react-svg';
import PlayerContext from '../context/player-info';

const Player: React.FC = () => {
    const player = useContext(PlayerContext);
    const [ direction, setDirection ] = useState('right');
    const [ left, setPosition ] = useState(0);
    const isRunning = player["isRunning"];

    const missile1XPosition = player["missile1XPosition"]
    const missile2XPosition = player["missile2XPosition"]
    const missile3XPosition = player["missile3XPosition"]
    const missile1Position = player["missile1Position"]
    const missile2Position = player["missile2Position"]
    const missile3Position = player["missile3Position"]
    const finishLine = player["finishLineX"]

    const playerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    function changeDirection(event) {
      if (event.keyCode === 39) {
        setDirection('right')
        player["toggleRunning"]();
      }
      if (event.keyCode === 37) {
        setDirection('left')
      }
    }

    useEffect(() => {
      onkeydown = changeDirection;
    }, []);

    function isCollided() {
      if(missile1XPosition <= left + 50 && left <= missile1XPosition + 30 && missile1Position > 0) {
        return true
      } else if(missile2XPosition <= left + 50 && left <= missile2XPosition + 30 && missile2Position > 0) {
        return true
      } else if(missile3XPosition <= left + 50 && left <= missile3XPosition + 30 && missile3Position > 0) {
        return true
      }
      return false
    }

    function updatePlayerMovement() {
      // if player crossed finish line stop game
      if(left >= finishLine) {
        player["toggleRunning"]();
        setPosition(0)
        alert("You are a winner")
      } else if(isCollided()) { // player hit by missile
        player["toggleRunning"]();
        setPosition(0)
        alert("OOps, you got hit by a missile. Game over.")
      } else {
        if(direction == 'left' && left === 0) {
          setDirection('right')
          setPosition(left + 50)
        } else {
          setPosition(direction === 'right' ? left + 50 : left > 0 ? left - 50 : left)
        }
      }
    }
    useEffect(() => {
      if (isRunning) {
        setTimeout(updatePlayerMovement, 500);
      }
    }, [left, isRunning])

    const styles = {
      position: 'absolute' as 'absolute',
      fill: '#aaa',
      width: 50,
      height: 50,
      left: left,
      transition: 'all 0.1s ease',
    };
    return (
      <div style={styles} ref={ playerRef}>
          <ReactSVG
              src="running-man.svg"
            />
      </div>
    );
}

export default Player;
