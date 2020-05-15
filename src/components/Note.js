import React, { Component } from 'react';
import '../css/Note.css';

class Note extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card card-view">
                    <div className="card-body">
                        <h5 className="card-title"> {this.props.title} </h5>
                        <p>{this.props.body}</p>
                        <button className="btn btn-info">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

//function Note(props) {
/*return (
    <div className="col-sm-6">
        <div className="card card-view">
            <div className="card-body">
                <h5 className="card-title"> {props.title} </h5>
                <p>{props.body}</p>
                <button className="btn btn-info">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
);
}*/

Note.defaultProps = {
    title: "This is the DEFAULT TITLE",
    body: "DEFAULT BODY"
}

/*Note.propTypes = {
    title: PropTypes.string //it makes it so it has to be a string
}*/
//take note - this is restrictive and it won't allow numbers

export default Note;