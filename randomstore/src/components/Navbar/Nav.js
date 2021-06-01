import React from 'react'
import {Row, Col, Card, Container, Navbar} from 'reactstrap';
import logo from '/Users/Aaron/RandomStore/randomstore/src/assets/abcode.png';

const Nav = ({totalcost, cartitems}) => {

    return (
        <>
                <Navbar>
        <Container className='container'>
            <Card>
        <Row>
            <Col>
                <img src={logo} alt='abcode.png' height='25px'/>ABCode
            </Col>

            <Col>
            Total Items: {cartitems}
            <br/>
            {totalcost}
        </Col>

        </Row>
        </Card>
        </Container>
        </Navbar>
        </>
    )
}

export default Nav
