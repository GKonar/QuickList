import React from 'react';
import { ThemeProvider } from 'styled-components';
import appTheme from './themes/appTheme';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
    </ThemeProvider>
  );
}

export default App;
