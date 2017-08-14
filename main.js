
let play = document.querySelector("#player");
let serach = document.querySelector("#search");
let Button = document.querySelector("#searchButton");


Button.addEventListener('click',function(event){
  fetch("https://itunes.apple.com/search?term=jack+johnson&limit=10" + search.value);
  console.log(search.value);
    .then(

   function(response) {

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




let Muplayer = document.querySelector('.container');

function playerPlay(data) {

  for (var i = 0; i <data.results.length; i++) {


let template = '';

  template += `
  <div>
  <div><img src= "${data.image}"></div>
  <p>Song: ${data.results[i].song}</p>
  <p>Artist: ${data.results[i].artistName}</p>
  </div>

  `;
  Muplayer.innerHTML += template;

}
};
});
