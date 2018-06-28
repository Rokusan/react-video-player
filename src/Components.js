import styled from 'styled-components'

export const Container = styled.div`

`;

export const TopBox = styled.div`
  text-align: center;
  background-color: #303F9F;
  height: 30px;
  padding: 20px;
  color: white;
  font-size: 1.3em;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #3F51B5;
  height: 50px;
  color: white;
  font-size: 1em;
`;

export const Vid = styled.div` 
  margin: auto;
  &:hover {
    padding: 15px;
    background-color: tomato;
  };
`;

export const Player = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
