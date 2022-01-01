This app was created to assist digital media students in the creation of HTML5 videos which contained closed-captions / subtitles and cuepoints.  The video should be navigable via links or buttons to discrete locations in the video.  This is similar to a "bookmark".

Additionally, when the video gets to a specific point, it should trigger a function to run. The action that the cuepoint triggers is totally up to the designer / developer.
A simple array is populated with cuepoint objects to create a "playlist" of times and callbacks.

 use it like this:

document.addEventListener('DOMContentLoaded', (e) => {
	
	var myCues = [
	
		{seconds: 2, callback: func1}, 
		{seconds: 9, callback: func2}, 
		{seconds: 15, callback: func3},
		
	];
		
	__CueTimer.setup('myVideo', myCues);
	
});

