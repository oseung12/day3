//    [90,87,140],
//    [120,130,150],
//    [180,240,200],
//    [180,140,190]

// 1. 매출이 가장 많은 달
// 2. 몇분기의 몇월이
const arr =
    [
        {month: `1월`, total: 90, parr: 1},
        {month: `2월`, total: 87, parr: 1},
        {month: `3월`, total: 140, parr: 1},
        {month: `4월`, total: 120, parr: 2},
        {month: `5월`, total: 130, parr: 2},
        {month: `6월`, total: 150, parr: 2},
        {month: `7월`, total: 180, parr: 3},
        {month: `8월`, total: 240, parr: 3},
        {month: `9월`, total: 200, parr: 3},
        {month: `10월`, total: 180, parr: 4},
        {month: `11월`, total: 140, parr: 4},
        {month: `12월`, total: 190, parr: 4}
        ]

let max = 0
for (let i = 0; i <arr.length ; i++) {
        if (arr[i].total > max) {
                max = arr[i].total
        }
}
for (let i = 0; i < arr.length; i++) {
        if(max == arr[i].total) {
                console.log(`최고 매출은 ${arr[i].parr}분기의 ${arr[i].month}이다.`)
        }
}