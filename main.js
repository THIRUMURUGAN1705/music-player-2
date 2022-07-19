let track=document.createElement('audio');

let track_image=document.querySelector("#track_image");
let songName=document.querySelector("#songName");
let artist=document.querySelector("#artist");
let play=document.querySelector("#play");
let slider=document.querySelector("#duration");

let autoplay=1;
let timer;
let index_no=0;
let playingSong=0;

let allSongs =
[
{
        name:"Kerala Song",
        artist:"Hip Hop Aadhi",
        path:"music/1.mp3",
        image:"image/1.jpg",
    },
    {
        name:"Kanja Poo Kannala",
        artist:"Yuvan Shankar Raja",
        path:"music/2.mp3",
        image:"image/2.jpg",
    },
    {
        name:"Pathala Pathala Song",
        artist:"Anirudh ",
        path:"music/3.mp3",
        image:"image/3.jpg",
    },
    {
        name:"Bothai Kaname Song",
        artist:"Anirudh & Shasha",
        path:"music/4.mp3",
        image:"image/4.png",
    },
    {
        name:"Toofan Song",
        artist:"Ravi Basrur",
        path:"music/5.mp3",
        image:"image/5.jpg",
    },
    {
        name:"Private Party Song",
        artist:"Anirudh & Jonita",
        path:"music/6.mp3",
        image:"image/6.jpg",
    }
];

function loadTrack(index_no)
{
    clearInterval(timer);
    resetSlider();

    track_image.src=allSongs[index_no].image;
    artist.innerHTML=allSongs[index_no].artist;
    songName.innerHTML=allSongs[index_no].name;
    track.src=allSongs[index_no].path;

    timer=setInterval(range_slider,1000);
}

loadTrack(index_no);

function resetSlider()
{
    slider.value=0;
}

function justplay()
{
    if(playingSong==0)
    {
        playSong();
    }
    else
    {
        pauseSong();
    }
}

function playSong()
{
    track.play();
    playingSong=1;
    play.innerHTML='<i class="fa fa-pause"></i>';
}
function pauseSong()
{
    track.pause();
    playingSong=0;
    play.innerHTML='<i class="fa fa-play"></i>';
}
function nextSong()
{
    if(index_no<allSongs.length-1)
    {
        nextSong1();
    }
        
}
function previousSong()
{
    if(index_no==0)
    {
        index_no=allSongs.length-1;
        loadTrack(index_no);
    }
    else
    {
        index_no-=1;
        loadTrack(index_no);
    }
}

function nextSong1()
{
    if(playingSong==1)
    {
        index_no+=1;
        loadTrack(index_no);
        track.play();
    }
    else
    {
        index_no+=1;
        loadTrack(index_no);
        track.pause();
    }
}
