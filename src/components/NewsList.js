import React, { useContext } from 'react'
import styled from 'styled-components'
import { NewsContext } from '../Context/NewsContext'
import News from './News'

export default function NewsList() {
    const { news } = useContext(NewsContext)
    return (
        <NewsListContainer>
            {news?.map(newsItem => {
                return (<News news={newsItem} key={Date.now() * Math.random() * 1000} />)
            })}
        </NewsListContainer>
    )
}

const NewsListContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 20px;
margin-top: 20px;
background-color: black;
text-align: center;
margin-bottom: 20px;
`