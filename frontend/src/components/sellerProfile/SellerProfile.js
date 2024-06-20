import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './SellerProfile.css'

function SellerProfile() {
  let { loginUserStatus, currentUser, errorOccurred, errMsg } = useSelector(state => state.buyerSellerLoginReducer);
  return (
    <Container>
    <Row className="my-4">
      <Col>
        <h1>Welcome {currentUser.name}</h1>
      </Col>
      <section className="hero-section">
    </section>
    </Row>
    <Row>
      
    </Row>
    <Row className="my-4">
      <Col>
        <h2>About Taru Foundation</h2>
        <p>
          The Taru Foundation has been instrumental in supporting self-help groups.
          By providing resources, training, and an e-commerce platform, the foundation helps artisans and small-scale producers
          reach a wider market. This initiative empowers them to improve their livelihoods and sustain their craft.
        </p>
        <p>
          Through this e-commerce app, sellers can list their products, manage orders, and connect with customers across the globe.
          The platform also offers marketing and logistical support to ensure the success of these small businesses.
        </p>
      </Col>
    </Row>
  </Container>
  )
}

export default SellerProfile