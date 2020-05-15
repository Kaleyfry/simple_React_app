import React from 'react'
import '../css/Board.css'
import Note from './Note'

function Board() {
    return (
        <div>
            <div className="div-board">
                <div className="row">
                    <Note />
                    <Note />
                    <Note />
                </div>
            </div>
            <div>
                <button className="btn btn-success add-button">Add</button>
            </div>
        </div>
    )
}

export default Board;