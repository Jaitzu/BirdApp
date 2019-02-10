import React, { Component } from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';



class App extends Component {
    constructor(props) {
        super(props);
        console.log("Constructing App");
        this.state={
            fromLocal:''
        }
    }





    render(){





        return (
            <div className="col-md-6">

                <h3> Bird watching notepad</h3>
                <FormContainer />


{/**/}


            </div>

        );

    }
}
export default App;