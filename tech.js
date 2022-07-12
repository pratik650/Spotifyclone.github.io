console.log("Welcome to my spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
     {SongName: "Kaise Hua Album / Movie : Kabir Singh 2019.",  filePath:"songs/1.mp3", coverPath:"cover/1.jpg"},
     {SongName: "cielo hum-huma",  filePath:"songs/2.mp3", coverPath:"cover/2.jpg"},
     {SongName: "Deaf kev - Invincible [NCS release] ",  filePath:"songs/3.mp3", coverPath:"cover/3.jpg"},
     {SongName: "Different heaven & EH!DE - My heart",  filePath:"songs/4.mp3", coverPath:"cover/4.jpg"},
     {SongName: "Janji-heroes-tonight-featj-Johning-NC release",  filePath:"songs/5.mp3", coverPath:"cover/5.jpg"},
     {SongName: "Yaad he na - 1920 london",  filePath:"songs/6.mp3", coverPath:"cover/6.jpg"},
     {SongName: "uska hi bana - 1920 London",  filePath:"songs/7.mp3", coverPath:"cover/7.jpg"},
     {SongName: "Gujarish - gajni",  filePath:"songs/8.mp3", coverPath:"cover/8.jpg"},
     {SongName: "Keh du tumhe -Judwa2 ",  filePath:"songs/9.mp3", coverPath:"cover/9.jpg"},
     {SongName: "Yaar mere - Feat/album 2k22",  filePath:"songs/10.mp3",coverPath:"cover/10.jpg"},
]
songItems.forEach((element,i) =>{
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].SongName; 
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }  
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100; 
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
    element.addEventListener('click',(e)=>{
       makeallplays();
       songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src = `songs/${songIndex+1}.mp3`;
       masterSongName.innerText = songs[songIndex].SongName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity =1;
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

var x = document.getElementsByClassName("songListPlay").duration;
document.getElementsByClassName("Timestamp").innerHTML = x;