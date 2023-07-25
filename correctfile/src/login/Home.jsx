import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import CardInformation from "../component/CardInformation";
import info from "../information";

// const createCard = (data) => {
//   return (
//     <div style={{ flex: 1 }}>
//       <CardInformation
//         key={data.id}
//         img={data.imgURL}
//         name={data.name}
//         price={data.price}
//         premium_price={data.premium_price}
//       />
//     </div>
//   );
// };
const Home = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Category</Navbar.Brand>
          <Navbar.Brand href="#">Brand</Navbar.Brand>
          <Navbar.Brand href="#">Gender</Navbar.Brand>
          <Navbar.Brand href="#">Goal</Navbar.Brand>
          <Navbar.Brand href="#">Best sellers</Navbar.Brand>
          <Navbar.Brand href="#">Details</Navbar.Brand>
          <Navbar.Brand href="#">Gift Card</Navbar.Brand>
          <Navbar.Brand href="#">Blog,Videos&More</Navbar.Brand>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img6.hkrtcdn.com/14609/bnr_1460845_o.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img7.hkrtcdn.com/21460/bnr_2145916_o.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img5.hkrtcdn.com/21102/bnr_2110134_o.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <div>
        <Container>
          <h3 style={{ textAlign: "left" }}>Flash Sale</h3>
          <div style={{ textAlign: "right" }}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>0</span>
          </div>
        </Container>
      </div>
      <br></br>
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        {info.map(createCard)}
      </div> */}
      <section>
        {info.map((item) => (
          <CardInformation key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <Link to="/cart">
//         <button>Add</button>
//       </Link>
//     </div>
//   );
// };

// export default Home;
