

const readlineSync = require("readline-sync")

//데이터 생성
const movies = [
    {action : 12, kiss : 2, category :'A'},  //암살
    {action : 2, kiss : 14, category :'M'},  //어바웃타임
    {action : 7, kiss : 2, category :'A'},   //토이스토리
    {action : 2, kiss : 10, category :'A'},  //노팅힐
    {action : 6, kiss : 15, category :"M"}   //타이타닉
]


// target 설정
// const target = {action : 9, kiss :3}


// readline-sync 를 이용하여 target 을 사용자가 직접 입력하도록 변경하여보자.
// 하단 Terminal 에서 npm 작성.
const actionCut = parseInt(readlineSync.question("Action COUNT"))
const kissCut = parseInt(readlineSync.question("Kiss COUNT"))

const target = {action: actionCut, kiss: kissCut} //반지의 제왕


// target 과 movies 의 거리 계산하기
// 1. movies.sort(화살표와 비슷하다) (두개의 (변수)데이터를 넣어서 숫자가 나오는것을 만든다. f(x)=y)
// 모든 함수는 결과가 있다. _리터널 한다.
//movies.sort((a,b) => 1) //작성하여도 결과는 도출된다. a와 b 데이터를 넣으면 무조건 1이 나온다.
// 중괄호가 없으면 여기 작성한 값이 무조건 반환값이다.
//console.log(movies)

//중괄호가 있으면 리턴이라는 값을 써야한다.
movies.sort((a, b) => {
  const disA = Math.sqrt(Math.pow(a.action - target.action, 2) + Math.pow(a.kiss - target.kiss , 2)) // target 부터 A 까지의 거리를 구한다.
  const disB = Math.sqrt(Math.pow(b.action - target.action, 2) + Math.pow(b.kiss - target.kiss , 2)) // target 부터 B 까지의 거리를 구한다.
  //여기서 반환되는 값은 음수 . 0 , 양수 뿐이다.

    return disA - disB > 0 ? 1: -1    // 0? 1:-1 없어도 실행이 가능하다.
})

console.log(movies) //실행하면 상단에 가장 가까운 값 순으로 정렬이 된다.

// 루프를 3번 돌리기
const knum = 3
const result = {actioncount:0, kisscount:0}

for (let i = 0; i < knum; i++) {
    const movie = movies[i]
    if(movie.category === 'A'){
        result.actionCount += 1
    }else if(movie.category === 'M'){
        result.kissCount += 1
    }
}

console.log(result)

//if else  대신 삼항연산자 사용가능
const str = result.actionCount > result.kissCount? '액션':'멜로'

console.log(`이 영화는 ${str} 영화인거 같습니다.`)