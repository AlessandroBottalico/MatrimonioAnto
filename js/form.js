function aggiungiInput(numero) {
    var container = document.getElementById("inputAggiuntivi");
    container.innerHTML = "";
  
    if (isNaN(numero) || numero <= 0) {
      var errorDiv = document.createElement("div");
      errorDiv.className = "alert alert-danger";
      errorDiv.textContent = "Inserisci un numero valido.";
      container.appendChild(errorDiv);
      document.getElementById("btn").style.display = "none"; // Nascondi il pulsante di conferma
      document.getElementById("btn2").style.display="none";
      return;
    }
    document.getElementById("btn").style.display = "block"; // Mostra il pulsante di conferma
    document.getElementById("btn2").style.display="block"; // Mostra il pulsante di
  
    for (var i = 0; i < numero; i++) {
      var div = document.createElement("div");
      div.className = "col-md-12";
  
      var divNome = document.createElement("div");
      divNome.className = "form-group";
  
      // Campo nome
      var labelNome = document.createElement("label");
      labelNome.for = "nome" + i;
      labelNome.className = "sr-only";
      labelNome.textContent = "Nome della " + getPosizione(i + 1) + " persona";
      var inputNome = document.createElement("input");
      inputNome.type = "text";
      inputNome.className = "form-control";
      inputNome.id = "nome" + i;
      inputNome.name = "nome" + i;
      inputNome.placeholder = "Nome della " + getPosizione(i + 1) + " persona";
      inputNome.addEventListener("input", abilitaPulsante);
  
      divNome.appendChild(labelNome);
      divNome.appendChild(inputNome);
  
      var divCognome = document.createElement("div");
      divCognome.className = "form-group";
  
      // Campo cognome
      var labelCognome = document.createElement("label");
      labelCognome.for = "cognome" + i;
      labelCognome.className = "sr-only";
      labelCognome.textContent = "Cognome della " + getPosizione(i + 1) + " persona";
      var inputCognome = document.createElement("input");
      inputCognome.type = "text";
      inputCognome.className = "form-control";
      inputCognome.id = "cognome" + i;
      inputCognome.name = "cognome" + i;
      inputCognome.placeholder = "Cognome della " + getPosizione(i + 1) + " persona";
      inputCognome.addEventListener("input", abilitaPulsante);
  
      divCognome.appendChild(labelCognome);
      divCognome.appendChild(inputCognome);
  
      // Aggiungi tutti gli elementi al div principale
      div.appendChild(divNome);
      div.appendChild(divCognome);
  
      // Campo email
      var divEmail = document.createElement("div");
      divEmail.className = "form-group";

      var labelEmail = document.createElement("label");
      labelEmail.for = "email" + i;
      labelEmail.className = "sr-only";
      labelEmail.textContent = "Email della " + getPosizione(i + 1) + " persona";
      var inputEmail = document.createElement("input");
      inputEmail.type = "email";
      inputEmail.className = "form-control";
      inputEmail.id = "email" + i;
      inputEmail.name = "email" + i;
      inputEmail.placeholder = "Email della " + getPosizione(i + 1) + " persona";
      inputEmail.addEventListener("input", abilitaPulsante);
      inputEmail.pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})?";
      
      divEmail.appendChild(labelEmail);
      divEmail.appendChild(inputEmail);

      // Aggiungi il campo email al div principale
      div.appendChild(divEmail);


      // Allergie
      var divAllergie = document.createElement("div");
      divAllergie.className = "form-group";
  
      // Domanda "Sei allergico?"
      var labelDomanda = document.createElement("label");
      labelDomanda.for = "allergie" + i;
      labelDomanda.textContent = "Sei allergico o sei intollerente?";
      labelDomanda.className = "domanda-allergico";
      divAllergie.appendChild(labelDomanda);
      divAllergie.appendChild(document.createElement("br"));
  
// Opzione "Si"
var radioSi = document.createElement("input");
radioSi.type = "radio";
radioSi.className = "custom-radio-input";
radioSi.id = "si" + i;
radioSi.name = "allergie" + i;
radioSi.value = "si";

// Aggiungi l'opzione "Si" all'elemento divAllergie
divAllergie.appendChild(radioSi);

// Opzione "No"
var radioNo = document.createElement("input");
radioNo.type = "radio";
radioNo.className = "form-check-input";
radioNo.id = "no" + i;
radioNo.name = "allergie" + i;
radioNo.value = "no";

// Aggiungi l'opzione "No" all'elemento divAllergie
divAllergie.appendChild(radioNo);


      // Campo allergie
      var inputAllergie = document.createElement("input");
      inputAllergie.type = "text";
      inputAllergie.className = "form-control";
      inputAllergie.id = "allergie" + i;
      inputAllergie.name = "allergie" + i;
      inputAllergie.placeholder = "Inserisci le allergie o le intolleranze";
      inputAllergie.style.display = "none";
  
      divAllergie.appendChild(radioSi);
      divAllergie.appendChild(document.createTextNode("Si"));
      divAllergie.appendChild(radioNo);
      divAllergie.appendChild(document.createTextNode("No"));
      divAllergie.appendChild(inputAllergie);
  
      // Aggiungi l'event listener per mostrare/nascondere l'input allergie
      radioSi.addEventListener("input" , createAllergieInputHandler(inputAllergie));
      radioNo.addEventListener("input" , createAllergieInputHandler(inputAllergie));
      
      function createAllergieInputHandler(inputAllergie) {
        return function () {
          if (this.value === "si") {
          inputAllergie.style.display = "block";
          } else {
          inputAllergie.style.display = "none";
          }
    };
  }
      div.appendChild(divAllergie);
  
      container.appendChild(div);
    }
  }
  
  // Funzione per ottenere la posizione (es. prima, seconda, terza, ecc.)
  function getPosizione(numero) {
    var posizioni = ["prima", "seconda", "terza", "quarta", "quinta", "sesta", "settima", "ottava", "nona", "decima"];
    var posizione = posizioni[numero - 1];
    return posizione;
  }
  
  // Funzione per abilitare/disabilitare il pulsante in base alla compilazione dei campi
  function abilitaPulsante() {
    var inputNome = document.getElementById("nome0");
    var inputCognome = document.getElementById("cognome0");
    var pulsante = document.getElementById("btn");
    var pulsante2=document.getElementById("btn2")
  
    if (inputNome.value.length >= 3 && inputCognome.value.length >= 3) {
      pulsante.disabled = false;
      pulsante2.disabled = false;
    } else {
      pulsante.disabled = true;
      pulsante2.disabled = true;
    }
  }
  
  function setConfermaValue(conferma) {
    var confermaInput = document.getElementById("confermaInput");
    if (conferma) {
      confermaInput.value = "true";
    } else {
      confermaInput.value = "false";
    }
  }
  
  // Funzione per mostrare/nascondere l'input allergie in base alla selezione del radio button "Si"
  function createAllergieInputHandler(inputAllergie) {
    return function () {
      if (this.value === "si") {
        inputAllergie.style.display = "block";
      } else {
        inputAllergie.style.display = "none";
      }
    };

    
    
  }
  
  