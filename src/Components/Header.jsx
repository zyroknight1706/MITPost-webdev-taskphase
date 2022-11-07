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

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 25px;
`

const P = styled.p`
    padding: 20px;
    background-color: rgba(51, 0, 0, 0.5);
    color: white;
`

const H1 = styled.h1`
    color: #32f453;
`

// const Right = styled.div`
//     display: flex;
//     padding: 50px 0px;
//     flex: 1;
//     align-items: center;
//     justify-content: flex-end;
// `

// const Image = styled.img`
//     transition: ease-in-out;
//     animation: image-side 2s initial;
//     background-color: rgba(0, 0, 0, 0.5);
// `

const Header = () => {
  return (   
      <Container>
          <Video autoPlay muted loop>
              <source src={ Lenovo } type="video/mp4" />
          </Video>
          <Left>
              <P>
                  <H1>The All New Lenovo Legion 5 Pro!</H1>
                  <hr size="5" color="red"/>
                  With it's amazing Ultra-powered RTX graphics card lineup and AMD-powered CPUs, <br />
                  the Legion leaves any and every competition behind. Equipped with 16 gb ram and GDDR6X memory slots, <br />
                  it's even upgradable, making it a hell of a beast. it has 3 NVME slots, coupled with< br /> a powerful SSD and a 
                  really ultra Nvidia RTX 3000 Graphics card, it even has more space!
              </P>
          </Left>
          {/* <Right class="image-side">
            <Image class="image-side" src="https://media.discordapp.net/attachments/796954629304090634/1039067104172843028/lenovo-2-removebg-preview.png" />
          </Right> */}
      </Container>
  )
}

export default Header
