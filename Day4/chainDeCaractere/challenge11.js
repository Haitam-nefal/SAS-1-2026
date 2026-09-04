function formaterTexte (chaine) {
  return {
    majuscule: `${chaine.toUpperCase()}`,
    miniscule: `${chaine.toLowerCase()}`
  }
}

console.log(formaterTexte('Code'));

