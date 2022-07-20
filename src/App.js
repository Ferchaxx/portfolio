
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
import frases from './frases.js';

class App extends React.Component{

    constructor(props){

      super(props);
      this.state = {
        currentPage: 'Home',
        lanReplegado: false,
        currentLanguage: 'Español (Es)'
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
      this.handleLan = this.handleLan.bind(this);
      this.handleEspanol = this.handleEspanol.bind(this);
      this.handleEnglish = this.handleEnglish.bind(this);
      

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
            $('#nav-responsive-lan').toggleClass('nav-responsive-lan-none')
                                 .toggleClass('nav-responsive-lan-yes');

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
            $('#nav-responsive-lan').toggleClass('nav-responsive-lan-none')
                                 .toggleClass('nav-responsive-lan-yes');

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

     

      

    } // fin handleScreen

    handleLan(){

      let lanReplegado = this.state.lanReplegado;
      

      

        console.log(lanReplegado);

        if(!lanReplegado){

          this.setState({
            lanReplegado: true
          });
          // $('#language__ul').css('opacity', 1);

        }else{

          this.setState({
            lanReplegado: false
          });
          // $('#language__ul').css('opacity', 0);

        }

    

    } // fin handleLan

    handleEspanol(){

      this.setState({
        currentLanguage: 'Español (Es)',
        lanReplegado: false
      });

    } // fin handleEspanol

    handleEnglish(){

      this.setState({
        currentLanguage: 'English (En)',
        lanReplegado: false
      });

    } // fin handleEnglis

    componentDidMount(){

      this.handleLoop();

      

      this.handleScreen();

    }

    render(){

      const language = this.state.currentLanguage;
      const espanol = 'Español (Es)';
      const pregunta = language === espanol;

      return(

        <div className='wrapper'>
          
          <Nav  currentLanguage={this.state.currentLanguage}
                currentPage={this.state.currentPage}
                handleNav={this.handleNav}
                handleButtonNav={this.handleButtonNav}
                handleResNav={this.handleResNav}
                handleHome={this.handleHome}
                handleLan={this.handleLan}
                handleEspanol={this.handleEspanol}
                handleEnglish={this.handleEnglish}
                lanReplegado={this.state.lanReplegado}
                language={this.state.currentLanguage}
                frases={frases}/>
          
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
                handleContact={this.handleContact}
                language={this.state.currentLanguage}
                frases={frases}/>

          <Carousel  handleCarouselRight={this.handleCarouselRight}
                     handleCarouselLeft={this.handleCarouselLeft}
                     language={this.state.currentLanguage}
                     frases={frases}/>

          <section id='contact' >
            <div className='contact__container'  >
              <h2 className='contact__title titles fade' >{pregunta ? 'Contactame' : 'Contact me'}</h2>
              <p className='contact__p fade'>
                {pregunta ? frases.contactEs.teGusto : frases.contactEn.liked}
              </p>
              <a className='contact__btn fade' href='mailto:fbenitez98.fb@gmail.com' rel='noopener noreferrer' target="_blank">
                {pregunta ? 'Enviar' : 'Send'} e-mail
              </a>
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

            <p className='footer__legend' >{pregunta ? frases.contactEs.footerEs : frases.contactEn.footerEn}</p>

          </footer>

        </div>

      )

    }

}

export default App;
