import React from 'react';

function Checkbox() {

    const styles1 ={
        color:"#D90000"
    }
    const styles2={
        color:"purple"
    }
    const styles3={
        color:"#b3b300"
    }

    return(
        /*<form>
        <div>
            <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"/>
            <label for="subscribeNews">Subscribe to newsletter?</label>
            <p>placeholder</p>
        </div>
        </form>*/
        <div>
            <input type="checkbox" />
            <p style={styles1}>placeholder</p>

            <input type="checkbox" />
            <p style={styles2}>placeholder</p>

            <input type="checkbox" />
            <p style={styles3}>placeholder</p>
        </div>
    )
}

export default Checkbox;