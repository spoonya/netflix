import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';

export const PlayerCtx = createContext();

export default function Player(props) {
  const { children } = props;
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerCtx.Provider value={{ showPlayer, setShowPlayer }}>
      <Container>{children}</Container>
    </PlayerCtx.Provider>
  );
}

Player.Video = function PlayerVideo(props) {
  const { src } = props;
  const { showPlayer, setShowPlayer } = useContext(PlayerCtx);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay>
          <Inner>
            <video id="netflix-player" controls>
              <track kind="captions" />
              <source src={src} type="video/mp4" />
            </video>
            <Close onClick={() => setShowPlayer(false)} />
          </Inner>
        </Overlay>,
        document.body,
      )
    : null;
};

Player.Button = function PlayerButton() {
  const { showPlayer, setShowPlayer } = useContext(PlayerCtx);

  return <Button onClick={() => setShowPlayer((prev) => !prev)}>Play</Button>;
};
