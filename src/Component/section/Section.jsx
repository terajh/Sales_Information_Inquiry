import React from 'react';
import './Section.css'
import Aside from './aside/Aside';
import Content from './content/Content';

import { Container, Row, Col } from "react-bootstrap";
const Section = () => {
    return (
        <>
            <Container fluid className="main_body">
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Aside />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <Content />
                    </Col>
                </Row>

            </Container>
        </>
    )
}
export default Section;