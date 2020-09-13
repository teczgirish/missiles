import React, { useRef, useEffect, useContext} from 'react';
import ReactSVG from 'react-svg';
import styled from "styled-components";
import PlayerContext from '../context/player-info';

const Symbol = styled.div`
  width: 100px;
  fill: #bb8cfc
`;

const FinishLine: React.FC = () => {
    const player = useContext(PlayerContext);
    const inputRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      if (inputRef && inputRef.current) {
        player["updatefinishLineX"](inputRef.current.getBoundingClientRect().x)
      }
    }, []);

    return (
      <Symbol ref={inputRef}>
          <ReactSVG
              src="finish-line.svg"
            />
      </Symbol>
    );

}
export default FinishLine;
