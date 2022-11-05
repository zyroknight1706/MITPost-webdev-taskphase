import styled from "styled-components"


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
    font-size: 40px;
    padding: 5px;
`

const Right = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><Logo>Lenovo</Logo></Left>
        <Right>Buy NOW!</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
