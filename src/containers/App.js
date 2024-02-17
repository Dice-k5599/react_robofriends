import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import { robots } from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor() {
        super();
        this.state = {  // state is something that could change
            robots: robots,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     // we could use this fetch function 
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=> response.json())
    //     .then(users => this.setState( {robots: users }))
    // }

    onSearchChange = (event) => {
        //need to do this instead of this.state.searchfield = value
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            const userInput = searchfield;
            if (isNaN(userInput))
                return robot.name.toLowerCase().includes(userInput.toLowerCase());
            else 
            {
                return userInput.toString() === "" ? true : 
                robot.number.toString() === userInput.toString();
            }
        })
        if (robots.length === 0) {
            return (
            <div className='tc'>
                <h1>Loading</h1>
            </div>
            );
        } else {
            return (    
                <div className='tc'>
                    <h1><strong>Lakers Index</strong></h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    {" "}
                    {/* you could wrap a component with another component:
                    in this case CardList is wrapped by Scroll */}
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;