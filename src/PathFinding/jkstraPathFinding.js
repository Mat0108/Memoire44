import { algos,Graph } from 'jkstra'
export function jkstraPathFinding(grille, start, end) {
    const graph = new Graph()
    const allNodes = new Array(9).fill(null).map(() => []);
    
    // Helper to get node, creating it if it doesn't exist
    function getNode(x, y) {
        
        if (x < 0 || x >= 9 || y < 0 || y >= (x % 2 === 1 ? 12 : 11)) return null;

        let cond = (grille[x][y].case ? grille[x][y].case._byentering : false) ||( !!grille[x][y].unité ?? false ) ? true : false;
        let isBegin = (x === start.x && y === start.y)
        let isEnd = (x === end.x && y === end.y)
        if(cond && (!isBegin && !isEnd)) return null

        if (!allNodes[x][y]) {
            allNodes[x][y] = graph.addVertex({ x, y });
        }
        return allNodes[x][y];
        
    }
    
    // Create nodes and connect them
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < (x % 2 === 1 ? 12 : 11); y++) {
            const current = getNode(x, y);
            if (!current) continue;
            // Connecting the six surrounding hexes
            [[x-1, x % 2 === 1 ? y : y-1], [x-1, x % 2 === 1 ? y+1 : y],
             [x, y-1], [x, y+1],
             [x+1, x % 2 === 1 ? y : y-1], [x+1, x % 2 === 1 ? y+1 : y]].forEach(([nx, ny]) => {

                const neighbor = getNode(nx, ny);
                if (neighbor) {
                    graph.addEdge(current, neighbor);
                }
            });
        }
    }
    const dijkstra = new algos.Dijkstra(graph);
    let path = dijkstra.shortestPath(getNode(start.x, start.y), getNode(end.x, end.y));
    if(path.length === 0) return null
    path.map(node => {
        return node.from.data;
    })
    return path
    
    
}