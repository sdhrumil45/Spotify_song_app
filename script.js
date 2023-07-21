
let masterplay = document.getElementById("masterplay");
let forward = document.getElementById("forward");
let reverse = document.getElementById("reverse");
let songbar = document.getElementById("songbar");
let gifimage = document.getElementById("gifimage");
let songitem = Array.from(document.getElementsByClassName("song"));
let songplay = Array.from(document.getElementsByClassName("songplay"));
let songindex = 0;
let songname = document.getElementById("songname");
let songduration = document.getElementById("songduration");



let songlibrary = [{songname:"song1",songimage:"spotifylogo.png",songtime:"5:13",songpath:"song1.mp3"},
                   {songname:"song2",songimage:"spotifylogo.png",songtime:"6:13",songpath:"song2.mp3"},
                   {songname:"song3",songimage:"spotifylogo.png",songtime:"7:13",songpath:"song3.mp3"},
                   {songname:"song4",songimage:"spotifylogo.png",songtime:"5:13",songpath:"song1.mp3"},
                   {songname:"song5",songimage:"spotifylogo.png",songtime:"6:13",songpath:"song2.mp3"},
                   {songname:"song6",songimage:"spotifylogo.png",songtime:"7:13",songpath:"song3.mp3"},
                   {songname:"song7",songimage:"spotifylogo.png",songtime:"5:13",songpath:"song1.mp3"},
                   {songname:"song8",songimage:"spotifylogo.png",songtime:"6:13",songpath:"song2.mp3"},
                   {songname:"song9",songimage:"spotifylogo.png",songtime:"7:13",songpath:"song3.mp3"}];

var song = new Audio(`${songlibrary[songindex].songpath}`); 


masterplay.addEventListener("click",() =>{
    if (song.paused || song.currentTime<=0){
        song.play();
        masterplay.classList.replace('bi-play-circle','bi-pause-circle');
        songplay[songindex].classList.replace('bi-play-circle','bi-pause-circle');
        gifimage.style.opacity = 1;
    }
    else {
      song.pause();
      masterplay.classList.replace('bi-pause-circle','bi-play-circle');
      songplay[songindex].classList.replace('bi-pause-circle','bi-play-circle');
      gifimage.style.opacity = 0;
    }
});


song.addEventListener("timeupdate",()=>{
  let songbarvalue = parseFloat((song.currentTime / song.duration)*100);
  songbar.value = songbarvalue;
})

songbar.addEventListener("change",()=>{
  song.currentTime = (songbar.value * song.duration)/100;
})

songitem.forEach((elment,i) => {
  
    elment.getElementsByTagName("img").src = songlibrary[i].songimage;
    elment.getElementsByTagName("span")[0].innerText = songlibrary[i].songname;
    elment.getElementsByTagName("span")[1].innerText = songlibrary[i].songtime;
    // elment.getElementsByTagName("span")[2].innerText = songlibrary[i].songpath;     

     
})

function allplay(){
    songplay.forEach((elment) =>{
    elment.classList.replace('bi-pause-circle','bi-play-circle');

  })
}

songplay.forEach((elment,i) => {
        elment.addEventListener("click",(e)=>{
          songindex = i;
        if (song.paused || song.currentTime<=0){
              song.src = songlibrary[songindex].songpath;
              song.play();
              allplay();
              e.target.classList.replace('bi-play-circle','bi-pause-circle');
              gifimage.style.opacity = 1;
              masterplay.classList.replace('bi-play-circle','bi-pause-circle');
              songname.innerText = songlibrary[songindex].songname;
              }
        else {
              song.pause();
              e.target.classList.replace('bi-pause-circle','bi-play-circle');
              gifimage.style.opacity = 0;
              masterplay.classList.replace('bi-pause-circle','bi-play-circle');
              songname.innerText = songlibrary[songindex].songname;
         }
        
        })
});


forward.addEventListener("click",()=>{

      songindex++;

      if (songindex == 9){
        songindex = 0;
        song.src = songlibrary[songindex].songpath;
        song.play();
        allplay();
        songname.innerText = songlibrary[songindex].songname;
        songduration.innerText = songlibrary[songindex].songtime;
        masterplay.classList.replace('bi-play-circle','bi-pause-circle');
        songplay[songindex].classList.replace('bi-play-circle','bi-pause-circle');
        
      }
      else{
        song.src = songlibrary[songindex].songpath;
        song.play();
        allplay();
        songname.innerText = songlibrary[songindex].songname;
        songduration.innerText = songlibrary[songindex].songtime;
        masterplay.classList.replace('bi-play-circle','bi-pause-circle');
        songplay[songindex].classList.replace('bi-play-circle','bi-pause-circle');
      }

});


reverse.addEventListener("click",()=>{

  songindex--;

  if (songindex == -1){
    songindex = 8;
    song.src = songlibrary[songindex].songpath;
    song.play();
    allplay();
    songname.innerText = songlibrary[songindex].songname;
    songduration.innerText = songlibrary[songindex].songtime;
    masterplay.classList.replace('bi-play-circle','bi-pause-circle');
    songplay[songindex].classList.replace('bi-play-circle','bi-pause-circle');
    
  }
  else{
    song.src = songlibrary[songindex].songpath;
    song.play();
    allplay();
    songname.innerText = songlibrary[songindex].songname;
    songduration.innerText = songlibrary[songindex].songtime;
    masterplay.classList.replace('bi-play-circle','bi-pause-circle');
    songplay[songindex].classList.replace('bi-play-circle','bi-pause-circle');
  }

});

// if (song.paused || song.currentTime<=0){
//   song.src = songlibrary[i].songpath;
//   song.play();
//   e.target.classList.replace('bi-play-circle','bi-pause-circle');
//   gifimage.style.opacity = 1;
// }
// else {
// song.pause();
// e.target.classList.replace('bi-pause-circle','bi-play-circle');
// gifimage.style.opacity = 0;
// }