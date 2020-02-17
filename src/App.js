import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Main from './containers/Main';

import { RootProvider } from './context';
import Header from './components/Header';
import Container from './styles/utilities/Container';
import Chat from './components/Chat';
import Layout from './components/Layout';

const App = () => (
  <>
    <GlobalStyle />
    <RootProvider>
      <Layout>
        <Header />
        <Container>
          <FlexWrapp>
            <Left>
              <Main />
            </Left>
            <Right>
              <Chat />
            </Right>
          </FlexWrapp>
        </Container>
      </Layout>
    </RootProvider>
  </>
);

export default App;

const FlexWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 860px;
`;

const Right = styled.div`
  width: 460px;
`;
