interface IGraph {
    a:string[];
    b:string[];
    c:string[];
    d:string[];
    e:string[];
    f:string[];
}

const graph:IGraph = {
    a:['b','c'],
    b:['f'],
    c:['d','e'],
    d:['f'],
    e:['f'],  
    f:['g']
}

const breadthSearch = (graph:IGraph,start:string, end:string) =>{
    let queue:string[] = []
    queue.push(start)
    while (queue.length > 0){
        const i = queue.shift()
        if(!graph[i]){
            graph[i] = []
        }
        if(graph[i].includes(end)){
            return true
        }   else {
            queue = [...queue, ...graph[i]]
        }
    }
    return false
}

console.log("breadthSearch a to g: " + breadthSearch(graph,"a","g"))

export {};