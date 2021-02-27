// 1.- Search
    function f(){
        var text = document.querySelector("input");
        var cont = document.querySelector(".js-search-results");
        cont.innerHTML="";
        SoundCloudAPI.getTrack(text.value);
    }
    var UI = {};
    UI.enterPress = function enterPress(){document.querySelector('input').addEventListener('keypress', function (e){
        if (e.key === 'Enter') {
            f();
        }
    });}
    UI.click = function click(){document.querySelector(".js-submit").addEventListener('click',f);}

    UI.enterPress();
    UI.click();
// 2.- Query SoundCloud API
var SoundCloudAPI = {};

SoundCloudAPI.init = function(){
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
}
SoundCloudAPI.getTrack = function(inputValue){
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', {
        q: inputValue,
        limit: 20
    }).then(function(tracks) {
        console.log(tracks);
        SoundCloudAPI.renderTracks(tracks);
    });
}
SoundCloudAPI.init();




// 3.- Display the cards
SoundCloudAPI.renderTracks = function(tracks){

    tracks.forEach(function(track){
        var card = document.createElement("div");
        card.classList.add("card");
        var divimg = document.createElement("div");
        divimg.classList.add("image");
        var img = document.createElement("img");
        img.classList.add("image_img");
        //momentanio
        img.src= track.artwork_url || "https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png";
        divimg.appendChild(img);
        card.appendChild(divimg);

        var content = document.createElement("div");
        content.classList.add("content");
        var header = document.createElement("div");
        header.classList.add("header");
        var a = document.createElement("a");
        a.href = track.permalink_url;
        a.target= "_blank";
        a.innerHTML = track.title;
        header.appendChild(a);
        content.appendChild(header);
        card.appendChild(content);

        var button = document.createElement("div");
        button.classList.add("ui","bottom","attached","button","js-button");
        var i = document.createElement("i");
        header.classList.add("add","icon");
        var span = document.createElement("span");
        span.innerHTML = "Add to playlist";

        button.appendChild(i);
        button.appendChild(span);

        button.addEventListener('click',function f(){
            SoundCloudAPI.getEmbed(track.permalink_url);
        })

        card.appendChild(button);

        var container = document.querySelector(".js-search-results");
        container.appendChild(card);
    });
}
// 4.- Add to playlist and play
SoundCloudAPI.getEmbed = function(link){
    SC.oEmbed(link, {
        auto_play: true
    }).then(function(embed){
        console.log('oEmbed response: ', embed);
        var sideBar = document.querySelector('.js-playlist');
        //sideBar.innerHTML = embed.html;
        var box = document.createElement("div");
        box.innerHTML = embed.html;
        sideBar.insertBefore(box,sideBar.firstChild);
        localStorage.setItem('key', sideBar.innerHTML);
    });
}

var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem('key');

document.querySelector(".js-clear").addEventListener('click', function() {
    localStorage.clear();
    var sideBar = document.querySelector('.js-playlist');
    sideBar.innerHTML="";
})