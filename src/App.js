// App component를 class형으로!
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count: 3,

    };
  }

  componentDidMount(){

  }
  
  render(){
    const nemo_count = Array.from({length: this.state.count}, (v, i) => i);
    // length가 this.state.count만큼인 배열을 만들어주고 이 배열에 index값을 하나하나 넣어줄거야

    console.log(nemo_count)

    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
