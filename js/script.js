console.log("JS OK");
/*
1 - Chiedere il nome all'utente
2 - Salvarlo in una variabile
3 - Prendo l'elemento dalla pagina
4 - Chiedere il cognome all'utente 
5 - Salvarlo in una variabile 
6 - Prendo l'elemento dalla pagina 
7 - Chiedere il colore preferito 
8 - Salvarlo in una variabile 
*/

//Recupero l'elemento in pagina
const targetElement = document.getElementById("target");

//Domande
const firstName = prompt("Come ti chiami?", "Eva");
console.log(firstName);

const lastName = prompt("Qual'é il tuo cognome?", "Xausa");
console.log(lastName);

const favouritecolor = prompt("Qual'é il tuo colore preferito?", "verde");
console.log(favouritecolor);

//Costruiamo la password
const password = firstName + lastName + color + "21";
console.log(password);

//Build content
constmessage = "La tua password é: " + password;

//Inserisco in pagina
targetElement.innerText = message;
