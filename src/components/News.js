import React from "react";
import styled from "styled-components";

export default function News({ news }) {
  return (
    <NewContainer>
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <a href={news.url}>Click here to know more</a>
    </NewContainer>
  );
}

const NewContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: linear-gradient( 113.3deg,  rgba(217,9,27,1) 6.9%, rgba(22,68,150,1) 75% );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  border-radius: 20px;

  @keyframes pendulum {
    100% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(50px);
    }
    20% {
      transform: translateX(-50px);
    }
  }

  a {
    text-decoration: none;
    color: #7FDBFF;
  }

  h2 {
    color: #7FDBFF;
    font-weight: 800;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in;
    overflow: hidden;

    h2 {
      color: white;
    }

    p {
      color: #7FDBFF;
    }

    a: hover {
      color: white;
    }

    background-image: linear-gradient( 113.3deg,  rgba(22,68,150,1) 6.9%,  rgba(217,9,27,1) 75% );
  }
`;
