rangif();
function rangif(){
    var con = document.querySelector("div");
    var link = "https://api.giphy.com/v1/gifs/random?api_key=ndvAB0UlwfhA2MS9OZL91Lc6veB2TZFo&q&limit=1&offset=0&rating=g&lang=en";
    //AJAX request
    var r = new XMLHttpRequest();
    r.open("GET",link);
    r.send();
    r.addEventListener('load',function(e){
        cont = e.target.response;
        f(cont);
    });
    setTimeout(rangif,5000);
}

function f(cont){
    var contj = JSON.parse(cont);
    var con = document.querySelector("div");
    console.log(contj.data);
    con.innerHTML = "<img src=\""+contj.data.fixed_height_downsampled_url+"\" alt=\"No hay gif :(\" width= 100% height= 100%/>";
}