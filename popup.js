document.getElementById("voiceButton").addEventListener("click", () => {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
  
    recognition.addEventListener("result", (event) => {
      const responseText = "Hello! I'll be able to have a conversation with you soon, but this is all I can say right now.";
      const utterance = new SpeechSynthesisUtterance(responseText);
      speechSynthesis.speak(utterance);
    });
  
    recognition.start();
  });
  
