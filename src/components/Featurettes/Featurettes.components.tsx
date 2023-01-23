import React, { FC } from 'react';

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import {FeaturetteItems, FeaturetteProperty} from './Featurettes.types';

const Featurettes: FC<FeaturetteItems> = ({ items }) => {
    return (
        <Container id="Featurette">
            { items.map( (feature: FeaturetteProperty, index: number) => { 
                return (
                    <Row id={"Featurette.Row." + index} key={"Featurette.Row." + index} className="align-items-center">
                        <Col id={"Featurette.Row.col.text." + index}  md={7} lg={8} xl={9} className={ (index % 2 === 0) ? '' : 'order-md-2' }>
                            <h2 className="featurette-heading">
                                {feature.title}
                                <span className="text-muted"> {feature.byline}</span>
                            </h2>
                            { feature.description.map( (text: string, descriptionIndex: number) => {
                                return (<p key={"Featurette.Row.Text." + index + "." + descriptionIndex} className="lead">{text}</p>)
                              })
                            }
                        </Col>
                        <Col id={"Featurette.Row.col.image." + index} key={"Featurette.Row.col.image." + index} md={5} lg={4} xl={3} align="center" className={ (index % 2 === 0) ? '' : 'order-md-1' }>
                            <img alt={feature.img.alt} src={ feature.img.src } />
                        </Col>
                    </Row>
                    )
                })
            }
        </Container>
    );
};

export { Featurettes };