import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

import { NavbarProperty, NavbarLinkProperty } from './BannerNavBar.types';
import { PallasSVG } from '../Common/index';

const BannerNavBar: FC<NavbarProperty> = ({brandName, brandImg, items}) => {
    return (  
        <header>
            <Navbar expand="sm" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand id={"BannerNavBar.Brand.Link.Logo"} className="text-light">
                            <PallasSVG {...brandImg} />
                            {' '}
                        </Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to="/">    
                        <Navbar.Brand id={"BannerNavBar.Brand.Link.Logo.text"} className="text-light">{brandName}</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle id="responsive-navbar-btn" aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Container fluid />
                        <Nav className="me-auto">
                            { items.map( (link: NavbarLinkProperty, index: number) => { 
                                return (
                                    <LinkContainer key={"BannerNavBar.Link." + index} to={ link.path }>
                                        <Nav.Link key={"BannerNavBar.Link.Text." + index} id={"BannerNavBar.Link.Text." + index}>{link.text}</Nav.Link>
                                    </LinkContainer>
                                )
                              })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export { BannerNavBar };