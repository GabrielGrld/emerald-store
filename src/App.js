import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useState } from 'react';


//Components
import NavBar from "./components/NavBar"
import Home from './pages/home/Home'
import Product from './pages/product/Product';
import ProductCategory from './pages/productscat/ProductCategory';

//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

//Styles
import './App.css';

const pages = ['Collares', 'Pulceras', 'Pendientes', 'Esmeraldas'];

function App() {
const [activeSection, setActiveSection] = useState('home');


  return (
    <div className="App">
    <div className="app-header">
    <div className="top-banner"><p>Compra Protegida <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.5/mercadolibre/logo__large_plus.png"/></p><div className="icons"><a target="_blank" href='https://www.facebook.com/'><FacebookIcon/></a><a href="https://www.instagram.com/"><InstagramIcon/></a></div></div>     
      <BrowserRouter>
       <NavBar />
         <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route  path = "/producto/:id">
            <Product />
          </Route>
          <Route  path = "/productos/:category">
            <ProductCategory />
          </Route>
          <Route  path = "*">
          <Redirect to="/"/>
          </Route>


         </Switch>

      </BrowserRouter>
    



        </div>
      <footer>
        <div style={{"minHeight":"1vh"}}><p>Emerald Store</p></div>
      </footer>
      
    </div>
  );
}

export default App;
