import React from 'react'
import styled from 'styled-components'
import "./animations.css"
import Lenovo from "./data/Lenovo.mp4"

const Container = styled.div`
    height: 500px;
    justify-content: space-between;
    display: flex;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
`

const Article = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 25px;
`

const P = styled.p`
    padding: 20px;
    background-color: rgba(51, 0, 0, 0.75);
    color: white;
    border-radius: 10px;
`

const H1 = styled.h1`
    font-style: italic;
    letter-spacing: 6px;
    background: linear-gradient(90deg, #ff0000, #ffff00, #ff00f3, #0033ff, #ff00c4, #ff0000);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
`

const Header = () => {
  return (   
      <Container>
          <Video autoPlay muted loop>
              <source src={ Lenovo } type="video/mp4" />
          </Video>
          <Article>
              <P>
                  <H1 class="heading">The All New Lenovo Legion 5 Pro!</H1>
                  <hr size="5" color="red"/>
                  With it's amazing Ultra-powered RTX graphics card lineup and AMD-powered CPUs, <br />
                  the Legion leaves any and every competition behind. Equipped with 16 gb ram and GDDR6X memory slots, <br />
                  it's even upgradable, making it a hell of a beast. it has 3 NVME slots, coupled with< br /> a powerful SSD and a 
                  really ultra Nvidia RTX 3000 Graphics card, it even has more space!
              </P>
          </Article>
      </Container>
  )
}

export default Header
