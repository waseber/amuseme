/*var tag = document.createElement('script');

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            height: '100%',
            width: '100%',
            'onReady': onPlayerReady
        }
    });
}



    function onPlayerReady() {
    player.playVideo();
// Mute!
player.mute();
}
*/
//
/*
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '100%',
        width: '100%',
        playerVars : {
            autoplay: 0,
            controls: 0,
            start: 15
        },
        videoId: '8SUZ8X9cudw'
    });
}



$(window).scroll(function () {
    $("#ytplayer").each(function () {
        if ((window.pageYOffset > 200)&&(window.pageYOffset < 3000)) {
            $(this).css('opacity', 1);
            player.playVideo();
            
        } 
        else {
            $(this).css('opacity', 0);
            player.stopVideo();
        }
    });

});

*/
$(function () {
   // if ((window.pageYOffset > 200) && (window.pageYOffset < 3000)) {
        $(".player").YTPlayer();
   // }
});

//YouTube
/*
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(function () {
    var youtubePlayer;
    var myWindow = window;
    onYouTubeIframeAPIReady = function () {
        youtubePlayer = new YT.Player('ytplayer', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    onPlayerReady = function (event) {
        event.target.playVideo();
    };

    onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.PLAYING) {
           // $("#status").text("Playing!");
            myWindow.focus();
            myWindow.onblur = function () {
                //$("#status").text("You went away!");
                youtubePlayer.stopVideo();
            };
        }
    };
})
*/


