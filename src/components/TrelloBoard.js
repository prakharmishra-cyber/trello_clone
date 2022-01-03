import React, { useState } from "react";
//import { connect } from "react-redux";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import header_image from '../assets/relevel.jpeg';
import '../styles/TrelloBoard.css';
import Card from './Card';
import shortid from 'shortid';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const TrelloBoard = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [card, setCard] = useState([
        { title: "Ticket1", description: "Please add a card here", cardId: shortid.generate() },
        { title: "Ticket2", description: "Card Already Add", cardId: shortid.generate() }
    ]);

    const handleAddCard = () => {
        if (title.length == 0 || description.length == 0) {
            alert('Fields cannot be empty');
        } else {
            setCard([...card, {
                title: title,
                description: description,
                cardId: shortid.generate(),
            }]);
        }
        setTitle('');
        setDescription('');
    }

    return (

        <div>
            <div className="header">
                <img className="header_image" width={60} height={60} src={header_image} alt="Relevel_Image" />
                <div className="header_title">Relevel Trello</div>
            </div>

            <div className="card_outer_box">

                {card.map((element, index) => {
                    return (
                        <Card key={index} title={element.title} description={element.description} cardId={element.cardId} />
                    )
                })}
                <div>
                    <Popup
                        trigger={<button className="add_card_button">Add Card +</button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="pop_up_outer_box">
                                <a className="close" onClick={close}>
                                    &times;
                                </a>
                                <div className="form_fields">
                                    <div className="form_title">Add a new card</div>
                                    <div className="form_inputs">
                                        <input type="text" placeholder="Enter Card Title" className="popup_title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="form_inputs">
                                        <textarea rows="2" cols="35" type="textarea" placeholder="Enter Card Title" className="popup_title" value={description} onChange={(e) => setDescription(e.target.value)} />
                                    </div>

                                    <div>
                                        {
                                            title.length < 30 && description.length < 150 ?
                                                <button className="add_card_button1" onClick={handleAddCard}>Save Card</button>
                                                : <button className="add_card_button1 bg-gray">Save Card</button>
                                        }

                                        {
                                            title.length >= 30 ? <div className="checks">Title Length Exceeded</div> : null
                                        }

                                        {
                                            description.length >= 150 ? <div className="checks">Title Length Exceeded</div> : null
                                        }

                                    </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default TrelloBoard
