import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './introduction.css'
import {Navbar} from 'react-bootstrap'
import React, { useState } from 'react';


import './navbar.css';
export const Introduction = () => {
    return (
        <div >
          <Navbare/>
          <div className='container introduction'>
          <div className='row' >
            <div className='col-12 col-md-6 text'>
            <p className='filiere_name'>Smart Supply Chain and Logistics
              </p>
              <p className='introduction_text'>
              La filière <span className='SCL'>2SCL</span> a la particularité d’assurer le couplage des outils et des techniques de gestion de la chaîne logistique (Supply Chain Management), le domaine informatique, technologique et intelligence artificielle
              </p>
            </div>
            <div className='col-12 col-md-6 ' >
            <img className='image' src='https://www.supplyshift.net/wp-content/uploads/2019/08/hero-banner-why-sushi.png' alt='LOGISTIQUE enginering'  />
            </div>
          </div>
          </div>
     
        </div>

    )
}





const Navbare = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div> 
      <div className='picture'>
    </div>
      <div className="gpt3__navbar">
      <p className='filiere_logo'>
                        2SCL
                    </p>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        
               
        </div>
        <div className="gpt3__navbar-links_container btn btn-danger">
        <a className='btn btn-danger' href="#About2SCL">About 2SCL</a>
          <p><a className='btn btn-danger' href="#Métier">Métier</a></p>
          <p><a className='btn btn-danger' href="#Conditions D’acces">Conditions D’acces</a></p>
          <p><a className='btn btn-danger' href="#Contact">Contact</a></p>
          
        </div>
        <div className='logoensias'>
                    <img src='https://cdn-04.9rayti.com/rsrc/cache/widen_292/uploads/2012/07/ensias.png' alt='logo' height='80px' />
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#FFFFFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links btn btn-danger">
          <a className='btn btn-danger' href="#About2SCL">About 2SCL</a>
          <p><a className='btn btn-danger' href="#Métier">Métier</a></p>
          <p><a className='btn btn-danger' href="#Conditions D’acces">Conditions D’acces</a></p>
          <p><a className='btn btn-danger' href="#Contact">Contact</a></p>
          
          </div>
          
        </div>
        )}
      </div>
    </div></div>
    
  );
};

export default Navbar;