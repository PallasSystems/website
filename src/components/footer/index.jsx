import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Contact us specific icons
import { Envelope, Telephone } from 'react-bootstrap-icons';
// Social Media specific icons
import { Facebook, Github, Twitter } from 'react-bootstrap-icons';

function PallasFooter() {
    return (
            <footer className="footer mt-auto py-4 bg-dark text-light">
                <Container fluid>
                    <Row>
                        <Col className={"mx-auto mb-md-0 mb-4"} md={4} lg={3} xl={3}>
                            <h5 className={"text-uppercase fw-bold mb-4"}>Contact</h5>
                            <a href="mailto:info@pallas.uk">
                                <Envelope /> info@pallas.uk
                            </a>
                            <p>
                                <Telephone /> +44 7861 530488
                            </p>
                        </Col>
                        <Col className={"mx-auto mb-md-0 mb-4"} md={4} lg={3} xl={3}>
                            <div>Get connected with us on social networks</div>
                            <div>
                                <a className="me-4 text-reset" href="https://www.facebook.com/groups/350073883439443">
                                    <Facebook />
                                </a>
                                <a className="me-4 text-reset" href="https://twitter.com/PallasUK">
                                    <Twitter />
                                </a>
                                <a className="me-4 text-reset" href="https://github.com/PallasUK">
                                    <Github />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
    );
}

export default PallasFooter;
