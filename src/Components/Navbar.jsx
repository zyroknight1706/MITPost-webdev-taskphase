import styled from "styled-components"
import React from "react"

const Container = styled.div`
    height: 60px;
    border: none;
    color: white;
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #330000;
    border: none;
`

const Left = styled.div`
    flex: 1;
    align-items: center;
    display: flex;
`

const Logo = styled.div`
    background-color: red;
    font-weight: bold;
    font-size: 30px;
    padding: 2px 5px;
`

const Right = styled.div`
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: flex-end;
`

const Button = styled.button`
    padding 4px 5px;
    border: 2px solid red;
    box-shadow: none;
    outline: none;
    font-size: 20px;
    font-weight: 1000;
    transition: .25s ease-in;
    background-color: #330000;
    color: white;
    :hover {
      background-color: red;
    }

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><Logo>Lenovo</Logo></Left>
        <Right><Button><i class="fa-regular fa-cart-shopping"></i> Buy Now!</Button></Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
