/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * @format
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got this working.
 * @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it to be vanilla JS with no dependencies. by Troy Bennett 7-2010 (updated 12-2021)
 */

import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

   myCues = [
        { seconds: 2, callback: func1 },
        { seconds: 9, callback: func2 },
        { seconds: 15, callback: func3 },
        { seconds: 25, callback: func6 },
        { seconds: 37, callback: func4 },
        { seconds: 50, callback: func5 }
    ];

    cueTimer.setup("vid", myCues);

    const vid = document.querySelector("#vid");
    const selectVid = document.querySelector("#video_select");
    const selectTxt = document.querySelector("#text-track");
    const display = document.getElementById("transcript");
    const transcript_en = document.getElementById("transcript-en");
    const transcript_es = document.getElementById("transcript-es");
    const transcript_fr = document.getElementById("transcript-fr");
    const showHide = document.getElementById("show-hide");

    selectVid.addEventListener("change", (e) => {
 
        if (e.target.value == 'assets/leverage-a-synergy.mp4') {
            
            selectTrack(null, vid, 'en');

            myCues = [
                { seconds: 2, callback: func1 },
                { seconds: 9, callback: func2 },
                { seconds: 15, callback: func3 },
                { seconds: 25, callback: func6 },
                { seconds: 37, callback: func4 },
                { seconds: 50, callback: func5 }
            ];
            cueTimer.setup("vid", myCues);

        } else if(e.target.value == 'assets/bunny.mp4') {
            myCues.splice(0, myCues.length);
            selectTrack(null, vid, 'en-bunny');
        }
        
        selectVideo(e, vid);
    });

    selectTxt.addEventListener("change", (e) => {
        const id = e.target.value;
        selectTrack(e, vid, id);
    });

    transcript_en.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("captions/synergy.vtt", display);
        });

    transcript_es.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/spanish.vtt", display);
        });

    transcript_fr.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/french.vtt", display);
        });

    showHide.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/french.vtt", display);
            if (e.target.innerHTML == "Show Transcript") {
                e.target.innerHTML = "Hide Transcript";
                display.style.display = "block";
            } else {
                e.target.innerHTML = "Show Transcript";
                display.style.display = "none";
            }
        });
}



//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1() {
    document.querySelector("#vid").style = "outline : 10px solid red";
}

function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Ohh Snap!</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func3() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>E=MC<sup>2</sup> is NOT Statistical Data!!</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    document.querySelector("#vid").style = "outline: 0px solid red";
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Albert_Einstein";
}

function func4() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Paradigm_shift";
}

function func5() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Domestic_violence";
}

function func6() {
    document.querySelector("#web").src = "images/koljr-banana-splits-400.jpg";
}
