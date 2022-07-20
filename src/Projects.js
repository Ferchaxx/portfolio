
import React from "react";

const Carousel = (props) =>{

    const language = props.language;

    const espanol = 'Español (Es)';

    const pregunta = language === espanol;

    return(

    <section id="projects" className="section__projects" >

        <h2 className="projects__title secondary__titles fade" >{pregunta ? 'Proyectos' : 'Projects'}</h2>

        <div className="carousel__container fade">


            <div className="slideshow" id="slideshow">
                <div className=" carousel carousel-1" >
                    <h3 className="carousel__title" >Pomodoro Clock 25 + 5</h3>
                    <a id="pomodoro" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/WNXjLqd" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/WNXjLqd-512.jpg?version=1645471201" alt="pomodoro clock" />
                    </a>
                </div>
                <div className=" carousel carousel-2" >
                    <h3 className="carousel__title" >JavaScript Calculator</h3>
                    <a id="calculator" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/JjOoVNV" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/JjOoVNV-512.webp?version=1644523202" alt="javascript calculator" />
                    </a>
                </div>
                <div className=" carousel carousel-3" >
                    <h3 className="carousel__title" >Drum Machine</h3>
                    <a id="drum-machine" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/PoJVNee" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/PoJVNee-512.webp?version=1643245039" alt="drum machine" />
                    </a>
                </div>
                <div className="carousel carousel-4" >
                    <h3 className="carousel__title" >Markdown Previewer</h3>
                    <a id="markdown" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/dyVGrgP" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/dyVGrgP-320.webp?version=1643135073" alt="markdown previewer" />
                    </a>
                </div> 
                <div className="carousel carousel-5" >
                    <h3 className="carousel__title" >Random Quotes Machine</h3>
                    <a id="random-quotes" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/JjygbaW" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/JjygbaW-320.jpg?version=1638460042" alt="random quotes machine" />
                    </a>
                </div>
                <div className="carousel carousel-6" >
                    <h3 className="carousel__title" >Portfolio web</h3>
                    <a id="portfolio" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/qBjwOpY" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/qBjwOpY-320.jpg?version=163343711" alt="portfolio web" />
                    </a>
                </div>
                <div className="carousel carousel-7" >
                    <h3 className="carousel__title" >JS Documentation</h3>
                    <a id="documentation" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/OJgqady" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/OJgqady-512.webp?version=1633095553" alt='js documentation' />
                    </a>
                </div>
                <div className="carousel carousel-8" >
                    <h3 className="carousel__title" >Product Landing Page</h3>
                    <a id="product-landing" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/JjJwbeZ" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/JjJwbeZ-512.webp?version=1633045207" alt="product landing page" />
                    </a>
                </div>
                <div className="carousel carousel-9" >
                    <h3 className="carousel__title" >Formulario Modelo</h3>
                    <a id="formulario" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/bGRxbMr" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/bGRxbMr-512.webp?version=1633095562" alt="formulario modelo" />
                    </a>
                </div>
                <div className="carousel carousel-10" >
                    <h3 className="carousel__title" >Tributo Page</h3>
                    <a id="tributo" className="carousel__anchor" href="https://codepen.io/Ferchaxx/full/OJgZBPj" target="_blank" rel="noopener noreferrer" >
                        <img className="carousel__img" src="https://shots.codepen.io/Ferchaxx/pen/OJgZBPj-512.webp?version=1632357502" alt="tributo page" />
                    </a>
                </div>
            </div>
            <button className="carousel__btn-left" onClick={props.handleCarouselLeft} >{'<'}</button>
            <button className="carousel__btn-right" onClick={props.handleCarouselRight} >{'>'}</button>

        </div>

    </section>



    )


}


export default Carousel;