import React from 'react'
import styled from 'styled-components'
import { FaUser } from "react-icons/fa";
import { redPrincipal, gray2 } from "../../../utils/colors"

const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const UserIcon = styled(FaUser)`
    color: ${redPrincipal};
    margin-right: 12px;
    font-size: 14px;
`
const UserName = styled.span`
    color: ${gray2};
`

export default function User() {
    return (
        <UserContainer>
            <UserIcon />
            <UserName>Francisco M.</UserName>
        </UserContainer>
    )
}
