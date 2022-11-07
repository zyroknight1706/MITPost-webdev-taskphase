import styled from "styled-components"
import React from "react"
import logo from "./data/logo-1.png"

const Container = styled.div`
    height: 60px;
    border: none;
    color: white;
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const Wrapper = styled.div`
    padding: 10px 20px;
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

const Center = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    height: 60px;
    width: 50px;
    text-align: center;
    padding: 0px 430px;
`

const Image = styled.img`

`

const Right = styled.div`
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: flex-end;
`

const Button = styled.button`
    padding 7px;
    border: 2px solid red;
    box-shadow: none;
    outline: none;
    font-size: 18px;
    font-weight: 1000;
    transition: 1s;
    background-color: #330000;
    color: white;
    box-shadow: inset 0 0 0 0 red;
    :hover {
      box-shadow: inset 150px 0 0 0 red;
    }

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><Logo>Lenovo</Logo></Left>
        <Center><Image src={ logo } width="100" height="100"></Image></Center>
        <Right><Button><i class="fa-solid fa-cart-shopping"></i> Buy Now!</Button></Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
