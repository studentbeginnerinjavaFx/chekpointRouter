import React from "react";
import {Modal, Button} from 'react-bootstrap'

function AddMovie(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={props.handleModal}>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Movie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "5px",
      }}>
      <h6>Movie Image</h6>
          <input
            name="img"
            value={props.newMovie.img}
            onChange={props.handleNewMovie}
            placeholder="Enter the movie cover here..."
          />
          <br />
          <h6>Movie Name</h6>
          <input
             name="name"
             value={props.newMovie.name}
              onChange={props.handleNewMovie}
              placeholder="Enter the movie name here..."
          />
          <br />
          <h6>Movie Rating</h6>
          <input
            name="rating"
            type="number"
           value={props.newMovie.rating}
           onChange={props.handleNewMovie}
            placeholder="Enter the movie rating here..."
          />
          <br />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.handleModal}>Close</Button>
        <Button variant="success" onClick={props.handleAddMovie}>Add</Button>
        
      </Modal.Footer>
    </Modal>
  );
}




export default AddMovie;