import React from 'react';
import './style.css'
import Content from './content';
import Aside from './aside';

import { Container, Row, Col } from "react-bootstrap";
const Section = () => {
    return (
        <div className="main_body">
            <Row>
                <Aside></Aside>

                <Content />

            </Row>
        </div>
    )
}
export default Section;