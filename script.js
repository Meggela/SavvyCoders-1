function promptAndGreetUser(){
    var userInput = prompt( "What is your name?" );

    if( !userInput ){
        promptAndGreetUser();
    }
    else{
        alert( "Hello, " + userInput );
    }
}
promptAndGreetUser();

// userInput = prompt( "Please input your name. " );
