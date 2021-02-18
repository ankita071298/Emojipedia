import React from "react";
import Emoji from "./Emoji";
import Name from "./Name";
import Meaning from "./Meaning";

function Card(props)
    {
        return (
        <div className="term">
            <dt>
                <Emoji emoji={props.emoji} />
                <Name name={props.name} />
            </dt>
            <dd>
                <Meaning description={props.meaning} />
            </dd>                      
        </div>
        );
    }

export default Card;