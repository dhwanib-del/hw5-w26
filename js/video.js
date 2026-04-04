var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;	
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});








// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

