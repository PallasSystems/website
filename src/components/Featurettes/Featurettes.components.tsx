import React, { FC } from 'react';

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import {FeaturetteProperty} from './Featurettes.types';

const Featurettes: FC<FeaturetteProperty[]> = (items) => {
    return (
        <Container id="Featurette">
            { Object.entries(items).map( (value: [key: string, feature: FeaturetteProperty], index: number) => { 
                return (
                    <Row id={"Featurette.Row." + index} key={"Featurette.Row." + index} className="align-items-center">
                        <Col id={"Featurette.Row.col.text." + index}  md={7} lg={8} xl={9} className={ (index % 2 === 0) ? '' : 'order-md-2' }>
                            <h2 className="featurette-heading">
                                {value[1].title}
                                { null === value[1] ? null : <span className="text-muted"> {value[1].byline}</span> }
                            </h2>
                            { value[1].description.map( (text: string, descriptionIndex: number) => {
                                return (<p key={"Featurette.Row.Text." + index + "." + descriptionIndex} className="lead">{text}</p>)
                              })
                            }
                        </Col>
                        
                        <Col id={"Featurette.Row.col.image." + index} key={"Featurette.Row.col.image." + index} md={5} lg={4} xl={3} align="center" className={ (index % 2 === 0) ? '' : 'order-md-1' }>
                            { undefined === value[1].img || null === value[1].img ? null : 
                                <img alt={value[1].img.alt} src={ value[1].img.src } />
                            }
                        </Col>
                    </Row>
                    )
                })
            }
        </Container>
    );
};

export { Featurettes };