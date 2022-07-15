import React from 'react';


const Nav = (props) => {

    return(
        
      
      <header className="nav__header">
        
      <nav className="nav">
        
        <div className="nav__brand">
          <div className="nav__brand-logo--container">
            <img className="nav__brand-logo" src="paraportfolio_edited.jpg" alt="Fernando Benitez" ></img>
          </div>
          <a id="nav__brand-title-a" href="#home"onClick={props.handleHome}><p className="nav__brand-title" ><b>Fernando Benitez</b></p></a>
        </div>
        
        <ul className="nav__ul" >
          <li className="nav__ul-li" ><a className={props.currentPage === 'Home' ? 'before-selected' : ''} id="home-link" href="#home"  ><button className="nav__ul-li-a--btn" /** value="Home" onClick={ props.handleNav} */   >Home</button></a></li>
          <li className="nav__ul-li" ><a className={props.currentPage === 'About' ? 'before-selected' : ''} id="about-link" href="#about"  ><button className="nav__ul-li-a--btn" /** value="About" onClick={ props.handleNav} */ >About</button></a></li>
          <li className="nav__ul-li" ><a className={props.currentPage === 'Projects' ? 'before-selected' : ''} id="projects-link" href="#projects"  ><button className="nav__ul-li-a--btn" /** value="Projects" onClick={ props.handleNav} */ >Projects</button></a></li>
          <li className="nav__ul-li" ><a className={props.currentPage === 'Contact' ? 'before-selected' : ''} id="contact-link" href="#contact"  ><button className="nav__ul-li-a--btn" /** value="Contact" onClick={ props.handleNav} */ >Contact</button></a></li>
        </ul>

        
        <button className="nav__resposive-btn" onClick={props.handleButtonNav}>
          <span className="hamburguesa__container" >
            <span className="hamburguesa top-line-close" id="top-line" ></span>
            <span className="hamburguesa middle-line-close" id="middle-line" ></span>
            <span className="hamburguesa bottom-line-close" id="bottom-line" ></span>
          </span> 
        </button>
        
        <div id="nav-responsive-container" className="" >
       <ul className="nav__responsive-none" id="nav__responsive">
          <li className="nav__responsive-ul-li" ><a className={props.currentPage === 'Home' ? 'before__responsive-selected' : ''} id="home__responsive-link" href="#home" onClick={props.handleResNav}  ><button className="nav__ul-li-a--btn"value="Home" onClick={ props.handleNav}>Home</button></a></li>
          <li className="nav__responsive-ul-li" ><a className={props.currentPage === 'About' ? 'before__responsive-selected' : ''} id="about__responsive-link" href="#about" onClick={props.handleResNav} ><button className="nav__ul-li-a--btn" value="About" onClick={ props.handleNav}>About</button></a></li>
          <li className="nav__responsive-ul-li" ><a className={props.currentPage === 'Projects' ? 'before__responsive-selected' : ''} id="projects__responsive-link" href="#projects" onClick={props.handleResNav} ><button className="nav__ul-li-a--btn" value="Projects" onClick={ props.handleNav}>Projects</button></a></li>
          <li className="nav__responsive-ul-li" ><a className={props.currentPage === 'Contact' ? 'before__responsive-selected' : ''} id="contact__responsive-link" href="#contact" onClick={props.handleResNav} ><button className="nav__ul-li-a--btn" value="Contact" onClick={ props.handleNav}>Contact</button></a></li>
        </ul>
        </div>
        
      </nav>
      </header>
    )

}

export default Nav;

