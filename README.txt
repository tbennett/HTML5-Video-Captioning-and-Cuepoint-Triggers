This module was created to assist digital media students in the creation of Dynamic 
HTML5 videos. This code will trigger a function to run at a specific timed "cuepoint". 
The action that the cuepoint triggers is totally up to the 
designer / developer. 

This example demonstrates how to make a navigable video via custom links or buttons.  
This will allow the creation of chapter markers or bookmarks.

A simple array is populated with cuepoint objects to create a "playlist" 
of times and callbacks.

 /* use it like this:

import { cueTimer } from './modules/cuepoints.js';

document.addEventListener('DOMContentLoaded', (e) => {
	
	var myCues = [
		
		{seconds: 2, callback: func1}, 
		{seconds: 10, callback: func2}, 
		{seconds: 15, callback: func3} 
		
		];

		
	cueTimer.setup('vid', myCues);
	
});

*/

