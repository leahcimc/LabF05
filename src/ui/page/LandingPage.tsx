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
}

export default class LandingPage extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            fetchInfo: undefined,
            vType: "privateCar"
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

    getCarParkInfo = (info: Welcome) => {
        this.setState({
            fetchInfo: info
        })
    }

    componentDidMount(): void {
        fetchCarParkInfo(this.getCarParkInfo);
    }


    render(){
        return(
            <>
                <MyNavBar />
                <SearchBar handleSelectionStateChange={this.handleSelectionStateChange}/>
                <ResultTable fetchInfo={this.state.fetchInfo} vehicleType={this.state.vType}/>
            </>
        )
    }
}