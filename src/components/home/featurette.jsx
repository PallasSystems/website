import React from 'react';

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function HomePageFeaturette(properties) {
    return (
        <Container id="HomePageFeaturette" key="HomePageFeaturette">
            {properties.data.map((value, index) =>
                <Row id={value.title + ".Featurette.Row"} key={value.title + ".Featurette.Row"} className="align-items-center">
                    <Col id={value.title + ".Featurette.Row.col.text"}
                         md={7} lg={8} xl={9}
                         className={ (index % 2 === 0) ? '' : 'order-md-2' }>
                        <h2 className="featurette-heading">
                            {value.title}
                            <span className="text-muted"> {value.byline}</span>
                        </h2>
                        {value.description.map(text =>
                            <p key={text + ".Featurette.Row.Text"} className="lead">{text}</p>
                        )}
                    </Col>
                    <Col id={value.title + ".Featurette.Row.col.image"}
                         md={5} lg={4} xl={3} align="center"
                         className={ (index % 2 === 0) ? '' : 'order-md-1' }>
                        <img alt={value.img.alt} src={ value.img.src } />
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default HomePageFeaturette;