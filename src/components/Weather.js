import React, {Component} from 'react';


class Weather extends Component {
    constructor(props){
        super(props);
        
    }
    render (){
        return (
            <div className="container">
                
                {
                    this.props.temperature && <p className="weather_F">
                        <span className="weather_value">  {this.props.temperature} </span>
                    °F</p>
                }
                {
                    this.props.country && this.props.city && <p className="weather_country"> 
                        <span className="weather_value">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                {
                    this.props.humidity && <p className="weather_key">Humidity: 
                        <span className="weather_value">  {this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.description && <p className="weather_key">Condition:  
                        <span className="weather_value">  {this.props.description}</span>
                    </p>
                }
                {
                    this.props.error && <p className="weather_error">{this.props.error}</p>
                }
                {/* <table class="table table-condensed">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                </tr>
                </tbody>
            </table> */}
            </div>
        )
    }
}


export default Weather;
