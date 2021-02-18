import React from "react";

function Emoji(props)
    {
        return (
            <p> <span className="emoji">{props.emoji}</span> </p>
        );
    }

export default Emoji;