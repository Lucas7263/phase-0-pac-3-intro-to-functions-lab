function shout(string) {
    "Hello!".toUpperCase();
    return string.toUpperCase();
}
 
function whisper(string) {
    "Hello!".toLowerCase();
    return string.toLowerCase();
}

function logShout(string) {
    //"Hello!".toUpperCase;
    console.log(string.toUpperCase())
    
    return string.toUpperCase();
}

function logWhisper(string) {
    //"Hello!".toLowerCase;
    console.log(string.toLowerCase());
    return string.toLowerCase();
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return ("I can\'t hear you!")
    } 
    else if (string === string.toUpperCase()) {
        return ("YES INDEED!");
    }
    else {
        if (string === "Let\'s have dinner together!") {
            return ("I would love to!")
        }

    }


    

}