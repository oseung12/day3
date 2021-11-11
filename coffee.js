

const cafes =
    [
        {name: `S`, sour: 9, bitter: 8, distance: 0},
        {name: `K`, sour: 2, bitter: 10, distance: 0},
        {name: `M`, sour: 1, bitter: 5, distance: 0},
        {name: `A`, sour: 8, bitter: 1, distance: 0},
        {name: `T`, sour: 1, bitter: 8, distance: 0},
    ]
console.log(cafes)

const target = {sour:2, bitter:8}

let dis = []
//console.log(target.sour)
for (let i = 0; i < cafes.length; i++) {
        dis[i] = parseFloat(Math.sqrt(Math.pow(target.sour - cafes[i].sour,2) + (target.bitter - cafes[i].bitter, 2)).toFixed(2))
        cafes[i].distance = dis[i]
}
console.log(cafes)

let min = 100
for (let i = 0; i <cafes.length ; i++) {
        if(min > cafes[i].distance){
             min = cafes[i].distance
        }
}
console.log(min)
for (let i = 0; i <cafes.length ; i++) {

        if (cafes[i].distance === min) {
                console.log(cafes[i].name)
        }
}