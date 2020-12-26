import React from "react";
import styled from "styled-components";

const Hero = ({ title, desc, pic }) => {
  return (
    <Section pic={pic}>
      <Container>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button>Click here</button>
      </Container>
    </Section>
  );
};

const Container = styled.div`
  color: #fff;
  padding: 2rem;
  margin: 2rem;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);

  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 0.5rem;
  }
  button {
    font-size: clamp(0.8rem, 4vw, 1rem);
    padding: 0.8rem 2rem;
    color: #000;
    border: none;
    background: #ffb347;
    background: linear-gradient(to right, #ffbc47, #ffb347);
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
`;

const Section = styled.div`
  background: url(${(props) => props.pic}) center;
  object-fit: contain;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 100vh;
  margin-top: -60px;
`;

export default Hero;
