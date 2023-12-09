import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

type Props = {}

export default class MyNavBar extends React.Component<Props>{
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Parking Vacancy</Navbar.Brand>
                    </Container>
                </Navbar>
                <br />

            </>
        )
    }
}