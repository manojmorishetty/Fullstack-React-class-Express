import React, { useState, useEffect } from 'react';
import sequence from './Data/dialogue'

import Background from './img/background.jpg';
import janeImg from './img/jane.png'
import joeImg from './img/joe.png'

// const [id, setId] = useState(0);
const move=false;

var BgStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`
};

var jane = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${janeImg})`
};
var joe = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${joeImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const ChatAnim = () => {
    return (
        <section style={{ BgStyle }}>
            <div className="row" >
                <div className={`column (${move ? "move" : ""})`} style={{ jane }}>

                </div>
                <div className="column">

                </div>
                <div className={`column (${move ? "move" : ""})`} style={{ joe }}>

                </div>
            </div>
            <div className="row">
            {sequence[0].display}
            </div>
        </section>
    );
}


export default ChatAnim
