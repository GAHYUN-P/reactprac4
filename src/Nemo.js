import React from "react";

const Nemo = (props) => {
    const [count, setCount] = React.useState(3);
    // count는 state값, setCount는 count를 변경하기위한 어떤 함수
    // useState()의 ()안의 값은 초기값

    console.log(count);
    const nemo_count = Array.from({length: count}, (v, i) => i);
    // count길이의 배열에 index를 순서대로 넣는다
    // [0,1,2,3, ...]

    const addNemo = ()=>{
        setCount(count + 1);
    }
    // setCount가 state를 변경시키면서 리랜더링

    const removeNemo = ()=>{
        if(count>0) {
        setCount(count - 1);
        } else {
            window.alert("네모가 없어요");
        }
    }


    return (
        <div>
            {nemo_count.map((n, i)=>{
            return (
              <div
              key={i} // key값 임의지정
                style={{
                width: "150px",
                height: "150px",
                backgroundColor: "pink",
                margin: "10px"
              }}>
                nemo
              </div>
            )
          })}
  
          <div>
            <button onClick={addNemo}>하나 추가</button>
            <button onClick={removeNemo}>하나 빼기</button>
          </div>
        </div>
    );
}

export default Nemo;