
// fonction qui affiche le resultat
function afficherResultat(score,nombreMots) {

    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${nombreMots}`
    spanScore.innerText = affichageScore
}

function afficherProposition(Prosition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = Prosition
}

// fonction lancer le jeu
function lancerJeu(){
    let Prositions = ""
    let score = 0
    let nombreMots = 0
    let buttonEnvoyer = document.getElementById('btnValiderMot')
    let i = 0
    let inputEcriture = document.getElementById('inputEcriture')
    afficherProposition(Prositions[i]) 
// eouter l'action du bouton
    buttonEnvoyer.addEventListener('click', ()=>{
        console.log(inputEcriture.value)
        if(inputEcriture.value === Prositions[i]){
            score++
        }
        i++
        afficherResultat(score, i);
        inputEcriture.value = ''
        if(Prositions[i]=== undefined){
            afficherProposition('Fin du jeu')
            buttonEnvoyer.disabled = true
        }else{
             // afficher le nombre de mot
             afficherProposition(Prositions[i]) 
        }
    })
    // recuperons les button radion
    let buttonRadio = document.querySelectorAll(".optionSource input")
    for(let index=0; index<buttonRadio.length; index++){
        buttonRadio[index].addEventListener('change', (event)=>{
          console.log (event.target.value)
          if(event.target.value === '1'){
            Prositions = listeMots
          }else{
            Prositions = listePhrases
          }
          afficherProposition(Prositions[i])
        })
    }
 afficherResultat(score, i);

}
