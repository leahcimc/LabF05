import React from "react";
import Table from 'react-bootstrap/Table';
import ResultTableRow from "./ResultTableRow";
// import * as mockData from "../../mockData/infoMock.json";
import "./ResultTable.css";
import { Result, Welcome } from "../../data/CarParkInfoData";

type Props = {
    fetchInfo: Welcome | undefined;
    vehicleType: string
}

type State = {
    vehicleType: string
}

export default class ResultTable extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            vehicleType: "privateCar"
        }
    }

    render() {
        return (
            <>
                <div className="tableBox">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Total Vacancy</th>
                                <th>Google Map</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // mockData.results.map(
                                //     (item) => (
                                //         <ResultTableRow data={item} />
                                //     )
                                // )
                                this.props.fetchInfo?.results.map(
                                    (result: Result) => (
                                            <ResultTableRow data={result} vehicleType={this.props.vehicleType} key={result.park_Id}/>
                                        )
                                )
                            } 
                            
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}