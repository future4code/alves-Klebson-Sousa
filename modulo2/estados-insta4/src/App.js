import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Jose from './img/Jose.png'
import Maria from './img/Maria.png'
import post1 from './img/post1.png'
import post2 from './img/post2.png'
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'José'}
          fotoUsuario={Jose}
          fotoPost={post1}
        />
        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={Maria}
          fotoPost={post2}
        />
      </MainContainer>
    );
  }
}

export default App;
