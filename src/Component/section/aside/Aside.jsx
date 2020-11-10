import React from 'react';
import { Nav } from "react-bootstrap";
// eslint-disable-next-line

const Aside = () => {
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Face List</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default Aside;