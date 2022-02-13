import React, { useContext } from 'react'
import styled from 'styled-components'
import { NewsContext } from '../Context/NewsContext'

export default function Error() {

    const { error } = useContext(NewsContext)

    return (
        <StyledError>{error}</StyledError>
    )
}


const StyledError = styled.div`
  text-align: center;
  color: red;
  font-size: 30px;
  padding: 20px;
  margin-top: 50px;
`