function createGame(player1,hour,player2){
    return `
    <li>
    <img src="img/icon-${player1}.png" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="img/icon-${player2}.png" alt="Bandeira do ${player2}"/>

    `
}
let delay = -0.4;
function createCard(date,day,games){
    delay = delay + 0.4;
    return`
    <div class="card" style="animation-delay:${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `

}
document.querySelector("#cards").innerHTML = 
createCard("05/07","Quarta-Feira",createGame("corinthians","21:00","palmeiras"))+createCard("10/07","Segunda-Feira",createGame("atletico","20:00","bahia"))+createCard("12/07","Segunda-Feira",createGame("sp","19:00","vasco"))+createCard("14/07","Sexta-Feira",createGame("inter","18:00","santos"))+createCard("16/07","Domingo",createGame("bota","16:00","flamengo"))+createCard("20/07","Quinta-Feira",createGame("cruzeiro","21:00","gremio"))