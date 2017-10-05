var story = {
    "start": {
        "prompt": "You are standing in a cool, grassy dale. Behind you is a hardwood forest. To your right is a footpath meandering through grasses leading to a green hill. Will you go behind you into the forest or walk through the grasses toward the hill?",
        "choices": [ "forest", "grasses" ]
    },
    "forest": {
        "prompt": "You turn and enter into the cool of the deciduous forest, following a narrow, fern-lined path, walking under tall oaks and elder trees until you come upon a wall of moss-covered limestone from which a small spring is softly trickling. A bronze drinking vessel rests to the side of the spring, among moss & stones. Will you fill the vessel with water and drink?",
    },
    "grasses": {
        "prompt": "You turn and walk through gently swaying grasses that brush your clothing and hands as you move past them. You approach the hill and a metallic, cobalt blue dragonfly lights on your shoulder and asks you if you would like its company on your walk up the hill?",
        "choices": [ "drink", "dragonfly" ]
    },
    "drink": {
        "prompt": "You take a drink of spring water from the bronze vessel. As you drink, you notice that your body seems lighter. Gradually, you notice that your feet no longer have hard contact with the soil beneath them. Setting the vessel down on a stone, you take an experimental step and find that, by jumping, you can bounce high up in the air, seemingly defying gravity. Each time you land upon the ground, however, you see misty door-like portals through the trees that you couldn’t see before drinking the water. Do you choose to keep bouncing or to investigate a portal?",
    },
    "dragonfly": {
        "prompt": "The shiny blue dragonfly lights upon your shoulder and, as you follow the path up the hill, offers you a cheery, ongoing litany of stories and information regarding the hill. Dragonfly then offers to show you one of two secrets spots on the hill. It tells you that there is a secret cave entrance as well as a cliff overlooking a river valley. Will you choose to go to the secret cave entrance or to the cliff?",
        "choices": [ "cave", "cliff" ]
    },
    "cave": {
        "prompt": "Secret cave entrance...",
    },
    "cliff": {
        "prompt": "cliff overlooking river valley...",
    },
};

function runStory( node ){
    var branch = story[node];
    var choices = branch.choices;
    var userInput;

    if( !choices ){
        alert( branch.prompt );
    }
    else{
        userInput = prompt( branch.prompt );

        if( choices.some( ( choice ) => userInput === choice ) ){
            runStory( userInput );
        }
        else{
            runStory( node );
        }
    }
}


runStory( "start" );
