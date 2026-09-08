function ajouterALaFin (tab, element) {
  tab[tab.length] = element
  return tab
}

console.log(ajouterALaFin([1, 2, 3], 4))
