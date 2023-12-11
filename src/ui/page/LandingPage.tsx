import React from "react";
import MyNavBar from "../component/MyNavBar";
import SearchBar from "../component/SearchBar";
import ResultTable from "../component/ResultTable";
import { Welcome } from "../../data/CarParkInfoData";
import { fetchCarParkInfo } from "../../api/getCarParkInfo";

type Props = {
    
}

type State = {
    fetchInfo: Welcome | undefined;
    vType: string
    parkAddress: string;
}

export default class LandingPage extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            fetchInfo: undefined,
            vType: "privateCar",
            parkAddress: ''
        }
    }

    handleSelectionStateChange = (newState: string) => {
        this.setState(
            {
                vType: newState
            }
        )
        console.log(newState)
        console.log(this.state.vType)
    }

    handleAddressStateChange = (newState: string) => {
        this.setState(
            {
                parkAddress: newState
            }
        )
        console.log(newState)
        console.log(this.state.parkAddress)
    }

    getCarParkInfo = (info: Welcome) => {
        this.setState({
            fetchInfo: info
        })
    }

    componentDidMount(): void {
        fetchCarParkInfo(this.getCarParkInfo);
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if(prevState !== this.state){
            console.log(prevState.vType + this.state.vType)
            console.log(prevState.parkAddress + this.state.parkAddress)
        }
    }



    render(){
        return(
            <>
                <MyNavBar />
                <SearchBar handleSelectionStateChange={this.handleSelectionStateChange} handleAddressStateChange={this.handleAddressStateChange}/>
                <ResultTable fetchInfo={this.state.fetchInfo} vehicleType={this.state.vType} parkAddress={this.state.parkAddress}/>
            </>
        )
    }
}