
let Button = document.querySelector("#searchButton");
let results = document.getElementById("results");
let player = document.getElementById("player");

Button.addEventListener('click',function(){
let player = document.getElementById("player");
let searcher = document.querySelector("#search");

let search = searcher.value.split(" ").join("+")

let url = "https://itunes.apple.com/search?term=" + search ;

  fetch(url)
    .then(function(response) {

     if (response.status !== 200) {
       console.log(response.status);
       return;
     }
     response.json().then(function(data) {
       playerPlay(data);

       console.log("Here is the data:", data);
     });
   }
 )
 .catch(function(err) {
   console.log("Fetch Error :-S", err);
 });
 })




function playerPlay(data) {
let template = '';
  for (var i = 0; i <data.results.length; i++) {

  template +=
  `
  <div class="song">
  <img src= "${data.results[i].artworkUrl100}">
  <p>Song: ${data.results[i].trackName}</p>
  <p>Artist: ${data.results[i].artistName}</p>
  </div>
  `;
}

  results.innerHTML = template;
  let song = document.getElementsByClassName('song');
console.log("songs are: ", song);
  for (var i = 0; i < song.length; i++) {
    let result = i
    song[i].addEventListener('click', function() {
   console.log("result is: ", data.results[result], result);
      player.src = data.results[result].previewUrl;
      player.play();
    })
  }
console.log(data.results[result]);
};
