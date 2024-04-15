import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

    let [title, titleEdit] = useState('남자 코드 추천'); // array [a,b]
    // a = 남자 코드 추천 , b = state 를 수정하기 위한 함수

    let posts = '강남 고기 맛집';

    return (
        <div className="App">
            <div className="black-nav">
                <div style={{color: 'skyblue', fontSize: '30px'}}>개발 Blog</div>
            </div>
            <div className="list">
                <h3> {title}</h3>
                <p>2월 17일 발행</p>
                <hr />
            </div>
        </div>
    );
}

export default App;
