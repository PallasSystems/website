import React from 'react';

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { featuretteData } from './data';

import { ReactComponent as AgileSVG } from '../services/agile/agile.svg';
import { ReactComponent as CloudSVG } from '../services/cloud/digitaltransformation.svg';
import { ReactComponent as DevSecOpsSVG } from '../services/devsecops/devsecops.svg';

function HomePageFeaturette() {
    return (
        <Container id="HomePageFeaturette" key="HomePageFeaturette">
            {featuretteData.map(data =>
                <Row id={data.title + ".Featurette.Row"} key={data.title + ".Featurette.Row"}>
                    <Col id={data.title + ".Featurette.Row.col.text"}
                         md={7} lg={8} xl={9}
                         className={data.className}>
                        <h2 className="featurette-heading">
                            {data.title}
                            <span className="text-muted"> {data.byline}</span>
                        </h2>
                        {data.description.map(text =>
                            <p key={text + ".Featurette.Row.Text"} className="lead">{text}</p>
                        )}
                    </Col>
                    <Col id={data.title + ".Featurette.Row.col.image"}
                         md={5} lg={4} xl={3} align="center"
                         className={data.img.className}>
                        {data.img.src === '../services/agile/agile.svg' ? <AgileSVG /> : null}
                        {data.img.src === '../services/cloud/digitaltransformation.svg' ? <CloudSVG /> : null}
                        {data.img.src === '../services/devsecops/devsecops.svg' ? <DevSecOpsSVG /> : null}
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default HomePageFeaturette;