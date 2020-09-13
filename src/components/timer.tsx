import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import PlayerContext from '../context/player-info';

const Container = styled.div`
  margin-top: 50px;
  font-size: 25px;
  tex
`;

const Timer: React.FC = () => {
  const player = useContext(PlayerContext);
  const isRunning = player["isRunning"];
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (!isRunning) {
        setCurrentTime(0);
      } else {
        setCurrentTime(currentTime + 1);
      }
    }, 1000)
  }, [currentTime, isRunning]);

  
  return (
    <Container>
      {currentTime}
    </Container>
  );

}
export default Timer;
