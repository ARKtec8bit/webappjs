const strengthWorkouts = {
  "Weight Vest": [
    "150 Squats, 100 Pushup, 50 Pull up",
    "Squat, Dips, KB/DB, Rows",
    "KB Snatch, Push-ups, Chin-ups/Pull-ups",
    "Squat, KB Snatch, Dips",
    "Squat , KB Snatch, Chin-ups/Pull-ups",
    "Squat, KB Snatch, Push-ups",
    "Squat, Push-ups, KB/DB Rows",
  ],

  "Kettle Bell": [
    "100 Swings, 5 Get ups",
    "3 rounds 10 reps<br>Figure 8<br>Deadlift<br>Two-hand swing,One-hand swing<br>Squat-pull<br>Single press<br>Bent-over row<br>Single floor press<br>Alternating press-up into leg raise (arms extended)",
  ],

  "Body Weight": [
    "150 Squats, 100 Pushup, 50 Pull up",
    "Squat, Dips, KB/DB Rows",
    "KB Snatch, Push-ups, Chin-ups/Pull-ups",
    "Squat, KB Snatch, Dips",
    "Squat , KB Snatch, Chin-ups/Pull-ups",
    "Squat, KB Snatch, Push-ups",
    "Squat, Push-ups, KB/DB Rows",
  ],

  "Club Bell": [""],
  "Weight Plate": [
    "Plate press front-up 2 x20<br>Plate rotation 2 x20<br>Plate front raise to triceps press 2 x20<br>Plate torso rotation both directions 2 x 20<br>Rotation to high pull 2 x 20<br>Halo rotation to trunk twist 3 x 10",
  ],
};

const conditioningWorkouts = {
  "Heavy Bag": [""],
  "Body Weight": [
    "Mae kiage L/R R/L  x 50<br>Body weight Squats x 20<br>Squat jumps x 10<br>Mae geri (left of rear, right off front, right off rear left off front) x 50<br>Body weight squat x 20<br>Squat jumps x 10,Mae geri off rear<br>mawashi geri off front (l/r) x 50<br>Body weight squats x 20<br>Squat jumps x 10<br>Uchi mawashi geri l/r soto mawashi geri l/r x 50<br>Body weight squats x 20<br>Squat jumps x 10<br>Jordan mawashi geri<br>ushiro geri x 50<br>Body weight squats x 20<br>Squat jumps x 10",
    "3 rounds<br>Combination x 20<br>Push up x 10<br>Combination x 20<br>Burpee x 10<br>Combination x 20<br>Squat x 10<br>Combination x 20<br>Situp x 10",
  ],
  Barbell: [
    "Combination 1 x 10<br>Push press<br>Combination 1 x 10<br>Front Squat<br>Combination 1 x 10<br>High Pull<br>Combination 1 x 10<br>Hang Clean<br>Combination 1 x 10<br>Thruster",
  ],
};

const technicalWorkouts = {
  Katas: [
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

  Renraku: [
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

  Kihon: ["Punching Drills", "Kicking Drills", "Blocking Drills"],

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

  Renzuku: [
    "10th kyu:<br>1. Zenkutsu dashi, chudan seikan morote tuski. Leave lead hand out, strike chudan seikan gyaku tsuki, jodan oi tsuki, gedan gyaku tsuki<br>2. Step forward zenkutsu dashi, seikan jodan uke, seikan gedan barrai, chudan shuto uke, uraken gamen uchi, chudan seikan gyaku tsuki<br>3. Grab forward, flair elbows Hiza gammen gerri, kintaki geri, mae geri kikomi stepping in to kame dachi strike ago uchi",
    "9th kyu:<br>1. Zenkutsu Dashi, Shuto Ganmen uchi. Kiba Dashi, Uraken sayo uchi. Zenkutsu Dashi, Seiken Chudan Uchi Uke<br>2. Step into Kokustsu Dashi, shita tsuki, Hiji Jodan Ate, slide into zenkutsu dashi Seikan Chudan Soto Uke<br>3. Uchi Mawashi kiage, soto mawashi kiage ",
    "8th Kyu:<br>1. 90-degree kiba dachi, Chudan Jun Tsuki, uraken hizo uchi. Step across into zenkutsu dachi, chudan morote uchi uke, gedan barai/ chudan uchi uke<br>2. Step into kokutsu dachi, Oi uraken mawashi ganmen uchi, guaku chudan tate Tsuki. Slide forward into zenkutsu dachi, Oi shuto sakotsu uchi<br>3. Turn 90 degees, yoko keage, bring leg back, jodan mae geri bring leg back, gedan mawashi geri step forward.",
    "7th Kyu:<br>1. Step into kokutsu dachi, block shuto mawashi uke, then strike Tettsui Komi Kami Slide forward into zenkutsu dachi strike, gyaku Tettsui Oroshi Ganmen Uchi followed by Oi Tettsui Hiza Uchi.<br>2. Step into zenkutsu dachi, strike Oi shuto uchi uke, gyaku shuto sakotsu uchi komi., Oi shuto hizo uchi.<br>3. Rear leg chudan mawashi geri(return foot to rear) gedan Kakato geri, step forward into zenkutsu dachi.",
    "6th Kyu:<br>1. Step into zenkutsu dachi, strike Oi jodan nihon nukite, gyaku chudan yohon nukite, Oi Uraken oroshi ganmen uchi.<br>2. Step into-zenkutsu dachi, block gedan seiken juji uke, seiken jodan juji uke.<br>3. Kansetsu geri, return foot to the rear then Chudan Yoko Geri.step forward into zenkutsu dachi.",
    "5th Kyu:<br>1. Step into zenkutsu dachi, block, Oi seiken jodan uchi uke, Oi jodan Shotei uchi.<br>2. Step through into kiba dachi (facing to the front) and mae shuto mawashi uke then Ushiro hiji-ate, mae chudan hiji ate (with the same arm), step forward into migi zenkutsu dachi with Oi age hiji ate, jodan oroshi hiji ate (same arm)<br>3. Jodan mawashi geri with rear leg and step forward into zenkutsu dachi, ",
    "4th Kyu:<br>1. From zenkutsu dachi, (with rear leg) Ushiro geri into kokutsu dachi, Oi Osai uke, gyaku Furi uch<br>2. Rear leg Ushiro mawashi Kakato geri into kokutsu dachi, Oi gedan Shotei uke, Jodan Morote Shotei uke<br>3. Rear leg Ushiro Uchi mawashi geri into zenkutsu dachi",
    "3rd Kyu:<br>1. Step into zenkutsu dachi and block jodan shuto juji uke followed by gedan shuto juji uke.<br>2. With your rear leg execute uchi oroshi kakato geri (and return leg to rear), then soto oroshi kakato geri step into zenkutsu dachi.<br>3. Step forward into kake dachi, then execute kake geri, followed by Ushiro Mawashi Kakato Geri.",
  ],
};

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateWorkout() {
  const strengthType = getRandomElement(Object.keys(strengthWorkouts));
  const strengthWorkout = getRandomElement(strengthWorkouts[strengthType]);
  const conditioningType = getRandomElement(Object.keys(conditioningWorkouts));
  const conditioningWorkout = getRandomElement(
    conditioningWorkouts[conditioningType]
  );
  const technicalType = getRandomElement(Object.keys(technicalWorkouts));
  const technicalWorkout = getRandomElement(technicalWorkouts[technicalType]);

  const result = `
    <div class="strength_box">
        <h3><strong>Strength:</strong></h3>
        <h4><strong>(${strengthType})</strong></h4>
        <p>${strengthWorkout}</p>
    </div>
    <div class="conditioning_box">
        <h3><strong>Conditioning:</strong></h3>
        <h4><strong>(${conditioningType})</strong></h4> 
        <p>${conditioningWorkout}</p>
    </div>
    <div class="technical_box">
        <h3><strong>Technical:</strong><h3>
        <h4><strong>(${technicalType})</strong></h4>
        <p>${technicalWorkout}</p>
    </div>
    `;

  document.getElementById("workout-result").innerHTML = result;
}
