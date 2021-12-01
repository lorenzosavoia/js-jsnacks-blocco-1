// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const nameInvited = ["fracesco", "marco", "lorenzo", "chiara", "elisabetta"];
// console.log(nameInvited);
const result = document.querySelector(".result");

const invited = prompt("qual è il tuo nome?");
// console.log(invited);
let correctInvitedName = false

for (let i = 0; i < nameInvited.length; i++) {
     if (invited == nameInvited[i]) {
         correctInvitedName = true
     }
}

if (correctInvitedName == true) {
    result.innerHTML = `Puoi entrare`;
} else {
    result.innerHTML = `Non puoi entrare`;
}