import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';


const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";
class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
 

  getWeather = async (e, aosd) => {
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      e.preventDefault();
      // console.log(`==============================`,country, aosd)   
      try {
        // https://openweathermap.org/data/2.5/weather?id=1581130&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
        const response = await api_call.json();
        console.log(response)
        if (city && country) {
          this.setState({
            temperature: response.main.temp,
            city: response.name,
            country: response.sys.country,
            humidity: response.main.humidity,
            description: response.weather[0].description,
            error: ""
          })
        } else {
          this.setState({
            error: "Please fill all fields..."
          })
        }
      } catch (error) {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Can not find out this city..."
        })
      }
    }
    render (){ 
      
        return (
            <div className="wrapper">
                <div className="main">
                
                    <div className="container">
                        
                        <div className="row">
                        
                            <div className="text-center title-container">
                                <Title />
                            </div>

                            <div className="col-xs-4 form-container">
                              <div className="text-center">
                                <Form pp={this.getWeather} />  
                                    <Weather 
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                              </div>
                            </div>
                                                
                        </div>
                        
                    </div>
                
                </div>
            </div>
        )
    }
}

export default App;
