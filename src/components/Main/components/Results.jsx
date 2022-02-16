import React from 'react'
import styled from 'styled-components'
import { FaPlay, FaEllipsisV } from "react-icons/fa";
import { white, redPrincipal, gray1 } from '../../../utils/colors'
import { mobile, tablet } from '../../../utils/breakpoints';

const Title = styled.h3`
    color: ${redPrincipal};
    font-size: 22px;
    margin: 0;
`
const ResultsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media (max-width: ${tablet}) {
        justify-content: center;
    }
`
const ItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 20px;
    margin-right: 20px;
`
const ItemImage = styled.div`
    width: 160px;
    height: 160px;
    background-image: url(${props => (props.image)});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: ${mobile}) {
        justify-content: center;
        width: 130px;
        height: 130px;
    }
`
const Album = styled.p`
    font-size: 14px;
    font-weight: 700;
    margin: 8px 0 0;
    word-break: break-word;
    width: 160px;
    @media (max-width: ${mobile}) {
        width: 130px;
    }
`
const Artist = styled.p`
    color: ${gray1};
    font-size: 12px;
    margin: 0;
    word-break: break-word;
    width: 160px;
    @media (max-width: ${mobile}) {
        width: 130px;
    }
`
const PlayButton = styled(FaPlay)`
    color: ${white};
    font-size: 36px;
    &:hover{
        cursor: pointer
    }
`
const EllipsisButton = styled(FaEllipsisV)`
    color: ${white};
    position: absolute;
    top: 8px;
    right: 8px;
    &:hover{
        cursor: pointer
    }
`

export default function Results({ data, setSelectedSong }) {

    return (
        <>
            <Title>Resultados</Title>
            <ResultsContainer>
                {data?.map((e, index) =>
                    index > 0 &&
                    <ItemContainer key={e.id}>
                        <ItemImage image={e.album.cover_big}>
                            <EllipsisButton />
                            <PlayButton onClick={(x) => setSelectedSong(e)} />
                        </ItemImage>
                        <Album>{e.title}</Album>
                        <Artist>{e.artist.name}</Artist>
                    </ItemContainer>
                )}
            </ResultsContainer>
        </>
    )
}
