import React from 'react'
import { Navbar,Container,Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const Nav = ({input,handleInput,rating,handleRating,handleModal}) => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movie Card</Navbar.Brand>
    <input placeholder='Search Movie' value={input} onChange={handleInput}/>
    <ReactStars
    count={5}
    
    size={24}
    isHalf={false}
    edit={true}
    value={rating}
    onChange={handleRating}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />,

    <Button variant="secondary" onClick={handleModal}>Add Movie</Button>
    </Container>
  </Navbar>
  )
}

export default Nav