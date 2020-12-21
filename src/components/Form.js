import React, {Component} from 'react';


class Form extends Component {
    constructor(props){
        super(props);

    }
    render (){
        return (
            <form onSubmit = {(e) => {
                e.preventDefault();
                console.log('==================================',this.props.uuu);
                this.props.pp(e)
                // pp = (pppppp)=>this.getWeather(pppppp)
                // pp(e)
            }}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/> <br/>
                <button className="btn btn-warning btn-xs buttonn">Get Weather</button>
            </form>
        )
    }
}

export default Form;
