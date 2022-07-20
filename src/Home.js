import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { 
    faJsSquare,
    faReact,
    faFreeCodeCamp, 
    faHtml5,
    faCss3Alt,
    faSass,
    
} from '@fortawesome/fontawesome-free-brands';



const Home = (props) =>{

    
    const language = props.language;

    const espanol = 'Español (Es)';

    const pregunta = language === espanol;

    return (

        <div className="container">
            <section id="home" className="section-home fade">
            
            <a id="pretitle" href="#about" onClick={props.handleAbout} >{props.language === 'Español (Es)' ? props.frases.homeEs.hola : props.frases.homeEn.hi}</a>
            <h1 id="title">Frontend Develeoper.</h1>
            <p id="text-home"> {props.language === 'Español (Es)' ? <b>Bienvenido a mi portfolio, aquí podrás saber <a href="#about" className="a-text about" onClick={props.handleAbout}>sobre mi</a>
             , mis <a href="#habilidades" className="a-text habilitis" onClick={props.handleAbout}>habilidades</a>,
              <a href="#projects" className="a-text projects" onClick={props.handleProjects}>proyectos</a> que he realizado
             y cómo <a href="#contact" className="a-text contact" onClick={props.handleContact}>contactarme</a>.</b> : <b>Welcome to my portfolio, here you can find out <a href="#about" className="a-text about" onClick={props.handleAbout}>about me</a>
, my <a href="#habilitis" className="a-text habilitis" onClick={props.handleAbout}>skills</a>
, <a href="#projects" className="a-text projects" onClick={props.handleProjects}>projects</a> I have done and how to 
<a href="#contact" className="a-text contact" onClick={props.handleContact}>contact me</a>.</b> }  </p>

        </section>
        <section id="about" className="section-about">

            <div className="about__container" >

                

                <h2 id="about__title" className="fade">{props.language === 'Español (Es)' ? 'Acerca de mi.' : 'About me.' }</h2>  
            
               

                <div className="about__header fade">
                    <div className="about__header-img--container">
                        <img className="about__header-img" src="paraportfolio_edited.jpg" alt="Fernando Benitez" ></img>   
                    </div>
                    <div className="about__header-p--container"> 
                        <p className="about__header-p">{language === espanol ? props.frases.aboutEs.soy : props.frases.aboutEn.im}</p>
                        <p className="about__header-p" >{language === espanol ? <p>Empecé mi formación de forma autodidacta, 
                        luego realizé cursos en la plataforma FreeCodeCamp.org, 
                        más abajo podrás ver mis <a className="about__header-p--a" href="#certificaciones" >certificaciones</a> obtenidas.</p> : 
                        <p>`I started my training in a self-taught way,
                         then I took courses on the FreeCodeCamp.org platform,
                          below you can see my <a className="about__header-p--a" href="#certificaciones" >certifications</a> obtained.`</p> }</p>
                        <p className="about__header-p">{pregunta ? props.frases.aboutEs.miObjetivo : props.frases.aboutEn.myGoal}</p> 
                    </div>
                </div>
            
                <div id="certificaciones" className="about__certifications" >

                    <h2 className="about__certifications-title titles fade" >{pregunta ? 'Certificaciones' : 'Certifications'}</h2>

                    <fieldset className="about__certifications-fieldset fade">
                        <legend className="about__certifications-legend">
                            <p>FreeCodeCamp</p><FontAwesomeIcon icon={faFreeCodeCamp} className="certifications-icon" />
                        </legend>
                        <ul className="about__certifications-ul" >
                            <li className="about__certifications-li">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/espanol/certification/fercha_dev/responsive-web-design" className="about__certifications-li--a">
                                    
                                    <FontAwesomeIcon icon={faLaptopCode} className="certifications-icon"/><p>Responsive Web Design</p>
                                    
                                </a>
                            </li>
                            <li className="about__certifications-li">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/espanol/certification/fercha_dev/javascript-algorithms-and-data-structures" className="about__certifications-li--a">
                                    
                                    <FontAwesomeIcon icon={faJsSquare} className="certifications-icon" /><p>Javasctipt Algorithms and Data Sctructure</p>
                                    
                                </a>
                            </li>
                            <li className="about__certifications-li">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/espanol/certification/fercha_dev/front-end-development-libraries" className="about__certifications-li--a">
                                    
                                    <FontAwesomeIcon icon={faReact} className="certifications-icon" /><p>Frontend Web Development Libraries</p>
                                    
                                </a>
                            </li>
                        </ul>
                    </fieldset>

                </div>
                <div className="about__habilidades" id="habilidades">

                    <h2 className="about__habilidades-title titles fade">{pregunta ? 'Habilidades' : 'Skins'}</h2>

                   <div className="habilidades__ul-container"> 

                    <ul className="habilidades__ul">
                        <li id="uno" className="none"></li>
                        <li id="dos" className="none"></li>
                        <li id="tres" className="none"></li>
                        <li id="cuatro" className="none"></li>
                        <li id="cinco" className="none"></li>
                        <li id="seis" className="none"></li>
                        <li id="siete" className="none"></li>
                        <li id="ocho" className="none"></li>
                        <li id="html" className="habilidades__ul-li fade-down"><FontAwesomeIcon icon={faHtml5} className="habilidades--icon" /><p>HTML</p></li>
                        <li id='css' className="habilidades__ul-li fade-left "><FontAwesomeIcon icon={faCss3Alt} className="habilidades--icon" /><p>CSS</p></li>
                        <li id="respon" className="habilidades__ul-li fade-right "><img src="tablet-y-laptop-white.png" alt="responsive" className="habilidades--icon"  ></img><p>Responsive</p> <p>Websites</p></li>
                        <li id="javas" className="habilidades__ul-li fade"><FontAwesomeIcon icon={faJsSquare} className="habilidades--icon" /><p>JavaScript</p></li>
                        <li id="sass" className="habilidades__ul-li fade-right "><FontAwesomeIcon icon={faSass} className="habilidades--icon" /><p>Sass</p></li>
                        <li id="jquery" className="habilidades__ul-li fade-left "><i class="devicon-jquery-plain" id="habilidades--icon" ></i><p>jquery</p></li>
                        <li id="react" className="habilidades__ul-li fade-left "><FontAwesomeIcon icon={faReact} className="habilidades--icon" /><p>React</p></li>
                        <li id="redux" className="habilidades__ul-li fade-right "><i class="devicon-redux-original" id="habilidades--icon" ></i><p>Redux</p></li>
                        <li id="boots" className="habilidades__ul-li fade "><i class="devicon-bootstrap-plain" id="habilidades--icon" ></i><p>Bootstrap</p></li>
                        
                    </ul>

                   </div>

                </div>

            </div>
        </section>

           

        </div>
    )

}

export default Home;