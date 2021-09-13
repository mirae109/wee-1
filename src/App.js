import React from 'react';
import logo from './logo.svg';
import BucketList from './BucketList';
import './style.css';

class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
    };
  }

  render() {
    console.log(this.state);

      return (
      <div className="App">
        <div className="container">
            <h1 className="title">내 버킷리스트</h1>
            <hr className="line"/>
            {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
            <BucketList list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;