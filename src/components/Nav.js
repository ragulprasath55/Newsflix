import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { getNewsByKeyword, getRandomNews } from '../api'
import { NewsContext } from '../Context/NewsContext'
import { Container } from '../styledcomponents/Containers'
import Filters from './Filters'
import SearchBar from './SearchBar'


export default function Nav() {

    const { news, setNews, categoryClicked: clicked, setCategoryClicked } = useContext(NewsContext)

    async function getNews(keyword) {
        const news = await getNewsByKeyword(keyword);
        setNews(news)

        // To know which category is clicked and to style them
        if (keyword === 'Movies') {
            setCategoryClicked({ Fashion: false, Sports: false, Movies: true })
        } else if (keyword === 'Sports') {
            setCategoryClicked({ Fashion: false, Movies: false, Sports: true })
        } else if (keyword === 'Fashion') {
            setCategoryClicked({ Sports: false, Movies: false, Fashion: true })
        }
    }

    async function onLogoClick() {
        const news = await getRandomNews()
        setNews(news)
        setCategoryClicked({ Sports: false, Movies: false, Fashion: false })
    }

    return (
        <NavContainer>
            <Logo onClick={onLogoClick}>Newsflix</Logo>
            <UL>
                <LI clicked={clicked?.Movies}><a onClick={e => getNews('Movies')}>Movies</a></LI>
                <LI clicked={clicked?.Sports}><a onClick={e => getNews('Sports')}>Sports</a></LI>
                <LI clicked={clicked?.Fashion}><a onClick={e => getNews('Fashion')}>Fashion</a></LI>
            </UL>
            <Filters />
            <SearchBar />
        </NavContainer>
    )
}

const NavContainer = styled.div`
position: fixed;
background-color: black;
width: 100%;
top: 0;
margin: auto;
height: 60px;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
`
const Logo = styled.a`
letter-spacing: 3px;
text-transform: uppercase;
font-family: sans-serif;
color: red;
font-size: 25px;
font-weight:500;
cursor: pointer;
@media(max-width:780px){
    font-size: 25px;
    margin-bottom: 10px;
    padding: 10px;
}
`

const UL = styled.ul`
display: flex;
justify-content: center;
align-items: center;
margin-right: auto;
@media(max-width:960px){
    display: none;
}
`
const LI = styled.li`
list-style:none;
padding-right: 15px;
cursor: pointer;
transition:color 1s ease-in-out;
color: ${({ clicked }) => clicked ? 'red' : ''};
&:hover{
 color: red;
}
`