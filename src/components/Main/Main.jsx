import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Results from './components/Results'
import Searchbar from './components/Searchbar'
import User from './components/User'


const Container = styled.div`
    margin-left: 330px;
    padding: 30px 40px;
    margin-bottom: 100px;
`

const TopSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Main({ data, setData, setSelectedSong }) {
    const [loading, setLoading] = useState(false)
    return (
        <Container>
            {Boolean(loading) ?
                <p>Cargando...</p>
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
