import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './layouts/Sidebar';
import ChartDisplay from './pages/ChartDisplay/ChartDisplay';
import GridDisplay from './pages/GridDisplay/GridDisplay';

// styled-components
import {ThemeProvider} from "styled-components"
import GlobalStyles from './components/StyledComponents/Global';


function App() {

  const theme = {
    colors:{
      bgColor : '#f9fafb',
      green: '#34A0A4'
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Router>
      <Sidebar>
        <Routes>
          <Route path='/' element={<GridDisplay/>} exact/>
          <Route path='/grid' element={<GridDisplay/>} exact/>
          <Route path='/chart' element={<ChartDisplay/>} />
        </Routes>
      </Sidebar>    
    </Router>
    </ThemeProvider>
  );
}

export default App;
