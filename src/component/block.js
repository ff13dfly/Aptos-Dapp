import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import APT from "../network/aptos";
import { Network } from "@aptos-labs/ts-sdk";

function Block(props) {
    const size = {
        row: [12],
    };

    const self={
        
    };

    useEffect(() => {
    }, [props.update]);

    return (
        <Row className="pt-2">
            <Col lg={size.row[0]} xl={size.row[0]} xxl={size.row[0]} >
                Block height details:
            </Col>
        </Row>
    )
}

export default Block;