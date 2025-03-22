import React from 'react';

const QuestionCard = ({ question }) => {
    return (
        <div>
            <h3>{question.questionText}</h3>
            <ul>
                <li>{question.optionA}</li>
                <li>{question.optionB}</li>
                <li>{question.optionC}</li>
                <li>{question.optionD}</li>
            </ul>
        </div>
    );
};

export default QuestionCard;
