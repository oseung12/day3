const cafes =
    [
        {name: `S`, sour: 9, bitter: 8, taste: 'm'},
        {name: `K`, sour: 2, bitter: 10, taste: 'd'},
        {name: `M`, sour: 1, bitter: 5, taste: 'd'},
        {name: `A`, sour: 8, bitter: 1, taste: 'm'},
        {name: `T`, sour: 1, bitter: 8, taste: 'd'},
    ]

const target = {sour: 5 , bitter: 5}
cafes.sort((a, b) =>
{
        const distanceA = Math.sqrt(Math.pow(a.sour - target.sour, 2) + Math.pow(a.bitter - target.bitter,2))
        const distanceB = Math.sqrt(Math.pow(b.sour - target.sour, 2) + Math.pow(b.bitter - target.bitter,2))
        return distanceA - distanceB
})
console.log(cafes)
let best3 = []
for (let i = 0; i < 3 ; i++)
{
    best3[i] = cafes[i].taste
}
console.log(best3)
let cnt = 0;
for (let i = 0; i < 3; i++) {
        if(best3[i] == 'd'){
                cnt++
        }


}
console.log(cnt)

if(cnt >= 2){
        console.log(`dark한 맛에 가깝습니다.`)
}else{
        console.log(`mild한 맛에 가깝습니다.`)
}



/*
1. 카페별 데이터 입력
2. 타겟 설정
3. 타겟으로부터 각 카페 커피까지의 거리(유사성) 구하기
4. 거리를 구하여 거리가 제일 가까운 카페 순으로 정렬
5. 제일 가까운 값 3개를 구하여 mind / dark 중 더 많은 결과값 확인
6. 타겟의 종류를 출력

pointArr.sort((a,b) => {
    const distanceA =  Math.sqrt(Math.pow( a.xpos - target.xpos  ,2) +  Math.pow(a.ypos - target.ypos,2 ) )
    const distanceB =  Math.sqrt(Math.pow( b.xpos - target.xpos  ,2) +  Math.pow(b.ypos - target.ypos,2 ) )

    return distanceA - distanceB

 */
