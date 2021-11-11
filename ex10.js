//구조화된 정보
const pointArr = [
    {name:'A' , xpos:3 , ypos:10 },
    {name:'B' , xpos:7 , ypos:6 },
    {name:'C' , xpos:3 , ypos:2 },
    {name:'D' , xpos:6 , ypos:2 },// 객채리터럴 다차원배열과 비슷한 느낌이다.
]
const target = {apos:2, bpos:8}

pointArr.sort((a,b) => {
    const distanceA =  Math.sqrt(Math.pow( a.xpos - target.xpos  ,2) +  Math.pow(a.ypos - target.ypos,2 ) )
    const distanceB =  Math.sqrt(Math.pow( b.xpos - target.xpos  ,2) +  Math.pow(b.ypos - target.ypos,2 ) )

//    return distanceA - distanceB
      return distanceA - distanceB > 0? 1:-1
})

console.log(pointArr)
//for (const pointArrElement of pointArr) {
//    console.log(pointArrElement)
//
//    //target과 pointArrElement의 거리 계산하기
//     const distance = Math.sqrt(
//         Math.pow( pointArrElement.xpos - target.xpos  ,2) +
//         Math.pow(pointArrElement.ypos - target.ypos,2 ) )
//
//    console.log(distance)
//}

//for (let i = 0; i < pointArr; i++) {
//    const pointArrElement = pointArr[i]
//    console.log(pointArrElement)
//}



