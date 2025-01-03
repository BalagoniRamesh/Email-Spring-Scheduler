import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/body/homePage/homePage';
import FtHomepage from './components/body/homePage/ftHomepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
          <Route path='/homePage' element={<FtHomepage />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
