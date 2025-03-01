import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: #736b5e;
  color: #e8e6e3;
  background-color: #736b5e;
  min-width: 100%;
  min-height: 98vh;
  margin: 0;
  padding: 0;
`;

// Styled Create List

export const MainInitial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ebe9e6;
  background-color: #181a1b;
  width: 40%;
  height: 50vh;
  margin-top: 20px;
  border-radius: 20px;
  h2 {
    margin-bottom: 20px;
    margin-top: 10px;
  }
  button {
    border-radius: 15px;
    padding: 5px 10px;
    background: #d1caca;
  }
  :hover {
    button:hover {
      border-radius: 15px;
      padding: 5px 10px;
      background: #090808;
      color: white;
    }
  }
`;
export const InputButon = styled.div`
  display: flex;
  border: solid 2px black;
  padding: 30px;
  justify-content: space-between;
  gap: 10px;
  input {
    border-radius: 15px;
    padding: 5px 10px;
    background: #f1eaea;
  }
  button {
    border-radius: 15px;
    padding: 5px 10px;
    background: #d1caca;
  }
  :hover {
    button:hover {
      border-radius: 15px;
      padding: 5px 10px;
      background: #9c1010;
      color: white;
    }
  }
`;

// Styled Card List

export const MainPlayList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #181a1b;
  margin-top: 20px;
  border-radius: 20px;
  h2 {
    margin-bottom: 20px;
    margin-top: 10px;
  }
  button {
    border-radius: 15px;
    padding: 5px 10px;
    background: #d1caca;
  }
  :hover {
    button:hover {
      border-radius: 15px;
      padding: 5px 10px;
      background: #090808;
      color: white;
    }
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  button:hover {
    border-radius: 15px;
    padding: 5px 10px;
    background: #9c1010;
    color: white;
  }
`;
export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//styled List Music

export const MainListMusic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #181a1b;
  margin-top: 20px;
  border-radius: 20px;
  h2 {
    margin-bottom: 20px;
    margin-top: 10px;
  }
  input {
    border-radius: 15px;
    padding: 5px 10px;
    background: #f1eaea;
  }
  button {
    border-radius: 15px;
    padding: 5px 10px;
    background: #d1caca;
  }
  :hover {
    button:hover {
      border-radius: 15px;
      padding: 5px 10px;
      background: #000000;
      color: white;
    }
  }
`;
export const ContainerMusica = styled.div`
  display: flex;
  flex-direction: column;

  button {
    border-radius: 15px;
    padding: 5px 10px;
    background: #d1caca;
  }
  :hover {
    button:hover {
      border-radius: 15px;
      padding: 5px 10px;
      background: #9c1010;
      color: white;
    }
  }
`;
