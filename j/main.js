/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got
 * this working.
 * by Troy Bennett
 * 7-2010
 */



	$('document').ready(function(){
		
		var vid = $('#vid');
		var play_button = $('#play_button');
		var pause_button = $('#pause_button');
		
		$('#caption').width(352);
		$('.pop').fadeOut(0);
		
		var myCues = [
		
			[2, func1], 
			[9, func2], 
			[15, func3],
			[25, func6],
			[37, func4],
			[50, func5]
			
		];
			
		__CueTimer.create('vid', myCues);
		__VidCaptioner.create('vid', 'transcript');
		
	});




//the custom callback functions to trigger when a cue-point is hit.
//Warning! In firefox alerts seem to be called multiple times, 
//yet the function only registers being called once.
function func1()
{
	//alert('cue 1 fired');
	$('#vid').css('outline', '10px solid red');
	$('#caption').width(352);
}

function func2()
{
	$('.pop').html('<p>Ohh Snap!</p>');
	$('.pop').fadeIn(0);
	$('.pop').fadeOut(4000);
}

function func3()
{
	$('#vid').css('outline', '0px solid red');
	$('.pop').html('<p>E=MC<sup>2</sup> is NOT Statistical Data!!</p>');
	$('.pop').fadeIn(1000);
	$('.pop').fadeOut(4000);
	$('#web').attr('src', 'https://www.britannica.com/biography/Albert-Einstein');
}

function func4()
{
	$('#web').attr('src', 'https://en.wikipedia.org/wiki/Paradigm_shift');
}

function func5()
{
	$('#web').attr('src', 'https://en.wikipedia.org/wiki/Domestic_violence');
}

function func6()
{
	$('#web').attr('src', 'images/koljr-banana-splits-400.jpg');
}