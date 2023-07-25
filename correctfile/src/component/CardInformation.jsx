import React from "react";

const CardInformation = (item) => {
  const { id, imgURL, name, price, premium_price } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={imgURL} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{price}</p>
        <p>{premium_price}</p>
        <button>Add</button>
      </div>
    </div>
  );
};

export default CardInformation;

// import React from "react";
// import { Button, Card, ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function CardInformation(props) {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={props.img} />
//       <Card.Body>
//         <Card.Text>{props.name}</Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>
//           <h6>price:</h6>
//           <p>{props.price}</p>
//           <h6>premium price:</h6>
//           <p>{props.premium_price}</p>
//         </ListGroup.Item>
//       </ListGroup>
//       <Card.Body>
//         <Link to="/cart">
//           <Button variant="warning">Add</Button>
//         </Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardInformation;
