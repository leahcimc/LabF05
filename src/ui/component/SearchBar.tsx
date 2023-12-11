import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./SearchBar.css";




type Props = {
    handleSelectionStateChange: (newState: string) => void
    handleAddressStateChange: (newState: string) => void
}

type State = {
    vehicleType: String;
}

export default class SearchBar extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            vehicleType: "privateCar"
        }
    }


    handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

        this.props.handleSelectionStateChange(event.target.value);
        // this.setState(
        //     {
        //         vehicleType: event.target.value
        //     }
        // )
        console.log(event.target.value);
    }

    handleAddressStateChange = (event) => {
        this.props.handleAddressStateChange(event?.target.value);
        console.log(event?.target.value);
    }

    render() {
        return (
            <>
                <div className="formBox">
                    <Container>
                        <Row>

                            <Col sm={4}>
                                <Form.Label htmlFor="inputPassword5">District</Form.Label>
                            </Col>

                            <Col sm={8}>
                                <Form.Control onChange={this.handleAddressStateChange}
                                    type="text"
                                    id="inputPassword5"
                                    placeholder="e.g. Kwun Tong"
                                />
                            </Col>

                        </Row>

                        <Row>

                            <Col sm={4}>
                                <Form.Label htmlFor="inputPassword5">Vehicle Type</Form.Label>
                            </Col>

                            <Col sm={8}>
                                <Form.Select onChange={this.handleSelectChange}>
                                    <option value="privateCar">Private Car</option>
                                    <option value="LGV">LGV</option>
                                    <option value="HGV">HGV</option>
                                    <option value="coach">Coach</option>
                                    <option value="motorcycle">Motorcycle</option>
                                </Form.Select>
                            </Col>

                        </Row>

                        <Row>
                            <Col sm={1}>
                                <Button variant="primary">Search</Button>{' '}
                            </Col>
                        </Row>

                    </Container >
                </div>
            </>
        )
    }
}