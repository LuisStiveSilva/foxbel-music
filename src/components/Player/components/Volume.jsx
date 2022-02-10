import React, { useState } from 'react'
import styled from 'styled-components'
import { white } from '../../../utils/colors';
import { FaVolumeOff, FaVolumeDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;            
`

const VolumeOffIcon = styled(FaVolumeOff)`
    color: ${white};
    font-size: 36px;
    margin: 0 32px;
    &:hover{
        cursor: pointer;
    }
`
const VolumeDownIcon = styled(FaVolumeDown)`
    color: ${white};
    font-size: 36px;
    margin: 0 32px;
    &:hover{
        cursor: pointer;
    }
`
const VolumeMuteIcon = styled(FaVolumeMute)`
    color: ${white};
    font-size: 36px;
    margin: 0 32px;
    &:hover{
        cursor: pointer;
    }
`
const VolumeUpIcon = styled(FaVolumeUp)`
    color: ${white};
    font-size: 36px;
    margin: 0 32px;
    &:hover{
        cursor: pointer;
    }
`

export default function Volume() {
    const [volumeLevel, setVolumeLevel] = useState(100)
    return (
        <Container>
            <input
                type="range"
                style={{ width: 100, borderRadius: "20px" }}
                value={volumeLevel}
                onChange={(e) => {
                    document.getElementById('player').volume = e.currentTarget.value / 100;
                    setVolumeLevel(e.currentTarget.value)
                }} />
            {volumeLevel == 0 ?
                <VolumeMuteIcon /> :
                volumeLevel < 25 ?
                    <VolumeOffIcon onClick={() => {
                        setVolumeLevel(0);
                        document.getElementById('player').volume = 0
                    }} /> :
                    volumeLevel < 50 ?
                        <VolumeDownIcon onClick={() => {
                            setVolumeLevel(0);
                            document.getElementById('player').volume = 0
                        }} /> :
                        <VolumeUpIcon onClick={() => {
                            setVolumeLevel(0);
                            document.getElementById('player').volume = 0
                        }} />}
        </Container>
    )
}
