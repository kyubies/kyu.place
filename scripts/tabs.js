function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
function openMovie(movieName) {
  var i, list, movie
  var movie = document.getElementsByClassName("moviecontent");
  for (i = 0; i < movie.length; i++) {
    movie[i].style.display = "none";
  }
  var list = document.getElementsByClassName("movielist");
  for (i = 0; i < list.length; i++) {
  list[i].style.display = "none";
  }
  document.getElementById(movieName).style.display = "block";
}
function closeMovie(movieName) {
  var i, list, movie
  var movie = document.getElementsByClassName("moviecontent");
  for (i = 0; i < movie.length; i++) {
    movie[i].style.display = "none";
  }
  var list = document.getElementsByClassName("movielist");
  for (i = 0; i < list.length; i++) {
  list[i].style.display = "flex";
  }
  document.getElementById(movieName).style.display = "none";
}