const strengthWorkouts = ["Push-ups", "Pull-ups", "Squats", "Deadlifts"];

const conditioningWorkouts = ["Running", "Jump Rope", "Burpees", "Cycling"];

const technicalWorkouts = {
  katas: [
    "Taikyoku Sono Ichi",
    "Taikyoku Sono Ni",
    "Taikyoku Sono San",
    "Pinan Sono Ichi",
    "Sokugi Taikyoku Sono Ichi",
    "Pinan Sono Ni",
    "Sokugi Taikyoku Sono Ni",
    "Pinan Sono San",
    "Sokugi Taikyoku Sono San",
    "Pinan Sono Yon",
    "Sokugi Taikyoku Sono Yon",
    "Sanchin",
    "Pinan Sono Go",
    "Tsuki No Kata",
    "Saiha",
    "Yantsu",
    "Gekisai Dai",
    "Gekisai Sho",
    "Sepai",
    "Tensho",
    "Garyu",
    "Seinchin",
    "Kanku Dai",
    "Sushiho",
  ],
  renraku: [
    "1. Seiken-Gyaku-Tsuki (Chudan or Jodan). Mae-Geri-Chudan- Chusoku, return and cover.",
    "2. Chudan-Mae-Geri Chusoku, Seiken-Gyaku-Tsuki-Chudan. return and cover",
    "3. Chudan-Soto-Uke, Seiken-Mae-Gedan-Barai, Seiken-Gyaku- Tsuki-Chudan, return and cover.",
    "4. Step forward Seiken-Gyaku-Tsuki-Chudan, Hidari-Mae-Geri- Chudan-Chusoko,Migi-Mae-GeriChudan-Chusoko, Seiken- Gyaku-Tsuki-Chudan, return and cover",
    "5. (Free Style stance) Gedan-Mawashi-Geri (Chusoko or Haisoku), Seiken-Gyaku-Tsuki-Chudan, return and cover.",
    "6. Chudan-Mae-Yoko-Geri, Seiken-Gyaku-Tsuki-Chudan, return and cover",
    "7. Chudan-Ushiro-Geri, Seiken-Gyaku-Tsuki-Chudan, return and cover.",
    "8. Mae-Geri-Chudan-Chusoku, Yoko-Geri-Chudan, Ushiro-Geri- Chudan, Seiken-Gyaku-Tsuki-Chudan, return and cover,",
    "9. Move back and block Seiken-Mae-Gedan-Barai, slide forward Seiken-Ago-Uchi, slide forward Seiken-Gyaku-Tsuki-Chudan, one step Mae-Geri-Chudan, followed by Mawashi-Geri-Jodan, Ushiro-Gewri-Chudan, Seiken-Mae-Gedan-Barai, Seiken-Gyaku- Tsuki-Chudan, return and cover. (Fist to be held closed at all times)",
    "10. Seiken-Oi-Tsuki, Seiken-Gyaku-Tsuki, Seiken-Oi-Tsuki, Shita- Tsuki with facial cover, return and cover.",
    "11. Front leg Mawashi-Geri-Jodan, same hand Seiken-Oi-Tsuki- Chudan, Seiken-Gyaku-Tsuki back leg Mawashi-Geri-Jodan, return and cover.",
  ],
  kihon: ["Punching Drills", "Kicking Drills", "Blocking Drills"],
  Combinations: [
    "1.	L, R, L Hook to rib, R, R Shita tsuki, L, R Gedan Mawashi Geri, step through L Hiza Geri",
    "2. L, R, Slideback to Nekoashi dachi, Step Forward, L,R,L,R, R Gedan Mawashi Geri, step through L Hiza Geri",
    "3.	L inside thigh Gedan Mawashi Geri, L, R, R Chudan Mawasi Geri",
    "4.	L,R, R Gedan Mawashi Geri, step , L, L Mae Geri",
    "5.	L Jodan Mawashi geri, L Chudan Mawasahi Geri, R, R Gedan mawashi Geri, L Hiza Geri",
    "6.	L Mae Geri Kakomi, L, R, r Jodan mawasi geri, r gedan mawashi geri in to sune block, l shita Tsuki",
    "7.	L,R, R Mae Geri Kakomi, L, L Jodan Mawashi Geri, L Hook",
    "8.	L,R, R sweep, L, Left Jodan Mawasi Geri",
    "9. L Mae Geri Kakomi, R, L Shita tsuki, L sweep front leg, R Shita tsuki, R Hiza Gamen Geri",
    "10.R, L Chudan Mawashi Geri, R, R Gedan Mawasi Geri, R Sweep front leg",
  ],
};

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateWorkout() {
  const strength = getRandomElement(strengthWorkouts);
  const conditioning = getRandomElement(conditioningWorkouts);
  const technicalType = getRandomElement(Object.keys(technicalWorkouts));
  const technicalWorkout = getRandomElement(technicalWorkouts[technicalType]);

  const result = `
        <h3>Your Workout</h3>
        <p><strong>Strength:</strong> ${strength}</p>
        <p><strong>Conditioning:</strong> ${conditioning}</p>
        <p><strong>Technical (${technicalType}):</strong> ${technicalWorkout}</p>
    `;

  document.getElementById("workout-result").innerHTML = result;
}
