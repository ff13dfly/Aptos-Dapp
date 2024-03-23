import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import APT from "../lib/aptos";
import { Network } from "@aptos-labs/ts-sdk";

function Contact(props) {
    const size = {
        row: [12],
    };

    const self={
        
    };

    useEffect(() => {

    }, []);

    return (
        <Row className="pt-2">
            <Col lg={size.row[0]} xl={size.row[0]} xxl={size.row[0]} >
                <h4>Contact calling</h4>
            </Col>
        </Row>
    )
}

export default Contact;