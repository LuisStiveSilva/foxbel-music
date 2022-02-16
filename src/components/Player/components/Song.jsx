import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../../utils/breakpoints'
import { white } from '../../../utils/colors'

const Container = styled.div`
    width: 330px;
    display: flex;
    justify-content: flex-start;
    @media (max-width: ${mobile}) {
        width: 100%;
    }
`
const AlbumImage = styled.img`
    height: 100px;
    width: 100px;
`
const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: ${white};
    margin-left: 20px
`

const SongName = styled.p`
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 8px;
`
const SongDescription = styled.p`
    font-size: 12px;
    margin: 0;
`

export default function Song({ selectedSong }) {

    return (
        <Container>
            {selectedSong &&
                <>
                    <AlbumImage src={selectedSong.album?.cover_big} />
                    <TextContainer>
                        <SongName>{selectedSong.title ?? "-"}</SongName>
                        <SongDescription>{selectedSong.artist?.name} - {selectedSong.album?.title}</SongDescription>
                    </TextContainer>
                </>
            }
        </Container>
    )
}
