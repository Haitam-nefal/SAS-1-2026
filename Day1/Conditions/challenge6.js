const prompt = require('prompt-sync')()

console.log(`Menu :
  \n1. Afficher le profil
  \n2. Afficher les paramètres
  \n3. Afficher les notifications
  \n4 . Se déconnecter
`)

const choix = prompt('Choix : ')


switch (choix) {
  case '1':
    console.log('Afficher le profil')
    break
  case '2':
    console.log('Ouverture des paramètres...')
    break
  case '3':
    console.log('Ouverture des notifications...')
    break
  case '4':
    console.log('Ouverture de la déconnexion...')
    break
  default:
    console.log('Choix invalide')
}
