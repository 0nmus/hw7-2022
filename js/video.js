var video = document.querySelector('video');
var volume = document.getElementById("volume");
let slowDownRatio;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.removeAttribute("autoplay");
	video.loop = false;
	video.load();
	slowDownRatio = 1;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = `${video.volume*100}%`;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(`New speed: ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log(`New speed: ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function() {
	let newTime = video.currentTime + 10;
	if (newTime > video.duration) {
		console.log("Video length exceeded!");
		newTime = 0;
	}

	video.currentTime = newTime;
	console.log(`Current location: ${video.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	let videoStatus = "";
	muteBtn = document.getElementById("mute");
	if (!video.muted) {
		muteBtn.innerHTML = "Mute";
		videoStatus = "unmuted";
	} else {
		muteBtn.innerHTML = "Unmute";
		videoStatus = "muted";
	}
	console.log(`Video is ${videoStatus}.`);
});

var slider = document.getElementById("slider");
document.getElementById("slider").addEventListener("input", function() {
	video.volume = slider.value/100;
	document.getElementById("volume").innerHTML = `${video.volume*100}%`;
	console.log(`Volume is set to ${video.volume*100}%`);
});

document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Video style is set to 'old school'.")
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Video style is set to 'original'.")
});


