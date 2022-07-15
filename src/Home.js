
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

    
    

    return (

        <div className="container">
            <section id="home" className="section-home fade">
            
                <a id="pretitle" href="#about" onClick={props.handleAbout} >HOLA, SOY FERNANDO</a>
                <h1 id="title">Frontend Develeoper.</h1>
                <p id="text-home"><b>Bienvenido a mi portfolio, aquí podrás saber <a href="#about" className="a-text about" onClick={props.handleAbout}>sobre mi</a>
                , mis <a href="#habilitis" className="a-text habilitis" onClick={props.handleAbout}>habilidades</a>
                , <a href="#projects" className="a-text projects" onClick={props.handleProjects}>proyectos</a> que he realizado 
                y cómo <a href="#contact" className="a-text contact" onClick={props.handleContact}>contactarme</a>.</b></p>

            </section>
            <section id="about" className="section-about">

                <div className="about__container" >

                    

                    <h2 id="about__title" className="fade">Acerca de mi.</h2>  
                
                   

                    <div className="about__header fade">
                        <div className="about__header-img--container">
                            <img className="about__header-img" src="paraportfolio_edited.jpg" alt="Fernando Benitez" ></img>   
                        </div>
                        <div className="about__header-p--container"> 
                            <p className="about__header-p">Soy Fernando Benitez, Frontend Web Develeoper, vivo en Córdoba, Argentina.</p>
                            <p className="about__header-p" >Empecé mi formación de forma autodidacta, 
                            luego realizé cursos en la plataforma FreeCodeCamp.org, 
                            más abajo podrás ver mis <a className="about__header-p--a" href="#certificaciones" >certificaciones</a> obtenidas.</p>
                            <p className="about__header-p">Mi objetivo es dejar mi huella en la web con interfaces que ofrezcan soluciones para todas las personas.</p> 
                        </div>
                    </div>
                
                    <div id="certificaciones" className="about__certifications" >

                        <h2 className="about__certifications-title titles fade" >Certificaciones</h2>

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
                                        
                                        <FontAwesomeIcon icon={faJsSquare} className="certifications-icon" /><p>Javasctipt Algoritms and Data Sctructure</p>
                                        
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
                    <div className="about__habilidades">

                        <h2 className="about__habilidades-title titles fade">Habilidades</h2>

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

                        <section id="projects" ></section>

                    </div>

                </div>
            </section>

           

        </div>
    )

}

export default Home;