// notes pour les différents films (sur 5)
let notes = [4.2,4.0,4.0,3.4,3.9,4.2, 4.2];
console.log("hey");
// boucle sur les div "movie"
document.querySelectorAll('.card').forEach((movie, index) => {
    
  // arrondir la note à la demi-étoile la plus proche
  let roundedNote = Math.round(notes[index] * 2) / 2;

  // afficher le nombre d'étoiles correspondant à la note
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedNote) {
      movie.querySelector('.stars').innerHTML += '&#9733;'; // étoile pleine
    } else {
      movie.querySelector('.stars').innerHTML += '&#9734;'; // étoile vide
    }
  }

  // afficher la note
  movie.querySelector('.note').innerHTML = `${notes[index]} / 5`;
});
