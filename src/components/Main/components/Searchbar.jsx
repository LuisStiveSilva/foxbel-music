import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { gray1, softGray } from "../../../utils/colors"
import { searchRequest } from '../../../utils/requests';
import { tablet } from '../../../utils/breakpoints';

const InputContainer = styled.div`
    border: 1px solid ${gray1};
    width: 524px;
    height: 36px;
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    @media (max-width: ${tablet}) {
        margin-left: 40px;
    }
`
const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    &::placeholder{
        font-family: "Quicksand", sans-serif;
        color: ${softGray};
        font-size: 14px;
    }
`
const SearchIcon = styled(FaSearch)`
    color: ${softGray};
    font-size: 18px;
    &:hover{
        cursor: pointer;
    }
`

export default function Searchbar({ setData, setLoading }) {
    const [inputData, setInputData] = useState("")

    const obtainData = async (search) => {
        try {
            setLoading(true)
            const res = await searchRequest(search)
            setData(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <InputContainer>
            <Input
                placeholder='Buscar'
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                onKeyPress={(e) => (e.code === "Enter" || e.code === "NumpadEnter") && (obtainData(e.target.value))}
            />
            <SearchIcon onClick={() => obtainData(inputData)} />
        </InputContainer>
    )
}
