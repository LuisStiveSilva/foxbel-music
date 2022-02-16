import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Results from './components/Results'
import Searchbar from './components/Searchbar'
import User from './components/User'
import { tablet } from '../../utils/breakpoints'

const Container = styled.div`
    margin-left: 330px;
    padding: 30px 40px;
    margin-bottom: 100px;
    @media (max-width: ${tablet}) {
        margin-left: 0px;
        padding: 20px 30px;
        margin-bottom: ${props => props.mobile && "200px"};
    }
`

const TopSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

export default function Main({ data, setData, setSelectedSong, selectedSong }) {
    const [loading, setLoading] = useState(false)
    return (
        <Container mobile={Boolean(selectedSong)} >
            {Boolean(loading) ?
                <p style={{ paddingLeft: "30px" }}>Cargando...</p>
                :
                <>
                    <TopSide>
                        <Searchbar setData={setData} setLoading={setLoading} />
                        <User />
                    </TopSide>
                    {data.length > 0 ? <>
                        <Header data={data[0]} setSelectedSong={setSelectedSong} />
                        <Results data={data} setSelectedSong={setSelectedSong} />
                    </> :
                        <p>Busque una canción, album o artista</p>
                    }
                </>
            }
        </Container>
    )
}
