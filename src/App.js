import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './layouts/Sidebar';
import ChartDisplay from './pages/ChartDisplay/ChartDisplay';
import GridDisplay from './pages/GridDisplay/GridDisplay';


function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path='/' element={<GridDisplay/>} exact/>
          <Route path='/grid' element={<GridDisplay/>} exact/>
          <Route path='/chart' element={<ChartDisplay/>} />
        </Routes>
      </Sidebar>    
    </Router>
  );
}

export default App;
