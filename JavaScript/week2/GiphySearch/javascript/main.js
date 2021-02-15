// 1.- Grab the input
function f(){
    text = document.querySelector("input").value;
    var container = document.querySelector(".js-container");
    container.innerHTML="";
    makeRequest(text);
}

document.querySelector('input').addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        f();
    }
});
document.querySelector(".container-button").addEventListener('click',f);

// 2.- do the data stuff with the API
function makeRequest(search){
    var url = "https://api.giphy.com/v1/gifs/search?api_key=ndvAB0UlwfhA2MS9OZL91Lc6veB2TZFo&q="+search+"&limit=20&offset=0&rating=g&lang=en";
    // ajax request
    var giphyAJAXcall = new XMLHttpRequest();
    giphyAJAXcall.open('GET',url);
    giphyAJAXcall.send();

    giphyAJAXcall.addEventListener('load',function(e){
        var data = e.target.response;
        pushToDOM(data);
    });
}


// 3.- Show me the GIFS
function pushToDOM(text){
    var response = JSON.parse(text);
    var container = document.querySelector(".js-container");
    response.data.forEach(element => {
        var gif = "<img src=\""+element.images.fixed_height.url+"\" class=\"container-image\" >";
        container.innerHTML+=gif;
    });
}
