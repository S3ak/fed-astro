---
title: Graphs - Dijkstra's Algorithm
description: sample
tags: JavaScript 2
layout: ../../../../layouts/MainLayout.astro
---

```js
// https://isaaccomputerscience.org/concepts/dsa_search_dijkstra

export function getMinimum(graph: any): string {
  let lowestValue = Infinity;
  let lowestKey = "";
  Object.keys(graph).forEach((key, index) => {
    if (graph[key][0] < lowestValue) {
      lowestValue = graph[key][0];
      lowestKey = key;
    }
  });

  // A Reduce achieving same output as above, but
  //    seems unnecessarily complex
  /* const result = Object.keys(graph).reduce(
    (result, key) => {
      if (graph[key][0] < result.value) {
        result = { key, value: graph[key][0] };
      }
      return result;
    },
    { key: "", value: Infinity }
  );
  return result.key; */

  return lowestKey;
}

export function dijkstrasShortestPath(graph: any, startNode: string) {
  const unvisited: any = {};
  const visited: any = {};

  // Init the first hash table with infinite scores except first node
  Object.keys(graph).forEach(
    (key: string) => (unvisited[key] = [Infinity, null])
  );
  unvisited[startNode] = [0, null];

  let finished = false;
  while (!finished) {
    // If there are no more nodes, break out of loop
    if (Object.keys(unvisited).map((item) => item).length === 0) {
      finished = true;
    } else {
      // Get the node with the lowest score
      const currentNode = getMinimum(unvisited);

      Object.keys(graph[currentNode]).map((neighbour) => {
        // If neighbour is not in visited
        if (!visited.hasOwnProperty(neighbour)) {
          const cost =
            unvisited[currentNode][0] + graph[currentNode][neighbour];
          if (cost < unvisited[neighbour][0]) {
            unvisited[neighbour][0] = cost;
            unvisited[neighbour][1] = currentNode;
          }
        }
        return neighbour;
      });

      // Move current node from Unvisited to Visted
      visited[currentNode] = unvisited[currentNode];
      // Delete node from Unvisited list
      delete unvisited[currentNode];
    }
  }
  return visited;
}

export function displayShortestPaths(start: string, visited: any) {
  let path;
  let cost;
  let finishKey;
  let current;
  Object.keys(visited).forEach((key) => {
    if (key !== start) {
      current = key;
      path = current;
      while (current !== start) {
        let previous = visited[current][1];
        path = previous + path;
        current = visited[current][1];
      }
      finishKey = key;
      cost = visited[key][0];
    }
  });
  return { key: finishKey, path, cost };
}

const graph = {
  A: { B: 8, C: 5 },
  C: { A: 5, D: 6, E: 9 },
  B: { A: 8, D: 1 },
  D: { C: 6, B: 1, E: 2 },
  E: { C: 9, D: 2 },
};

const visited = dijkstrasShortestPath(graph, "A");
```

## Additional Resources:

[freeCodeCamp: Dijkstra's Shortest Path Algorithm - A Detailed and Visual Introduction](https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/)
