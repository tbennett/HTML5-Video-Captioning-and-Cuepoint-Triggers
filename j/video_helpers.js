/** video_helpers.js
 *  
 * Helper functions for controlling the video element.
 * by Troy Bennett 7-2010
 *
 */


	function selectVideo(e, clip) 
	{
		console.log(e, clip);
		clip.src = e.target.value;
		clip.load();
		playVideo(clip);
	}

	function playVideo(clip) 
	{
		clip.play();
	}

	function seekVideo(clip, position) 
	{
		if(!position) position = 0;
		clip.currentTime = position;
		clip.play();
	}

	function pauseVideo(clip) 
	{
		clip.pause();
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
	}

	function playRate(clip, rate) 
	{
		clip.playbackRate = rate;
	}

