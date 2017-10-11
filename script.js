/* globals $ */
/* eslint-disable no-console */
// function promptAndGreetUser(){
//     var userInput = prompt( "What is your name?" );
//
//     if( !userInput ){
//         promptAndGreetUser();
//     }
//     else{
//         alert( "Hello, " + userInput );
//     }
// }
// promptAndGreetUser();

// userInput = prompt( "Please input your name. " );
var $ol = $( "ol" );
var $h1 = $( "h1" );

function clickHandler(){
    $( this ).text( "I just got clicked!" );

    $ol.off( "click", clickHandler );
}

$ol.on( "click", "li", clickHandler );

$h1.on( "click", clickHandler );
