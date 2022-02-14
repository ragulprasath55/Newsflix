import React, { useContext } from "react";
import styled from "styled-components";
import {
  getNewsByKeywordAndFilter,
} from "../api";
import { NewsContext } from "../Context/NewsContext";

export default function SearchBar() {
  const { setNews, setCategoryClicked, text, setText, filter } =
    useContext(NewsContext);

  async function onSubmit(e) {
    e.preventDefault();
    const news = await getNewsByKeywordAndFilter(text, filter);
    setNews(news);
    setCategoryClicked({ Sports: false, Movies: false, Fashion: false }); //To make category clicked to false
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="What you wanna know today..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 20%;
  display: flex;
  padding-right: 100px;
  margin-bottom: 10px;
  &:hover{
    color: black;
  }
  @media(max-width:780px){
    
    height: 20px;
    width: 40%;
  }
`;

const Input = styled.input`
  border-style: groove;
  color: red;
  background-color: black;
  padding: 3px 5px;
  width: 100%;
  border-color: red;
`;
