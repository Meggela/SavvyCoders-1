var story = {
    "start": "You are in a cool glade. To your left is a hardwood forest. To your right is a path through grasses leading to a hill. Would you like to go left into the forest or right through the grasses toward a hill?"
};

function runStory(){
    var userInput = prompt( story.start );

    if( !userInput ){
        runStory();
    }
    else{
        // user inputs some valid story node
    }
}

runStory();
