// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voice_selector = document.querySelector("#voice-select");
  const text = document.querySelector("#text-to-speak");
  const speak_button = document.querySelector("button");
  const face = document.querySelector("#explore img");

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voice_selector.appendChild(option);
    }
  }

  speechSynthesis.addEventListener("voiceschanged", loadVoices);
  loadVoices();

  speak_button.addEventListener("click", () => {
    const speech = new SpeechSynthesisUtterance(text.value);

    const chosen_voice =
    voice_selector.selectedOptions[0].getAttribute("data-name");

    for (const voice of voices) {
      if (voice.name === chosen_voice) {
        speech.voice = voice;
        break;
      }
    }

    speechSynthesis.cancel();
    face.src = "assets/images/smiling-open.png";
    speechSynthesis.speak(speech);
    speech.onend = () => {
      face.src = "assets/images/smiling.png";
    };
  });
}
