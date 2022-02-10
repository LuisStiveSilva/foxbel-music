import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../../assets/images/foxbel-music.png"
import MenuList from './components/MenuList'
import { darkRedSecondary } from "../../utils/colors"

const Container = styled.div`
    max-width: 330px;
    background: ${darkRedSecondary};
    height: 100vh;
    position: fixed;
`

const ImageLogo = styled.img`
    width: 100%;
    padding: 50px 40px 0;
`

export default function Menu() {
    const [selectedItem, setSelectedItem] = useState("Recientes")
    return (
        <Container>
            <ImageLogo src={logo} />
            <MenuList
                title="Mi Librería"
                items={["Recientes", "Artistas", "Albums", "Canciones", "Estaciones"]}
                selectedItem={selectedItem} setSelectedItem={setSelectedItem}
            />
            <MenuList
                title="Playlist"
                items={["Metal", "Para bailar", "Rock 90s", "Baladas"]}
                selectedItem={selectedItem} setSelectedItem={setSelectedItem}
            />
        </Container>
    )
}
