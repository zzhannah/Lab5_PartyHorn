// main.js

let sound = document.getElementById("horn-sound");
let honk_btn = document.getElementById("honk-btn");
honk_btn.addEventListener("click",PlayHorn);

// change volume
let vol_num = document.getElementById("volume-number");
vol_num.addEventListener("change",changeVol);
let vol_sld = document.getElementById("volume-slider");
vol_sld.addEventListener("change",changeVol);

function changeVol(vol) {
    let vol_num = document.getElementById("volume-number");
    let vol_img = document.getElementById("volume-image");
    let vol_sld = document.getElementById("volume-slider");

    sound.volume = vol/100;
    vol_num.value = vol;
    vol_sld.value = vol;

    if (vol == 0) {
        vol_img.src = "./assets/media/icons/volume-level-0.svg";
        honk_btn.disabled = true;
    } else if (vol < 34) {
        vol_img.src = "./assets/media/icons/volume-level-1.svg";
        honk_btn.disabled = false;
    } else if (vol < 67) {
        vol_img.src = "./assets/media/icons/volume-level-2.svg";
        honk_btn.disabled = false;
    } else {
        vol_img.src = "./assets/media/icons/volume-level-3.svg";
        honk_btn.disabled = false;
    }
}


// change horn
let select = document.getElementById("audio-selection"); 
select.addEventListener("change",changeHorn);

function changeHorn() {
    let sound_img = document.getElementById("sound-image");
    let air_horn = document.getElementById("radio-air-horn");
    let car_horn = document.getElementById("radio-car-horn");
    let party_horn = document.getElementById("radio-party-horn");

    if (air_horn.checked) {
        sound_img.src = "air_horn.svg";
        sound.src = "air-horn.mp3";
    } else if (party_horn.checked) {
        sound_img.src = "party_horn.svg";
        sound.src = "party-horn.mp3";
    } else if (car_horn.checked) {
        sound_img.src = "car.svg";
        sound.src = "car-horn.mp3";
    }
}


// play horn
function PlayHorn() {
    if (honk_btn.disabled == false) {
        sound.play();
    }
}