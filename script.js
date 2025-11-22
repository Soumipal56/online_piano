const pianoKeys = [
  { note1: "C1", note2: "C2", key: "a", type: "white",
    audio1: new Audio("./audio/28.mp3"),
    audio2: new Audio("./audio/29.mp3")
  },

  { note1: "C#1", note2: "C#2", key: "w", type: "black",
    audio1: new Audio("./audio/30.mp3"),
    audio2: new Audio("./audio/31.mp3")
  },

  { note1: "D1",  note2: "D2",  key: "s", type: "white",
    audio1: new Audio("./audio/32.mp3"),
    audio2: new Audio("./audio/33.mp3")
  },

  { note1: "D#1", note2: "D#2", key: "e", type: "black",
    audio1: new Audio("./audio/34.mp3"),
    audio2: new Audio("./audio/35.mp3")
  },

  { note1: "E1",  note2: "E2",  key: "d", type: "white",
    audio1: new Audio("./audio/36.mp3"),
    audio2: new Audio("./audio/37.mp3")
  },

  { note1: "F1",  note2: "F2",  key: "f", type: "white",
    audio1: new Audio("./audio/38.mp3"),
    audio2: new Audio("./audio/39.mp3")
  },

  { note1: "F#1", note2: "F#2", key: "t", type: "black",
    audio1: new Audio("./audio/40.mp3"),
    audio2: new Audio("./audio/41.mp3")
  },

  { note1: "G1",  note2: "G2",  key: "g", type: "white",
    audio1: new Audio("./audio/42.mp3"),
    audio2: new Audio("./audio/43.mp3")
  },

  { note1: "G#1", note2: "G#2", key: "y", type: "black",
    audio1: new Audio("./audio/44.mp3"),
    audio2: new Audio("./audio/45.mp3")
  },

  { note1: "A1",  note2: "A2",  key: "h", type: "white",
    audio1: new Audio("./audio/46.mp3"),
    audio2: new Audio("./audio/47.mp3")
  },

  { note1: "A#1", note2: "A#2", key: "u", type: "black",
    audio1: new Audio("./audio/48.mp3"),
    audio2: new Audio("./audio/49.mp3")
  },

  { note1: "B1",  note2: "B2",  key: "j", type: "white",
    audio1: new Audio("./audio/50.mp3"),
    audio2: new Audio("./audio/51.mp3")
  }
];

let sum = '';
pianoKeys.forEach(function(dets){
    sum = sum + `
      <div class="hey">
        <div class="big_box">
          <h5 id="${dets.note1}">${dets.note1}</h5>
            <div class="small_box">
              <h5 id="${dets.note2}">${dets.note2}</h5>
            </div>
        </div>
      </div>  
      `;        
})

document.querySelector('.piano').innerHTML = sum;

let piano = document.querySelector('.piano');

piano.addEventListener('click', function(e){
  const id = e.target.id;
  console.log(id);

  const key = pianoKeys.find(k => k.note1 === id || k.note2 === id);

  if (!key) return console.log("error");

  if (key.note1 === id) {
    key.audio1.currentTime = 0;
    key.audio1.play();
  } else if (key.note2 === id) {
    key.audio2.currentTime = 0;
    key.audio2.play();
  }
})
