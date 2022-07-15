
import './App.css';
import React from 'react';
import Nav from './nav.js';
import Home from './Home.js';
import $ from 'jquery';
import Carousel from './Projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    
  faGithub,
  faInstagram,
  faTwitter,
  faFreeCodeCamp,
  faCodepen,
  faLinkedin
    
} from '@fortawesome/fontawesome-free-brands';

class App extends React.Component{

    constructor(props){

      super(props);
      this.state = {
        currentPage: 'Home'
      };

      this.handleNav = this.handleNav.bind(this);
      this.handleButtonNav = this.handleButtonNav.bind(this);
      this.handleResNav = this.handleResNav.bind(this);
      this.handleHome = this.handleHome.bind(this);
      this.handleAbout = this.handleAbout.bind(this);
      this.handleProjects = this.handleProjects.bind(this);
      this.handleContact = this.handleContact.bind(this);
      this.handleCarouselRight = this.handleCarouselRight.bind(this);
      this.handleCarouselLeft= this.handleCarouselLeft.bind(this);
      this.loop = undefined;
      this.handleLoop = this.handleLoop.bind(this);
      this.handleScreen = this.handleScreen.bind(this);
      

    }; // fin constructor

      handleNav(e){

        this.setState({

          currentPage: e.target.value

        });

      }//fin handle Nav

      handleButtonNav(){

          $(document).ready(function(){

            $('#top-line').toggleClass('top-line-close')
                          .toggleClass('top-line');
            $('#middle-line').toggleClass('middle-line-close')
                             .toggleClass('middle-line');
            $('#bottom-line').toggleClass('bottom-line-close')
                             .toggleClass('bottom-line');  
            $('#nav-responsive-container').toggleClass('nav__responsive-animation');
            $('#nav__responsive').toggleClass('nav__responsive-none')
                                 .toggleClass('nav__responsive-yes');

          })

      }// fin handle button nav

      handleResNav(){

        $(document).ready(function(){

          $('#top-line').toggleClass('top-line-close')
                          .toggleClass('top-line');
            $('#middle-line').toggleClass('middle-line-close')
                             .toggleClass('middle-line');
            $('#bottom-line').toggleClass('bottom-line-close')
                             .toggleClass('bottom-line');  
            $('#nav-responsive-container').toggleClass('nav__responsive-animation');
            $('#nav__responsive').toggleClass('nav__responsive-none')
                                 .toggleClass('nav__responsive-yes');

        })

      }// fin handleResNav

      handleHome(){

        this.setState({
          currentPage: 'Home'
        });

      };

      handleAbout(){

        this.setState({
          currentPage: 'About'
        });

      };

      handleProjects(){

        this.setState({
          currentPage: 'Projects'
        });

      };

      handleContact(){

        this.setState({
          currentPage: 'Contact'
        });

      };// fin handleContact

      handleCarouselRight(e){

          const slideshow = $('#slideshow');

          if(slideshow.children.length > 0){

            const childrens = $(slideshow).children()

            const firstElement = childrens[0]

            $(slideshow).css('transition', '0.3s ease-out all');

            const slideWidth = $(firstElement).width()

            $(slideshow).css('transform', `translateX(-${slideWidth}px)`);
            
            const transicion = () =>{

              $(slideshow).css({
                'transition': 'none',
                'transform': 'translateX(0)'
              });

              $(slideshow).append(firstElement);

              document.getElementById('slideshow').removeEventListener('transitionend', transicion);

            }

            document.getElementById('slideshow').addEventListener('transitionend', transicion);

          }

      } // fin handleCarouselRight

      handleCarouselLeft(){

          const slideshow = document.getElementById('slideshow');

          if(slideshow.children.length > 0){

            const childrens = $(slideshow).children();

            const firstElement = childrens[0];

            const slideWidth = $(firstElement).width();

            const lastElement = childrens[childrens.length -1];

            slideshow.insertBefore(lastElement, slideshow.firstChild);

            $(slideshow).css({
              'transition':'none',
              'transform': `translateX(-${slideWidth}px)`
            });

            setTimeout(() =>{

              $(slideshow).css({
                'transition': '0.3s ease-out all',
                'transform': 'translateX(0)'
              });  

            }, 30)

          }

      } // FIN HANDLE CAROUSEL LEFT   

       handleLoop(){

        this.loop = setInterval(()=>{
            this.handleCarouselRight();
        },5000);

        const slideshow = document.getElementById('slideshow');

        slideshow.addEventListener('mouseleave', ()=>{ 
          clearInterval(this.loop);
          this.loop = setInterval(()=>{
                this.handleCarouselRight();
            },5000);
            console.log(this.loop);
        });

        slideshow.addEventListener('mouseenter', ()=>{
            clearInterval(this.loop);
            this.loop = undefined;
        });

        

    }; // fin handle loop

    handleScreen(){

      document.onscroll = function(){

        const home = document.getElementById('home');
        const about = document.getElementById('about');
        const projects = document.getElementById('projects');
        const contact = document.getElementById('contact');
      
        if( home.getBoundingClientRect().top <= 0 ){
          this.setState({
            currentPage: 'Home'
          });
  
          
  
        };
  
        if( about.getBoundingClientRect().top <= 0 ){
          this.setState({
            currentPage: 'About'
          });
  
          
  
        }

        if( projects.getBoundingClientRect().top <= 0 ){
          this.setState({
            currentPage: 'Projects'
          });
  
          
  
        }

        if( contact.getBoundingClientRect().top <= 70 ){
          this.setState({
            currentPage: 'Contact'
          });
  
          
  
        }

      }.bind(this);

     

      

    }

    componentDidMount(){

      this.handleLoop();

      

      this.handleScreen();

    }

    render(){

      return(

        <div className='wrapper'>
          
          <Nav  currentPage={this.state.currentPage}
                handleNav={this.handleNav}
                handleButtonNav={this.handleButtonNav}
                handleResNav={this.handleResNav}
                handleHome={this.handleHome}/>
          
          <div className='leftside'>
            <ul className='leftside__ul'>
              <li className='leftside__ul-li li-1' ><a href='https://github.com/Ferchaxx' target="_blank" rel='noopener noreferrer' ><FontAwesomeIcon icon={faGithub} /></a></li>
              <li className='leftside__ul-li li-2' ><a href='https://www.linkedin.com/in/fernando-benitez-673787201/' target="_blank"rel='noopener noreferrer' ><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li className='leftside__ul-li li-3' ><a href='https://www.freecodecamp.org/espanol/fercha_dev' target='_blank'rel='noopener noreferrer' ><FontAwesomeIcon icon={faFreeCodeCamp} /></a></li>
              <li className='leftside__ul-li li-4' ><a href='https://codepen.io/Ferchaxx' target='_blank'rel='noopener noreferrer' ><FontAwesomeIcon icon={faCodepen} /></a></li>
              <li className='leftside__ul-li li-5' ><a href='https://www.instagram.com/fercha_dev/' target='_blank'rel='noopener noreferrer' ><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li className='leftside__ul-li li-6' ><a href='https://twitter.com/Fercha_dev' target='_blank'rel='noopener noreferrer' ><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>
          </div>

          

          <Home handleAbout={this.handleAbout}
                handleProjects={this.handleProjects}
                handleContact={this.handleContact}/>

          <Carousel  handleCarouselRight={this.handleCarouselRight}
                     handleCarouselLeft={this.handleCarouselLeft}/>

          <section id='contact' >
            <div className='contact__container'  >
              <h2 className='contact__title titles fade' >Contactame</h2>
              <p className='contact__p fade'>Si te gustó mi portfolio no dudes en enviarme un e-mail clickeando el botón de abajo. También tenés
                disponible otras formas de comunicarte conmigo en esta página.
              </p>
              <a className='contact__btn fade' href='mailto:fbenitez98.fb@gmail.com' rel='noopener noreferrer' target="_blank">Enviar e-mail</a>
            </div>
          </section>
          <footer className='footer'>
            <ul className='footer__ul' >
              <li className='leftside__ul-li li-1' ><a href='https://github.com/Ferchaxx' target="_blank" rel='noopener noreferrer'  ><FontAwesomeIcon icon={faGithub} /></a></li>
              <li className='leftside__ul-li li-2' ><a href='https://www.linkedin.com/in/fernando-benitez-673787201/' target="_blank"rel='noopener noreferrer'  ><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li className='leftside__ul-li li-3' ><a href='https://www.freecodecamp.org/espanol/fercha_dev' target='_blank'rel='noopener noreferrer'  ><FontAwesomeIcon icon={faFreeCodeCamp} /></a></li>
              <li className='leftside__ul-li li-4' ><a href='https://codepen.io/Ferchaxx' target='_blank'rel='noopener noreferrer'  ><FontAwesomeIcon icon={faCodepen} /></a></li>
              <li className='leftside__ul-li li-5' ><a href='https://www.instagram.com/fercha_dev/' target='_blank'rel='noopener noreferrer'  ><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li className='leftside__ul-li li-6' ><a href='https://twitter.com/Fercha_dev' target='_blank'rel='noopener noreferrer'  ><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>

            <p className='footer__legend' >Diseñado y Construido por Fernando Benitez.</p>

          </footer>

        </div>

      )

    }

}

export default App;
