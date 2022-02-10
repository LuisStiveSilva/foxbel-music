import React from 'react'
import styled from 'styled-components'
import { white, redPrincipal, darkRedSecondary } from "../../../utils/colors"

const Title = styled.h2`
    color: ${white};
    margin: 0 0 4px;
    font-size: 22px;
    font-weight: 700;
    padding: 30px 40px 0;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    color: ${white};
    margin-bottom: 30px;
`
const ListItem = styled.li`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    padding: 0 37px;
    border-left: 3px solid #662323;
    &:hover{
        cursor: pointer;
    }
`

export default function MenuList({ title, items, selectedItem, setSelectedItem }) {

    return (
        <>
            <Title>{title}</Title>
            <List>
                {items.map((item, index) =>
                    <ListItem
                        key={index}
                        onClick={(e) => setSelectedItem(e.target.textContent)}
                        style={{
                            borderLeft: `${item === selectedItem ? "3px solid" + redPrincipal : "3px solid" + darkRedSecondary}`,
                            color: `${item === selectedItem ? redPrincipal : white}`
                        }}
                    >
                        {item}
                    </ListItem>)}
            </List>
        </>
    )
}
