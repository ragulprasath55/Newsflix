import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  getNewsByKeywordAndFilter,
  getNewsByKeyword,
  getRandomNews,
} from "../api";
import { NewsContext } from "../Context/NewsContext";
import { resetClickedStatus } from "./Nav";

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
  width: 40%;
  display: flex;
`;

const Input = styled.input`
  border-style: groove;
  color: silver;
  background-color: black;
  padding: 3px 5px;
  width: 100%;

  &:focus {
    border-color: red;
  }
`;
