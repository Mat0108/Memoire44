class Hexagon {
    constructor(x, y, isObstacle) {
        this.x = x;
        this.y = y;
        this.isObstacle = isObstacle;
        this.g = 0; // Coût du chemin depuis le point de départ
        this.h = 0; // Estimation du coût jusqu'à l'arrivée
        this.f = 0; // Coût total (g + h)
        this.parent = null; // Point précédent dans le chemin optimal
    }
}

function distance(hexA, hexB) {
    // Méthode de calcul de la distance entre deux hexagones (utilisée pour l'heuristique)
    const dx = Math.abs(hexA.x - hexB.x);
    const dy = Math.abs(hexA.y - hexB.y);
    const dz = Math.abs(hexA.x + hexA.y - hexB.x - hexB.y);
    return Math.max(dx, dy, dz);
}

function getNeighbors(hex, grid) {
    // Récupère les voisins valides d'un hexagone
    const neighbors = [];
    const directions = [[1, 0], [0, 1], [-1, 1], [-1, 0], [0, -1], [1, -1]];

    for (const [dx, dy] of directions) {
        const nx = hex.x + dx;
        const ny = hex.y + dy;

        if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && !grid[nx][ny].isObstacle) {
            neighbors.push(grid[nx][ny]);
        }
    }

    return neighbors;
}

function aStar(start2, end2, grille,maxDistance) {
    const grid = grille.grille.map((row,pos) => row.map((col,pos2)=>{
        
        let cond = (grille.grille[pos][pos2].case ? grille.grille[pos][pos2].case._byentering : false) ||( !!grille.grille[pos][pos2].unité ?? false )? true : false;
        // if(pos === 6 && pos2 === 9){
        //     console.log(cond, grille.grille[pos][pos2])
        // }
        return new Hexagon(pos, pos2,cond);
    }))
    const start = grid[start2.x][start2.y]
    const end = grid[end2.x][end2.y]
    // console.log(end)
    const openSet = [start];
    const closedSet = new Set();

    while (openSet.length > 0) {
        let current = openSet[0];

        // Recherche du nœud avec le coût total le plus bas
        for (let i = 1; i < openSet.length; i++) {
            if (openSet[i].f < current.f || (openSet[i].f === current.f && openSet[i].h < current.h)) {
                current = openSet[i];
            }
        }

        // Si on a atteint l'arrivée

        if (current === end || current.g >= maxDistance) {
            const path = [];
            let temp = current;
            while (temp.parent) {
                path.push(temp);
                temp = temp.parent;
            }
            path.push(start);
            return path.reverse();
        }

        // On retire le nœud courant de l'ensemble ouvert et on l'ajoute à l'ensemble fermé
        openSet.splice(openSet.indexOf(current), 1);
        closedSet.add(current);

        // Recherche des voisins du nœud courant
        const neighbors = getNeighbors(current, grid);
        for (const neighbor of neighbors) {
            if (!closedSet.has(neighbor)) {
                const tempG = current.g + distance(current, neighbor);
               
                if (!openSet.includes(neighbor) || tempG < neighbor.g) {
                    neighbor.g = tempG;
                    neighbor.h = distance(neighbor, end);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.parent = current;

                    if (!openSet.includes(neighbor)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }
    }

    // Si aucun chemin n'a été trouvé
    return null;
}

export function MultipleAStar(grille,start,ends,maxDistance){
    let paths = []
    ends.forEach(end=>{
        let path = aStar(start,end,grille,maxDistance)
        // paths.push({...end,path})
        if(path){
            paths.push({...end,path})
            // paths.push(end)
        }
    })
    console.log(paths)
    return paths;

}
// Exemple d'utilisation :


// Créer la grille hexagonale avec des nœuds

// Définir le point de départ et d'arrivée

// Trouver le chemin avec A*
// const path = aStar(grid, startNode, endNode, 1); // Utiliser une distance de 1 ou 2 ou 3 selon votre besoin

// // Afficher le chemin trouvé
// if (path !== null) {
//     for (let node of path) {
//         console.log(`(${node.x}, ${node.y})`);
//     }
// } else {
//     console.log("Aucun chemin trouvé.");
// }
