'use strict'

/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got
 * this working.
 * 
 * @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it be vanilla JS
 * with no dependencies.
 * by Troy Bennett
 * 7-2010 (updated 12-2021)
 */



 document.addEventListener('DOMContentLoaded', (e) => {
		
	const vid = document.querySelector('#vid');
	const play_button = document.querySelector('#play_button');
	const pause_button = document.querySelector('#pause_button');
	
	//document.querySelector('#caption').style.width = "100%";
	document.querySelector('.pop').classList.toggle('hide');
	
	var myCues = [
	
		{seconds: 2, callback: func1}, 
		{seconds: 9, callback: func2}, 
		{seconds: 15, callback: func3},
		{seconds: 25, callback: func6},
		{seconds: 37, callback: func4},
		{seconds: 50, callback: func5}
		
	];
		
	__CueTimer.setup('vid', myCues);
	
});




//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1()
{
	document.querySelector('#vid').style = "outline : 10px solid red";
	//document.querySelector('#caption').style.width = "100%";
}

function func2()
{
	let pop = document.querySelector('.pop');
	pop.innerHTML = '<p>Ohh Snap!</p>';
	document.querySelector('.pop').classList.toggle('hide');
	setTimeout(()=> {document.querySelector('.pop').classList.toggle('hide')}, 2000);
}

function func3()
{
	let pop = document.querySelector('.pop');
	pop.innerHTML = '<p>E=MC<sup>2</sup> is NOT Statistical Data!!</p>';
	document.querySelector('.pop').classList.toggle('hide');
	setTimeout(()=> {document.querySelector('.pop').classList.toggle('hide')}, 2000);
	document.querySelector('#vid').style = 'outline: 0px solid red';
	document.querySelector('#web').src = 'https://www.britannica.com/biography/Albert-Einstein';
}

function func4()
{
	document.querySelector('#web').src = 'https://en.wikipedia.org/wiki/Paradigm_shift';
}

function func5()
{
	document.querySelector('#web').src = 'https://en.wikipedia.org/wiki/Domestic_violence';
}

function func6()
{
	document.querySelector('#web').src = 'images/koljr-banana-splits-400.jpg';
}

