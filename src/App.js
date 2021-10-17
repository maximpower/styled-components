import styled from 'styled-components'

const P = styled.p`
  font-size: 24px;
  color:red;
`
const Content = styled.div`
  padding: 20px 25px;
`

const  App = () => {
  return (
    <Content>
      <P>Hola, soy un párrafo</P>
    </Content>
  );
}

export default App;
