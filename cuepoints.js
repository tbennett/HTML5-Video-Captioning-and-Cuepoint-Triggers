/**
* cuepoints.js
*
* Inspired by Bruce Lawson's HTML5 Captions Hack
* written using jQuery and formatted as an encapsulated module.
* by Troy Bennett
* 7-2010
*
* Dependencies: jQuery version 1.3.2 +
*
*/

/* use it like this:

$('document').ready(function(){
	
	var myCues = [
		
		[2, func1], 
		[10, func2], 
		[15, func3] 
		
		];
		
	__CueTimer.create('vid', myCues);
	
});
*/


var __CueTimer = (function(){

	var vid;			// reference to the video element
	var cuepoints;		// array of cuepoints in seconds
	var callback;		// the function to call when a cuepoint is detected.
	var previous_cue;	// flag to prevent callback being trigger more than once.
	
	var init = function(vidEl, cues)
	{
		var vid = '#' + vidEl;
		cuepoints = cues;

		//add the event listener to the video element
		$(vid).bind('timeupdate', ontimeupdate);
		
	
	}//end init


	//Check the video's current time against an array of cuepoints (in whole seconds)
	//triggers designated callback upon cuepoint.
	function ontimeupdate(e) 
	{	
		var v = e.target || window.srcElement;
		var now = Math.floor(v.currentTime);

		// loop through all cuepoints looking for a current cue
		for (var i in cuepoints) 
		{
			var cuepoint = cuepoints[i][0];
			var callback = cuepoints[i][1];
			
			// is now within the times specified for this cue?
	    	if (cuepoint == now) 
			{
				if(previous_cue == now)
				{
					continue;
				} 
				else
				{
					callback(e);
					previous_cue = now;
	      			break;
				}
	    	}
	  	}
	}
	
	return {create: init};
	
})();
