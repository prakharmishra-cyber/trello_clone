import React from 'react';
import '../styles/Card.css';

const Card = ({cardId, title, description}) => {
    return (
        <div className="card_box">
            <div className="card_title">{title}</div>
            <div className="card_description">{description}</div>
        </div>
    )
}

export default Card
