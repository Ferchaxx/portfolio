import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';



$(document).ready(function(){

  let home = $('.section-home');
  let topPage = $(document).scrollTop();
  let bottomPage = topPage + $(window).height() - 40;

  if( $(home).position().top < bottomPage ){
    $(home).addClass('fade-in');
  }else{
    $(home).removeClass('fade-in');
  };

  $(document).on('scroll', function(){

    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height() - 40;
    var tags = $('.fade');
    var tagsLeft = $('.fade-left');
    var tagsRight = $('.fade-right');
    var tagsDown = $('.fade-down');

    for(let i = 0 ; i < tags.length ; i++){

      var tag = tags[i];

      if( $(tag).position().top < pageBottom ){
        $(tag).addClass('fade-in');
      } else {

        $(tag).removeClass('fade-in');

      }

    }

    for(let i = 0 ; i < tagsLeft.length ; i++){

      var tagI = tagsLeft[i];

      if( $(tagI).position().top < pageBottom ){
        $(tagI).addClass('fade-in-left');
      } else {

        $(tagI).removeClass('fade-in-left');

      }

    }

    for(let i = 0 ; i < tagsRight.length ; i++){

      var tagR = tagsRight[i];

      if( $(tagR).position().top < pageBottom ){
        $(tagR).addClass('fade-in-right');
      } else {

        $(tagR).removeClass('fade-in-right');

      }

    }

    for(let i = 0 ; i < tagsDown.length ; i++){

      var tagD = tagsDown[i];

      if( $(tagD).position().top < pageBottom ){
        $(tagD).addClass('fade-in-down');
      } else {

        $(tagD).removeClass('fade-in-down');

      }

    }

  });

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
