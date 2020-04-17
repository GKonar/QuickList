import React from 'react';
import QuickList from './pages/QuickList';

// styled
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import appTheme from './themes/appTheme';

const AppWrap = styled.div`
  /* margin: ${({ theme }) => theme.margin.regular}; */
`;

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <AppWrap>
        <QuickList />
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
