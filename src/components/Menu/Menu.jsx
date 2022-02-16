import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../../assets/images/foxbel-music.png"
import MenuList from './components/MenuList'
import { darkRedSecondary } from "../../utils/colors"
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { desktop, tablet, mobile } from '../../utils/breakpoints'

const Container = styled.div`
    max-width: 330px;
    background: ${darkRedSecondary};
    height: 100vh;
    position: fixed;
    transition: 300ms linear all;
    @media (max-width: ${tablet}) {
        transform: translateX(${props => props.isOpen ? "0%" : "-200%"});
    }
    z-index:100; 
`

const ImageLogo = styled.img`
    width: 100%;
    padding: 50px 40px 0;
    @media (max-width: ${tablet}) {
        padding: 80px 40px 0;
    }
`

const MenuButtonContainer = styled.div`
    display: none;
    visibility: hidden;
    @media (max-width: ${tablet}) {
        color: ${props => props.isOpen ? "white" : "black"};
        display: block;
        font-size: 25px;
        position: absolute;
        top: 27px;
        left: 30px;
        transition: 300ms linear all;
        visibility: visible;
        z-index: 101;
    }
`
const BlackBackground = styled.div`
    @media (max-width: ${tablet}) {
        background-color: rgba(0, 0, 0, 0.7);
        transform: translateX(${props => props.isOpen ? "0%" : "-200%"});
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        transition: 300ms linear all;
        z-index: 99;
    }
`

export default function Menu() {
    const [selectedItem, setSelectedItem] = useState("Recientes")
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Container isOpen={isOpen}>
                <ImageLogo src={logo} isOpen={isOpen} />
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
            <BlackBackground isOpen={isOpen} />
            <MenuButtonContainer isOpen={isOpen}>
                {isOpen ? <HiX onClick={() => setIsOpen(false)} /> : <HiOutlineMenu onClick={() => setIsOpen(true)} />}
            </MenuButtonContainer>
        </>
    )
}
