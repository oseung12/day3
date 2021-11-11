

//let flag //이것만 존재하면 변수는 존재하지만 내용물은 할당이 된적이 없는 상태 ; undefined
//let flag = undefined
let flag = null

if(!flag){
    console.log("......undefined or false or null")
}  //!(not 연산자)  위의 세가지를 모두 체크하고 걸러준다.
//** 참고  JAVA에서 null nullpointerexception이 발생하는 경우는 점프(. []) 사용경우 발생한다.
//** null 이란 빈 껍데기 상태로 리모콘 공간에 들어가는 것으로 JAVA에서는 변수타입이 대분자 이거나 배열인 경우이다.
