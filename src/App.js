import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import Box from './box/box';
import Menu from './menu/menu';
import Stats from './stats/stats';
import Footer from './footer/footer';
function App() {
  return (
    <div className="App">
      <div className='navbar'><Navbar/></div>
      <div className="Bundle">
        <div className='bundle-menu'><Menu /></div>        
        <div className='bundle-box'><Box/></div>     
        <div className='bundle-stats'><Stats/></div>
      </div>
      <div className='footer'><Footer/></div>
      
     
    </div>
  );
}

export default App;
