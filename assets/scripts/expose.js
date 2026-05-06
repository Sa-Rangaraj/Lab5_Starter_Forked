// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO 


  // Inputs 
  const horn_selector = document.querySelector("#expose select");
  const volume_slider = document.querySelector("#volume");
  const play_button = document.querySelector("button");

  const jsConfetti = new JSConfetti()
  let party = false;


  const curr_image = document.querySelector("header + img"); 
  const images = {
    air: "air-horn",
    car: "car-horn",
    party: "party-horn"
  };


  const curr_vol_icon = document.querySelector("#volume-controls img");

  const curr_sound = new Audio();
  const sounds = {
    air: "air-horn",
    car: "car-horn",
    party: "party-horn"
  };

  
  horn_selector.addEventListener("change", () => {
    curr_image.src = "assets/images/" + horn_selector.value + ".svg"; 
    curr_sound.src = "assets/audio/" + horn_selector.value + ".mp3"; 

    if (horn_selector.value == "party-horn"){
      party = true;
    }
    else {
      party = false;
    }
  });

  volume_slider.addEventListener("input", () => {
    curr_sound.volume = volume_slider.value / 100; 
    console.log(curr_sound.volume)
    
    if (volume_slider.value == 0){
      curr_vol_icon.src ="assets/icons/volume-level-0.svg";
    }
    else if (volume_slider.value > 0 && volume_slider.value < 33 ){
      curr_vol_icon.src ="assets/icons/volume-level-1.svg";
    }
    else if (volume_slider.value > 32  && volume_slider.value < 67 ){
      curr_vol_icon.src ="assets/icons/volume-level-2.svg";
    }
    else if (volume_slider.value > 66 ){
      curr_vol_icon.src ="assets/icons/volume-level-3.svg";
    }
    
  });
 

  play_button.addEventListener("click", () => {
    curr_sound.play(); 
    if (party){
      jsConfetti.addConfetti()
    }
  });

}

  

  
