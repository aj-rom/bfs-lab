function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let found = [rootNode]
    let final = [rootNode]
    while (found.length > 0) {
        let cur = found.shift()
        let adjacent = findAdjacent(cur.name, vertices, edges)
        found = found.concat(adjacent)
        markDistanceAndPredecessor(cur, adjacent)
        final = final.concat(adjacent)
    }

    return final
}

function findAdjacent(address, vertices, edges) {
    let filtered = edges.filter( edge => { return edge.includes(address) })
    let flattened = filtered.flat().filter( street => { return street !== address })
    return vertices.filter( vert => { return flattened.includes(vert.name) && vert.distance === null })
}

function markDistanceAndPredecessor(start, adjacent) {
    adjacent.forEach( e => {
        e.distance = start.distance + 1
        e.predecessor = start
    })
}