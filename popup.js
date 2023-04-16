document.getElementById("voiceButton").addEventListener("click", () => {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
  
    recognition.addEventListener("result", (event) => {
      const responseText = "Hello! Your voice has been recognized.";
      const utterance = new SpeechSynthesisUtterance(responseText);
      speechSynthesis.speak(utterance);
    });
  
    recognition.start();
  });
  