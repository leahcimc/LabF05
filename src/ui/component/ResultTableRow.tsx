import React from "react";
import Button from 'react-bootstrap/Button';
// import * as mockData from "../../mockData/infoMock.json";
import { Result } from "../../data/CarParkInfoData";
import deadImg from "../../img/deadImg.png";
import noImg from "../../img/noImg.png";


type Props = {
    data: Result;
    vehicleType: string;
}

// type State = {}

export default class ResultTableRow extends React.Component<Props>{
    matchType = `this.props.data.${this.props.vehicleType}?.space`

    constructor(props: Props) {
        super(props);
        console.log(this.props.vehicleType);
        console.log(this.matchType);
        
    }


    render() {
        return (
            <>
                <tr>
                    <td>
                        <img src={
                            this.props.data.renditionUrls?.square ?
                                this.props.data.renditionUrls?.square :
                                this.props.data.renditionUrls?.carpark_photo ?
                                    this.props.data.renditionUrls?.carpark_photo : noImg
                        }
                            onError={e =>
                                e.currentTarget.src = deadImg
                            }
                            width={150} height={150}
                        />
                    </td>
                    <td>
                        {this.props.data.name}
                    </td>
                    <td>
                        {this.props.data.displayAddress}
                    </td>
                    <td>
                        {this.props.data.privateCar?.space}
                    </td>
                    <td>
                        <Button variant="primary" href={`https://www.google.com/maps/preview/@${this.props.data.latitude},${this.props.data.longitude},18z`}>Map</Button>{' '}
                    </td>
                </tr>
            </>
        )
    }
}