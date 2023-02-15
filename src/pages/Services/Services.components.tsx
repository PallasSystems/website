import React, { FC } from 'react';

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { LinkContainer } from 'react-router-bootstrap';

// Services Properties
import { BannerNavBar, Footer, ImageProperty, AutomationSVG, InfrastructureAsCodeSVG } from '../../components';
import {ServicePageProperties, ServiceDetailProperties} from './Services.types';

import { AgileSVG, FailFastSVG, KanbanSVG, MVPSVG, ScrumSVG } from './agile/index';
import { AnalyticSVG } from './analytics/index';
import { AssessSVG, CloudSVG, SupportSVG } from './cloud/index';
import { DataEngSVG } from './dataeng/index';
import { DevSecOpsSVG, ContinuousDeploymentSVG, ContinuousIntegrationSVG, TestingSVG } from './devsecops/index';

function retrieveSVG (title: string, img?: ImageProperty) {

    let result; 
    if (undefined === img && null === img) {
        console.log("retrieveSVG - No Img Attribute for: " + title);
    } else {
        switch(title) {
            case 'Agile':
                result = (<AgileSVG {...img}/>)
                break;
            case 'Asses':
                result = (<AssessSVG {...img}/>)
                break;
            case 'Automation':
                result = (<AutomationSVG {...img}/>)
                break;
            case 'Cloud':
            case 'Cloud Development':
                result = (<CloudSVG {...img}/>)
                break;
            case 'Continuous Deployment':
                result = (<ContinuousDeploymentSVG {...img}/>)
                break;
            case 'Continuous Integration':
                result = (<ContinuousIntegrationSVG {...img}/>)
                break;
            case 'DevSecOps':
                result = (<DevSecOpsSVG {...img}/>)
                break;
            case 'Data Analytics':
                result = (<AnalyticSVG {...img}/>)
                break;
            case 'Data Engineering':
                result = (<DataEngSVG {...img}/>)
                break;
            case 'Fail Fast':
                result = (<FailFastSVG {...img}/>)
                break;
            case 'Infrastructure As Code':
                result = (<InfrastructureAsCodeSVG {...img}/>)
                break;
            case 'Kanban':
                result = (<KanbanSVG {...img}/>)
                break;
            case 'Minimum Viable Product':
                result = (<MVPSVG {...img}/>)
                break;
            case 'Scrum':
                result = (<ScrumSVG {...img}/>)
                break;
            case 'Support':
                result = (<SupportSVG {...img}/>)
                break;
            case 'Testing':
                result = (<TestingSVG {...img}/>)
                break;
            default:
                console.log("retrieveSVG - Unable to process icon: " + title);
                break;
        }
    }

    return result;
}

function calcNumSectionsForMed (sections?: ServiceDetailProperties[]) {

    let result = 12;

    if (undefined !== sections && null !== sections) {
        if (sections.length > 4) {
            result = 3;
        } else if (sections.length > 3) {
            result = 2;
        }
    }

    return result;
}

const ServiceBulletPointSection: FC<ServiceDetailProperties> =({ title, img, link, description, thumbnail }) => {
    
    const detail = {
        "title": title,
        "link": link,
        "description": description,
        "img": img
    };
    
    const values = undefined === thumbnail || null == thumbnail ? detail : thumbnail;

    return (
        <Col id={"Service.Container.Section.Col." + values.title } align="center">
            <LinkContainer to={undefined === link || null === link ? '' : link} key={title + ".col.linkContainer"} >
                <a key={"Service.Container.Section.Col.a." + values.title} href={link} className="text-dark">
                    { retrieveSVG(values.title, values.img) }
                    <h2>{values.title}</h2>
                    { values.description.map(( text: string, key: number) =>
                        <p key={"Service.Container.Section.Col.a." + values.title + ".p." + key}>{text}</p>
                    )}
                </a>
            </LinkContainer>
        </Col>
    );
};

const ServicesPage: FC<ServicePageProperties> = ({ footerProps, serviceProps, navBarProps }) => {

    return (
        <main role={"main"} >
            <BannerNavBar {...navBarProps}/>
            <Container fluid id={"Service.Container"} className={"content"}>
                { undefined === serviceProps.img || null === serviceProps.img ? 
                    <Row  className={"content-row"}>
                        <h2 id="Service.Container.Row.Description.title">{serviceProps.title}</h2>
                        { serviceProps.description.map(( text: string, key: number) =>
                            <p key={"Service.Container.Row.Description.p." + key} className="lead">{text}</p>
                        )}
                    </Row> :
                    <Row className={"content-row"}>
                        <Col id="Service.Container.Row.Description.title.Img" sm={12} md={4} lg={3} xl={3} xxl={3} className="float-start pt-4 pb-2 px-2" >
                            <img {...serviceProps.img} />
                        </Col>
                        <Col id="Service.Container.Description.Row.Col.Text" sm={12} md={8} lg={9} xl={9} xxl={9}>
                        <h2 id="Service.Container.Row.Description.title">{serviceProps.title}</h2>
                            { serviceProps.description.map(( text: string, key: number) =>
                                <p key={"Service.Container.Row.Description.p." + key} className="lead">{text}</p>
                            )}
                        </Col> 
                    </Row>
                }
                <Row sm={2} md={calcNumSectionsForMed(serviceProps.items)} align="center">
                    { undefined === serviceProps.items || null == serviceProps.items ? null :
                        serviceProps.items.map( (section: ServiceDetailProperties, index: number) => { 
                            return (<ServiceBulletPointSection key={index} { ...section } />) 
                        })    
                    }
                </Row>
            </Container>
            <Footer {...footerProps} />
        </main>
    )
};

export { ServicesPage };