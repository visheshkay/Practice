import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Buyerprofile.css'

function BuyerProfile() {
  let { loginUserStatus, currentUser, errorOccurred, errMsg } = useSelector(state => state.buyerSellerLoginReducer);
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Welcome {currentUser.name}</h1>
        </Col>
      </Row>
      <Row>
      <section className="hero-section">
    </section>
      </Row>
      <Row>
        
      </Row>
      <Row className="my-4">
        <Col>
          <h2>How to Buy</h2>
          <p>
            You can purchase a wide range of natural and organic products made by SHGs supported by the Taru Foundation. Simply browse through our product listings, add items to your cart, and proceed to checkout.
          </p>
          <p>
            By buying these products, you are supporting small-scale artisans and helping to sustain their livelihoods. The Taru Foundation ensures that the products are of high quality and made with natural and organic ingredients.
          </p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>About Taru Foundation</h2>
          <p>
            The Taru Foundation supports self-help groups (SHGs) by providing resources, training, and an e-commerce platform to sell their products. The foundation helps these groups reach a wider market, empowering them to improve their livelihoods and sustain their craft.
          </p>
          <p>
            Our platform offers a seamless shopping experience, allowing you to easily purchase authentic handmade and organic products. Thank you for supporting our mission and the talented artisans we work with.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default BuyerProfile