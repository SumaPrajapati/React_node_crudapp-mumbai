import './App.css';
import HomeComponent from './component/HomeComponent';
import AboutComponent from './component/AboutComponent';
import ContactComponent from './component/ContactComponent';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NavTabs from './component/NabTabs';
import AddComponent from './component/AddComponent';
import EditComponent from './component/EditComponent';
import ViewComponent from './component/ViewComponent';

function App() {
  return (
    <Router>
      <NavTabs/>
      <Routes>        
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/about' element={<AboutComponent/>}/>
        <Route path='/contact' element={<ContactComponent/>}/>
        <Route path='/user/add' element={<AddComponent/>}/>
        <Route path='/user/edit/:id' element={<EditComponent/>}/>
        <Route path='/user/view/:id' element={<ViewComponent/>}/>
      </Routes>
    
    </Router>
  );
}

export default App;

