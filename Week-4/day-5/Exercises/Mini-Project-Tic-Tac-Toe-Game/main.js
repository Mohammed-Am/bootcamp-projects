const winCombos = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [6, 4, 2]
]

let x = document.getElementById('x')
let o = document.getElementById('o')

let keepTrackBoard = [0,1,2,3,4,5,6,7,8]

let varx = Symbol('X')
let varO = Symbol('O')


const boxes = document.getElementBy('box');

console.log(boxes)