import React from "react";

function QuestionCard(props) {
    const {name, instructions, examples} = props;
    console.log(name)

    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default QuestionCard;