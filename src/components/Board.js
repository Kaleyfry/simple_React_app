import React from 'react'
import '../css/Board.css'
import Note from './Note'

function Board() {
    return (
        <div>
            <div className="div-board">
                <div className="row">
                    <Note title="My very first note" body="Body sample 1" />
                    <Note title="My second note" body="Body sample 2" />
                    <Note title="My last good note" body="Body sample 3" />
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