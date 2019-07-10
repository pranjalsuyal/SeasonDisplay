import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component{

    state={lat:null , errorMessage:''};

    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude});
            },
            err=> {
                this.setState({errorMessage:err.message});
            }
        );
    }

    render(){
        if(this.state.lat && !this.state.errorMessage){
            return(
                <div><SeasonDisplay lat={this.state.lat}/></div>
            );
        }
        if(!this.state.lat && this.state.errorMessage){
            return(
                <div>Error: {this.state.errorMessage}</div>
            );
        }
        return(
            <div> <Spinner text='Waiting for your Location' /> </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);