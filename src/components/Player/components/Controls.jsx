import React from 'react'
import styled from 'styled-components'
import { white, lightRed } from '../../../utils/colors';
import { FaPlay, FaFastBackward, FaFastForward, FaPause } from "react-icons/fa";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    color: ${white};
    font-size: 18px
`

const BackSong = styled(FaFastBackward)`
    &:hover{
        cursor:pointer
    }
`
const NextSong = styled(FaFastForward)`
    &:hover{
        cursor:pointer
    }
`
const PlaySongIcon = styled(FaPlay)`
    &:hover{
        cursor:pointer
    }
`
const PauseSong = styled(FaPause)`
    &:hover{
        cursor:pointer
    }
`

const PlaySong = styled.div`
    background: ${lightRed};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px
`

export default function Controls({ isPlaying, setIsPlaying }) {
    return (
        <Container>
            <BackSong />
            <PlaySong >
                {isPlaying ?
                    <PauseSong onClick={() => {
                        setIsPlaying(false)
                        document.getElementById('player').pause()
                    }} /> :
                    <PlaySongIcon onClick={() => {
                        setIsPlaying(true)
                        document.getElementById('player').play()
                    }} />
                }
            </PlaySong>
            <NextSong />
        </Container>
    )
}
