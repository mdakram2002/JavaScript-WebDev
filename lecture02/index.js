/** @format */

// Array.from(document.getElementsByClassName("songItemPlay")).forEach(
//   (element) => {
//     element.addEventListener("click", (e) => {
//       makeAllPlays();
//       songIndex = parseInt(e.target.id);
//       e.target.classList.remove("fa-play-circle");
//       e.target.classList.add("fa-pause-circle");
//       audioElement.src = `songs/${songIndex + 1}.mp3`;
//       masterSongName.innerText = songs[songIndex].songName;
//       audioElement.currentTime = 0;
//       audioElement.play();
//       gif.style.opacity = 1;
//       masterPlay.classList.remove("fa-play-circle");
//       masterPlay.classList.add("fa-pause-circle");
//     });
//   }
// );

// document.getElementById("next").addEventListener("click", () => {
//   if (songIndex >= 9) {
//     songIndex = 0;
//   } else {
//     songIndex += 1;
//   }
//   audioElement.src = `songs/${songIndex + 1}.mp3`;
//   masterSongName.innerText = songs[songIndex].songName;
//   audioElement.currentTime = 0;
//   audioElement.play();
//   masterPlay.classList.remove("fa-play-circle");
//   masterPlay.classList.add("fa-pause-circle");
// });

// document.getElementById("previous").addEventListener("click", () => {
//   if (songIndex <= 0) {
//     songIndex = 0;
//   } else {
//     songIndex -= 1;
//   }
//   audioElement.src = `songs/${songIndex + 1}.mp3`;
//   masterSongName.innerText = songs[songIndex].songName;
//   audioElement.currentTime = 0;
//   audioElement.play();
//   masterPlay.classList.remove("fa-play-circle");
//   masterPlay.classList.add("fa-pause-circle");
// });


let a = 88;
console.log(a);
