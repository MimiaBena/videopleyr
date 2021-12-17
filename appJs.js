const video = document.querySelector(".video");
const playButton = document.querySelector(".playButton");
const volume = document.querySelector(".volume");
const progress = document.querySelector(".progress");
const backwordButton = document.querySelector(".backwordButton");
const forwardButton = document.querySelector(".forwardButton");


//function progress bar
function progressBarUpdate(){
    progress.style.flexBasis = (video.currentTime/video.duration) * 100 + '%';
}
/* Function play video */
   function playVideo(){
    if(video.paused){
        video.play();
        playButton.firstChild.classList.remove('fa-play');
        playButton.firstChild.classList.add('fa-pause')
    }
    else{
        video.pause();
        playButton.firstChild.classList.remove('fa-pause');
        playButton.firstChild.classList.add('fa-play');   
    }  
    }
video.addEventListener('click', playVideo);
playButton.addEventListener('click', playVideo);



video.addEventListener('timeupdate', progressBarUpdate);


volume.addEventListener('change', () => {video.volume = volume.value});

backwordButton.addEventListener('click', () =>{
        video.currentTime -=1;
        progressBarUpdate();
 });
forwardButton.addEventListener('click', () => {
        video.currentTime +=1;
        progressBarUpdate();
});
                               