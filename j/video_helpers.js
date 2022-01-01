/** video_helpers.js
 *  
 * Helper functions for controlling the video element.
 * by Troy Bennett 7-2010
 *
 */


	function selectVideo(clip) 
	{
		clip.src = video_form.video_select.value;
		play_button.disabled = false;
		pause_button.disabled = true;
		clip.load();
		playVideo(clip);
	}

	function playVideo(clip) 
	{
		clip.play();
		play_button.disabled = true;
		pause_button.disabled = false;      
	}

	function seekVideo(clip, position) 
	{
		if(!position) position = 0;
		clip.currentTime = position;
		clip.play();
		play_button.disabled = false;  
		pause_button.disabled = true;     
	}

	function pauseVideo(clip) 
	{
		clip.pause();
		play_button.disabled = false;  
		pause_button.disabled = true;          
	}

	function muteVid(clip) 
	{
		clip.muted = true;
	}

	function unmuteVid(clip) 
	{
		clip.muted = false;
	}

	function onFinished(clip) 
	{
		clip.currentTime = 0;
		play_button.disabled = false;
		pause_button.disabled = true;          
	}

	function onTimeupdate(clip) 
	{
		var current = document.getElementById('vid').currentTime;
		//document.getElementById('slider').value = current;
	}

	function playRate(clip, rate) 
	{
		clip.playbackRate = rate;
	}

