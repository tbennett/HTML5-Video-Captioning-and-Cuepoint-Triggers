This app was created to assist IMD340 students in the creation of HTML5 videos which contained closed-captions / subtitles and cuepoints.  The video should be navigable via links or buttons to discrete locations in the video.  This is similar to a "bookmark".

Additionally, when the video gets to a specific point, it should trigger a function to run. The action that the cuepoint triggers is totally up to the designer / developer.
A simple two dimensional array is used to create a "playlist" of times and callback.

Current dependencies include jQuery.


 use it like this:

$('document').ready(function(){
	
	var myCues = [
		
		[2, func1]
		,[10, func2] 
		,[15, func3] 
		,[28, func4] 
		
		];
		
	__CueTimer.create('vid', myCues);
	
});

