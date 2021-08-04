import React from "react";

function MemePageComponent(props){
    return(
        <div>
            <header>
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Problem"/>
                <p>MEME GENERATOR</p>
            </header>    

            <form className="memeForm" onSubmit={props.handleSubmit}>
                <input type="text"
                    name="topText"
                    value={props.data.topText}
                    placeholder="Top Text"
                    onChange={props.handleChange}
                />
                        
                <input type="text"
                    name="bottomText"
                    value={props.data.bottomText}
                    placeholder="Bottom Text"
                    onChange={props.handleChange}
                />

                <button className="memeButton">Gen</button>
            </form>
            <div className="meme">
                <img src={props.data.randomImg} alt="Problem"/>
                <h3 className="top-text">{props.data.topText}</h3>
                <h3 className="bottom-text">{props.data.bottomText}</h3>
            </div>
        </div>
    )
}

export default MemePageComponent