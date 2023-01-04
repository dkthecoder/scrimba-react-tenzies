import React from "react";

export default function Die(props){
    const styles = {
        backgroundColor: props.isHelf ? "#59E391" : "azure"
    }

    return(
        <main>
            <div className= "dice-face" style={styles} onClick={props.holdDice}>
            <h2 className="die-num">{props.value}</h2>
            </div>
        </main>
    )
}