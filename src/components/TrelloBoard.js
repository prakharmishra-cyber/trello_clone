import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import header_image from '../assets/relevel.jpeg';
import '../styles/TrelloBoard.css';
import Card from './Card';
import shortid from 'shortid';

class TrelloBoard extends React.Component {

    render() {
        return (
            /*Can start Coding from Here*/
            <div>
                <div className="header">
                    <img className="header_image" width={60} height={60} src={header_image} alt="Relevel_Image"/>
                    <div className="header_title">Relevel Trello</div>
                </div>
                
                <div className="card_outer_box">
                    <Card title="Ticket1" description="Please add a card here" cardId={shortid.generate()}/>
                    <Card title="Ticket2" description="Card Already added" cardId={shortid.generate()}/>
                </div>
            </div>
        )
    }
}

export default TrelloBoard;