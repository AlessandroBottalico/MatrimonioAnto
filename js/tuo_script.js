var dataDestinazione = new Date("August 5, 2024 23:59:59").getTime();
function aggiornaCountdown() {
    var dataCorrente = new Date().getTime();
    var differenza = dataDestinazione - dataCorrente;
    
    // Calcola il numero di giorni
    var giorni = Math.floor(differenza / (1000 * 60 * 60 * 24));
    
    // Aggiorna il tuo elemento HTML per mostrare il numero di giorni
    document.getElementById("countdown").textContent ="- " + giorni + " giorni";
  }
  aggiornaCountdown(); // Avvia il countdown iniziale

  // Aggiorna il countdown ogni secondo
  setInterval(aggiornaCountdown, 1000);
    