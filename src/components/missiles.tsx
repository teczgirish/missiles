import React, { useRef, useContext, useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components";
import { bounceInDown } from 'react-animations';
import ReactSVG from 'react-svg';
import PlayerContext from '../context/player-info';

const Missile = styled.div`
    width: 30px;
    fill: #aaa;
    transform: rotate(40deg);
`;

const MissilesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 90%;
`;

const Bounce2s = styled(Missile)`
  animation: 3s ${keyframes `${bounceInDown}`} infinite
  `;
const Bounce3s = styled(Missile)`
  animation: 4s ${keyframes `${bounceInDown}`} infinite
  `;
const Bounce4s = styled(Missile)`
  animation: 5s ${keyframes `${bounceInDown}`} infinite
  `;

const Missiles: React.FC = () => {

  const missileContext = useContext(PlayerContext);
  const missile1Position = missileContext["missile1Position"]
  const missile2Position = missileContext["missile2Position"]
  const missile3Position = missileContext["missile3Position"]

  const missie1XPosition = missileContext["missile1XPosition"]
  const missie2XPosition = missileContext["missile2XPosition"]
  const missie3XPosition = missileContext["missile3XPosition"]

  const missileRef1 = useRef() as React.MutableRefObject<HTMLDivElement>;
  const missileRef2 = useRef() as React.MutableRefObject<HTMLDivElement>;
  const missileRef3 = useRef() as React.MutableRefObject<HTMLDivElement>;
  const viewHeight = window.window.innerHeight * 0.7 - 50

  useEffect(() => {
    if (missileRef1 && missileRef1.current) {
      missileContext["updateMissile1XPosition"](missileRef1.current.getBoundingClientRect().x)
    }
  }, [])
  useEffect(() => {
    if (missileRef2 && missileRef2.current) {
      missileContext["updateMissile2XPosition"](missileRef2.current.getBoundingClientRect().x)
    }
  }, [])
  useEffect(() => {
    if (missileRef3 && missileRef3.current) {
      missileContext["updateMissile3XPosition"](missileRef3.current.getBoundingClientRect().x)
    }
  }, [])

  useEffect(() => {
      setTimeout(() => {
        missileContext["updateMissile1Position"](missile1Position == 0 ? missile1Position + viewHeight: 0)
      }, 1000)
  }, [missile1Position])

  useEffect(() => {
      setTimeout(() => {
        missileContext["updateMissile2Position"](missile2Position == 0 ? missile2Position + viewHeight: 0)
      }, 1200)
  }, [missile2Position])

  useEffect(() => {
      setTimeout(() => {
        missileContext["updateMissile3Position"](missile3Position == 0 ? missile3Position + viewHeight: 0)
      }, 1400)
  }, [missile3Position])


  const styles = {
    position: 'absolute' as 'absolute',
    fill: '#aaa',
    width: 30,
    height: 50,
    top: -50,
    left: window.window.innerWidth * 0.15,
    transform: `translateY(${missile1Position}px)`,
    transition: `${missile1Position > 0 ? 'all 1s ease' : null}`,
  };

  const styles1 = {
    position: 'absolute' as 'absolute',
    fill: '#aaa',
    width: 30,
    height: 50,
    top: -50,
    left: window.window.innerWidth * 0.45,
    transform: `translateY(${missile2Position}px)`,
    transition: `${missile2Position > 0 ? 'all 1.1s ease' : null}`,
  };

  const styles2 = {
    position: 'absolute' as 'absolute',
    fill: '#aaa',
    width: 30,
    height: 50,
    top: -50,
    left: window.window.innerWidth * 0.75,
    transform: `translateY(${missile3Position}px)`,
    transition: `${missile3Position > 0 ? 'all 1.2s ease' : null}`,
  };

    return (
        <MissilesContainer>
            <div ref={missileRef1} style={styles}>
                <ReactSVG
                src="missile.svg"
                />
            </div>
            <div ref={missileRef2} style={styles1}>
                <ReactSVG
                src="missile.svg"
                />
            </div>
            <div ref={missileRef3} style={styles2}>
                <ReactSVG
                src="missile.svg"
                />  
            </div>
        </MissilesContainer>
    );
}

export default Missiles;
