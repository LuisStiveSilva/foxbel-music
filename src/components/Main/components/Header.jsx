import React from 'react'
import styled from 'styled-components'
import { FaPlay, FaEllipsisH } from "react-icons/fa";
import { white, redPrincipal, gray1 } from "../../../utils/colors"
import { desktop, mobile } from '../../../utils/breakpoints';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    margin: 40px 0;
    width: 100%;
    @media (max-width: ${desktop}) {
        flex-direction: column;
        height: auto
    }
`
const AlbumContainer = styled.div`
    height: 250px;
    width: 250px;
    position: relative;
    @media (max-width: ${desktop}) {
        width: 350px;
        height: 350px;
    }
    @media (max-width: ${mobile}) {
        width: 300px;
        height: 300px;
    }
`
const AlbumImage = styled.img`
    width: 100%;
    height: 100%;
`
const PlayIcon = styled(FaPlay)`
    color: ${white};
    font-size: 72px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -36px;
    margin-top: -36px;
    &:hover{
        cursor: pointer;
    }
`
const TextContainer = styled.div`
    background-image: url(${props => (props.image)}); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${white};
    height: 250px;
    padding: 40px 32px 20px;
    position: relative;
    width: calc(100% - 250px);
    z-index: 10;
    @media (max-width: ${desktop}) {
        width: 350px;
    }
    @media (max-width: ${mobile}) {
        width: 300px;
    }
`
const BackgroundFilter = styled.div`
    background: pink;
    height: 100%;
    opacity: 0.8;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: -1;
`
const Title = styled.h3`
    font-size: 22px; 
    font-weight: 700;
    margin: 0;
`
const Subtitle = styled.span`
    font-size: 14px;
    margin-right: 16px;
`
const Ranking = styled.span`
    color: ${gray1};
    font-size: 12px;
    font-weight: 700
`
const ButtonContainer = styled.div`
    bottom: 20px;
    left: 32px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const PlayButton = styled.button`
    background: ${redPrincipal};
    border: none;
    border-radius: 100px;
    color: ${white};
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    margin-right: 20px;
    padding: 6px 0;
    width: 117px;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: ${desktop}) {
        width: 92px;
        padding: 6px 10px
    }
`
const FollowButton = styled.button`
    background: transparent;
    border: 1px solid ${redPrincipal};
    border-radius: 100px;
    color: ${redPrincipal};
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    margin-right: 20px;
    padding: 6px 0;
    width: 117px;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: ${desktop}) {
        width: 92px;
        padding: 6px 10px
    }
`
const EllipsisButton = styled(FaEllipsisH)`
    color: ${white};
    font-size: 20px;
    &:hover{
        cursor: pointer;
    }
`
export default function Header({ data, setSelectedSong }) {

    return (
        <Container>
            <AlbumContainer>
                <AlbumImage src={data?.album?.cover_big ?? "data:image/jpeg;base64,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"} />
                <PlayIcon onClick={(e) => setSelectedSong(data)} />
            </AlbumContainer>
            <TextContainer image={data?.artist?.picture_big}>
                <BackgroundFilter />
                <Title>{data?.artist?.name} - {data?.title_short}</Title>
                <Subtitle>{data?.album?.title}</Subtitle>
                <Ranking>Ranking: {data?.rank}</Ranking>
                <ButtonContainer>
                    <PlayButton onClick={(e) => setSelectedSong(data)} >
                        Reproducir
                    </PlayButton>
                    <FollowButton>
                        Seguir
                    </FollowButton>
                    <EllipsisButton />
                </ButtonContainer>
            </TextContainer>
        </Container>
    )
}
