import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 500px;
`

const Wrapper = styled.div`
    margin: 30px;
    padding: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    flex: 1;
`

const Right = styled.div`
    background-color: #262626;
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
`

const H1 = styled.h1`
    color: white;
    text-align: center;
    align-items: center;
`

const Article = () => {
  return (    
    <Container>
        <Wrapper>
            <Left></Left>
            <Right>
                <H1>Built For Speed!</H1>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Article
