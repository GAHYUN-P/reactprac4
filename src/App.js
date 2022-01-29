// App component를 class형으로!
import React from 'react';
import Nemo from "./Nemo";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count: 3,

    };
  }

  componentDidMount() {}

  addNemo = () => {
    this.setState({count: this.state.count + 1});

  }

  removeNemo = () => {
    if(this.state.count > 0) { //갯수가 마이너스가 안되게하기위해
    this.setState({count: this.state.count - 1});
  } else {
    window.alert("네모가 없어요")
  }
  }


  
  render(){
    const nemo_count = Array.from({length: this.state.count}, (v, i) => i);
    // length가 this.state.count만큼인 배열을 만들어주고 이 배열에 index값을 하나하나 넣어줄거야

    console.log(nemo_count)
    console.log(this.state)

    return (
      <div className="App">
        <Nemo/>
        {nemo_count.map((n, i)=>{
          return (
            <div
            key={i} // key값 임의지정
              style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#ddd",
              margin: "10px"
            }}>
              nemo
            </div>
          )
        })}

        <div>
          <button onClick={this.addNemo}>하나 추가</button>
          <button onClick={this.removeNemo}>하나 빼기</button>
        </div>
      </div>
    );
  }
}

export default App;
