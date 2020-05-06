import React from 'react';
import QuickList from './pages/QuickList';
import { ItemsProvider } from './context/items.context';

// styled
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import appTheme from './themes/appTheme';

const AppWrap = styled.div`
  font-family: 'Baloo Tamma 2', cursive;
`;

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ItemsProvider>
        <AppWrap>
          <QuickList />
        </AppWrap>
      </ItemsProvider>
    </ThemeProvider>
  );
}

export default App;
