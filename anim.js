// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en milisegundos
var lyricsData = [
  { text: "Yo te conocí en primavera, me miraste tú de primera", time: 10000 },
  { text: "De un verano eterno me enamoré", time: 14000 },
  { text: "Y esa despedida en septiembre, En octubre sí que se siente", time: 20000 },
  { text: "Noviembre sin ti me dolió también, Llegará diciembre, sigues en mi mente", time: 25000 },
  { text: "Fueron seis meses y por fin volveré a verte", time: 33000 },
  { text: "Llegará febrero, yo seré el primero", time: 36000 },
  { text: "En darte flores y decirte que te quiero", time: 43000 },
  { text: "Puede que pase un año más de una vez", time: 48000 },
  { text: "Sin que te pueda ver", time: 50000 },
  { text: "Pero el amor es más fuerte", time: 52000 },
  { text: "Puede que el tiempo nos aleje otra vez", time: 58000 },
  { text: "Sin saber dónde estés", time: 60000 },
  { text: "Pero el amor es más fuerte", time: 62000 },
  { text: "Uh, oh, oh, oh, oh-oh, oh oh", time: 68000 },
  { text: "Te esperaré porque el amor es más fuerte", time: 74000 },
  { text: "FELIZ CUMPLE NIÑA :)", time: 79000 },
  // ... demás líneas ajustadas ...
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime * 1000); // Tiempo actual en milisegundos
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5000 // Rango de 3 segundos
  );

  if (currentLine) {
    var fadeInDuration = 1.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / (fadeInDuration * 1000));
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100); // Intervalo de 100 ms para mayor precisión

// Función para ocultar el título
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(() => (titulo.style.display = "none"), 3000);
}

setTimeout(ocultarTitulo, 216000);
