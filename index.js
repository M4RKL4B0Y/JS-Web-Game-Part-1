function newImage(assets, dirLeft, dirBottom) {

let icon = document.createElement('img')
icon.src = assets
icon.style.position = 'fixed'
icon.style.left = dirLeft
icon.style.bottom = dirBottom
document.body.append(icon)
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png','500px', '425px')
// newImage('assets/grass.png', '100%')

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

function newItem(assets, dirLeft, dirBottom){

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})
}

// let grass = document.createElement('img')
// grass.src = 'assets/grass.png'
// grass.style.position = 'fixed'
// grass.style.left = dirLeft
// grass.style.bottom = dirBottom
// document.body.append(grass)
