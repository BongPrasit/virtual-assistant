let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");
let volumeLevel=1;

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = volumeLevel;
    text_speak.lang = "en-IN";
    
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 5 && hours < 12) {
        speak("Hello, Good Morning");
    } else if (hours >= 12 && hours < 16) {
        speak("Hello, Good Afternoon");
    } else if(hours >=17 && hours < 19){
        speak("Hello, Good Evening");
    }
    else{
        speak("Hello, hope your day was nice")
    }
}

window.addEventListener('load', () => {
    // You could set up an optional start button for user interaction.
    let startBtn = document.createElement("button");
    startBtn.id = "startButton";
    startBtn.innerText = "Start Nexus";
    document.body.appendChild(startBtn);

    // Automatically greet the user on page load
    wishMe(); // Call the wishMe function when the page loads

    startBtn.addEventListener("click", () => {
        wishMe();  // Trigger greeting message on user click
        startBtn.style.display = "none";  // Hide start button after clicking
    });
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";
    
    if (message.includes("hello") || message.includes("hey") || message.includes("hi")) {
        speak("Hello sir, what can I help you with?");
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Mr. Prashit Moira");
    } else if (message.includes("open youtube") || message.includes("open yt") || message.includes("youtube") || message.includes("open youtube nexus") || message.includes("open youtube please")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open google")  || message.includes("google") || message.includes("open google nexus") || message.includes("open google please")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook") || message.includes("fb") || message.includes("facebook") || message.includes("open facebook nexus") || message.includes("open fb nexus")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open instagram") || message.includes("open insta") || message.includes("instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    }
    else if (message.includes("open github") || message.includes("open github please")||  message.includes("open github nexus")||  message.includes("github")) {
        speak("Opening GitHub...");
        window.open("https://github.com/", "_blank");
    } else if (message.includes("open reddit") || message.includes("reddit") || message.includes("open reddit nexus")||message.includes("open reddit please")) {
        speak("Opening Reddit...");
        window.open("https://reddit.com/", "_blank");
    }
    else if (message.includes("open quora") || message.includes("quora") || message.includes("open quora nexus")||message.includes("open quora please")) {
        speak("Opening quora...");
        window.open("https://quora.com/", "_blank");
    }
    
    else if (message.includes("increase volume") || message.includes("volume up") || message.includes("turn up volume")) {
        if (volumeLevel >= 1) {
            speak("Volume is already at maximum.");
        } else {
            volumeLevel = Math.min(volumeLevel + 0.3, 1); // Increase volume and cap at 1
            speak("Increasing volume.");
        }
    } else if (message.includes("decrease volume") || message.includes("volume down") || message.includes("turn down volume")) {
        if (volumeLevel <= 0) {
            speak("Volume is already at minimum.");
        } else {
            volumeLevel = Math.max(volumeLevel - 0.3, 0); // Decrease volume and bottom at 0
            speak("Decreasing volume.");
        }
    }
    else if (message.includes("set a timer for")) {
        let minutes = parseInt(message.split("for")[1].trim());
        if (!isNaN(minutes)) {
            speak(`Setting a timer for ${minutes} minutes.`);
            setTimeout(() => {
                speak("Time's up!");
            }, minutes * 60000); // Convert minutes to milliseconds
        } else {
            speak("I couldn't understand the time duration.");
        }
    }
        
    else if (message.includes("open flipkart") || message.includes("flipkart")||message.includes("open flipkart please")|| message.includes("open flipkart nexus")) {
        speak("Opening Flipkart...");
        window.open("https://flipkart.com/", "_blank");
    } 
    else if (message.includes("open amazon")|| message.includes("amazon")||message.includes("open amazon please")|| message.includes("open amazon nexus")) {
        speak("Opening Amazon...");
        window.open("https://amazon.com/", "_blank");
    }
    else if (message.includes("open meesho")|| message.includes("meesho"||message.includes("open meesho please")|| message.includes("open meesho nexus"))) {
        speak("Opening Meesho...");
        window.open("https://Meesho.com/", "_blank");
    }
    else if (message.includes("open myntra") || message.includes("myntra")||message.includes("open myntra please")|| message.includes("open myntra nexus")) {
        speak("Opening Myntra...");
        window.open("https://myntra.com/", "_blank");
    }
    else if (message.includes("open calculator") || message.includes("calculator")|| message.includes("open calculator please")|| message.includes("open calculator nexus")) {
        speak("Opening calculator...");
        window.open("calculator://");
    } else if (message.includes("open whatsapp") || message.includes("whatsapp")||message.includes("open whatsapp please")|| message.includes("open whatsapp nexus")) {
        speak("Opening WhatsApp...");
        window.open("whatsapp://");
    }
     else if (message.includes("time") || message.includes("what is time right now")||message.includes("what is current time")||message.includes("what is the time right now")||message.includes("whats the current time")||message.includes("what is current time right now")||message.includes("what is the current time right now")||message.includes("current time"||message.includes("current time right now"))) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } else if (message.includes("date")||message.includes("what is the date")||message.includes("what is the current date")||message.includes("what is current date")||message.includes("current date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } 
    else if (message.includes("increase volume") || message.includes("volume up")) {
        if (volumeLevel >= 1) {
            speak("Volume is already at maximum.");
        } else {
            volumeLevel = Math.min(volumeLevel + 0.1, 1);
            speak("Increasing volume.");
        }
    } else if (message.includes("decrease volume") || message.includes("volume down")) {
        if (volumeLevel <= 0) {
            speak("Volume is already at minimum.");
        } else {
            volumeLevel = Math.max(volumeLevel - 0.1, 0);
            speak("Decreasing volume.");
        }
    }
    else if (message.includes("open twitter") || message.includes("twitter")|| message.includes("open twitter nexus")|| message.includes("open twitter please")) {
        speak("Opening Twitter...");
        window.open("https://twitter.com/", "_blank");
    }
    else if (message.includes("play music") || message.includes("play a song") || message.includes("play some music")) {
        speak("Playing a song...");
        window.open("https://music.youtube.com/", "_blank");
    }
    else if (message.includes("what is your name")) {
        speak("My name is Nexus.");
    }
    else if (message.includes("who created you") || message.includes("who made you")) {
        speak("I was created by Mr. Prasit Moira.");
    }
    else if (message.includes("shutdown") || message.includes("power off")) {
        speak("Shutting down. Have a nice day!");
        window.close();
    }
    else if (message.includes("open LinkedIn") || message.includes("LinkedIn")) {
        speak("Opening LinkedIn...");
        window.open("https://linkedin.com/", "_blank");
    }
    else if (message.includes("translate")) {
        let textToTranslate = message.split("translate")[1].trim();
        speak("Translating " + textToTranslate);
        window.open(`https://translate.google.com/?sl=auto&tl=en&text=${textToTranslate}&op=translate`, "_blank");
    }
  
    else if (message.includes("what's the temperature in") || message.includes("temperature")) {
        let city = message.split("in")[1].trim();
        speak("Getting the temperature for " + city);
        window.open(`https://www.google.com/search?q=temperature+in+${city}`, "_blank");
    }
    else if (message.includes("goodbye") || message.includes("bye")|| message.includes("bye nexus")|| message.includes("goodbye nexus")) {
        speak("Goodbye! Have a great day.");
        setTimeout(() => {
            window.close();
        }, 2000);
        
    }

     else if (message.includes("joke")||message.includes("tell me a joke nexus")||message.includes("tell me a joke")|| message.includes("tell me a joke nexus")|| message.includes("tell me a joke please")) {
        speak("Why did the scarecrow win an award? Because he was outstanding in his field!");
    } else if (message.includes("news")||message.includes("open news")||message.includes("open the latest news")|| message.includes("open news nexus")|| message.includes("open the news please")|| message.includes("open the news nexus")) {
        speak("Opening the latest news...");
        window.open("https://news.google.com/", "_blank");
    } else if (message.includes("search")) {
        let query = message.split("search")[1].trim();
        let finalText = "This is what I found on the internet regarding " + query;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    } 
    else if (message.includes("close the window") || message.includes("exit")) {
        speak("Closing the window. Goodbye!");
        setTimeout(() => {
            window.close();
        }, 2000); // Adds a delay to let the speech finish before closing
    }
    
    else {
        let finalText = "This is what I found on the internet regarding " + message.replace("nexus", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("nexus", "")}`, "_blank");
    }
}
