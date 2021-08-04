import React from 'react'

function Joke(props){
    //console.log(props)
    /*if(props.question)
        return(
            <div>
                <p>Question: {props.question}</p>
                <p>Answer: {props.answer}</p>
                <hr/>
            </div>
     )
     else
        return(
            <div>
                <p>Answer: {props.answer}</p>
                <hr/>
            </div>
        )*/
    return(
        <div>
            <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
            <p>Answer: {props.answer}</p>
            <hr/>
        </div>
    )
}

export default Joke