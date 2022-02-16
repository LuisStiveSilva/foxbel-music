import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../../utils/breakpoints'
import { redPlayer } from '../../utils/colors'
import Controls from './components/Controls'
import Song from './components/Song'
import Volume from './components/Volume'

const PlayerContainer = styled.div`
    height: 100px;
    width: 100%;
    z-index: 100;
    background: ${redPlayer};
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${tablet}) {
        height: ${props => props.selectedSong && "200px"};
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

export default function Player({ selectedSong, isPlaying, setIsPlaying }) {
    return (
        <PlayerContainer selectedSong={Boolean(selectedSong)}>
            <Song selectedSong={selectedSong} />
            <Controls
                selectedSong={selectedSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            <Volume />
        </PlayerContainer>
    )
}
