/**
* captions.js
*
* A modification of Bruce Lawson's HTML5 Captions Hack
* rewritten using jQuery and formatted as an encapsulated object.
* by Troy Bennett
* 7-2010
*
* Dependencies: jQuery version 1.3.2 +
*
*/



var __VidCaptioner = (function(){

	
	var captions = [];	// create container for caption objects
	var vid;			// reference to the video element
	var transcript; 	// reference to the div containing the caption spans
	var caption;		// reference to the div used to display the individual captions
	
	var init = function(vidEl, caps){
		
		vid = '#' + vidEl;
		transcript = '#' + caps;
		
		// hide transcript div when scripting is enabled
		$(transcript).hide();
	
		// JS is enabled, so create and append a div to put the caption text into
		caption = document.createElement('div');
		$(caption).attr('id', 'caption'); 
		$(vid).after($(caption));
	
		// now grab all spans in the transcript, create an object for each, 
		//and add them to the captions array.
		$(transcript + ' span').each(function(index, el){
		
			var c = {'start': parseFloat(el.getAttribute('data-begin')),
					 'end': parseFloat(el.getAttribute('data-end')),
					 'text': this.textContent 
					};

			captions.push(c); 
		}); 
		
		//add the event listener to the video element
		$(vid).bind('timeupdate', ontimeupdate);
		
	}//end init




	/**
	*
	*
	*/
	function ontimeupdate(e) 
	{
		var v = e.target || window.srcElement;
		var now = v.currentTime;
		var text = '';

		// loop through all caption objects looking for a current caption
		for (var i in captions) 
		{		
			// is now within the times specified for this caption?
	    	if (now >= captions[i].start && now <= captions[i].end) 
			{
	      		text = captions[i].text;
	      		break;
	    	}
	  	}

		// put contents of text into caption div
		$(caption).html(text); 
	}
	
	return {create: init};
	
})();









