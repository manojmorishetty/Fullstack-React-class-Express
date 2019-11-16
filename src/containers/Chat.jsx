import React, { useState, useEffect } from 'react';
import sequence from './Data/dialogue'
import { useHistory } from "react-router-dom";


const Chat = () => {
    const [id, setId] = useState(0);
    return (
        <div>
        <div className="center-chat">
            <div id={sequence[id].id} onClick={(e) => {
                let renderContent;
                if (e.target.id == 0) {
                    renderContent = sequence.find(data => {
                        return data.id = 1
                    })
                    setId(renderContent.id)
                }
                else if (e.target.id == 1) {
                    renderContent = sequence.find(data => {
                        return data.id = 2
                    })
                    setId(renderContent.id)
                }
                else {
                    if (sequence[id].goto){
                        setId(sequence[id].goto)
                    }
                    else{
                        setId(5)
                    }        
                }
            }}>
                {sequence[id].display}
            </div>
            <div>
                {
                    sequence[id].choices ? <div>
                        <ul>
                            {
                                sequence[id].choices.map(each => {
                                    return <li id={each.goto} onClick={(e) => {
                                        let clickedChoice = sequence.find(data => {
                                            return data.id = e.target.id
                                        })
                                        setId(clickedChoice.id);
                                    }}>{each.display}</li>
                                })
                            }
                        </ul>
                    </div> : ''
                }
            </div>
        </div>
      </div>
    );
}



export default Chat
