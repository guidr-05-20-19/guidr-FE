import React from 'react';

class TripForm extends React.Component{
    state = {
        trip: {
            title: '',
            duration: '',
            description: '',
            trip_type: '',
            location: '',
            // professional: false, 
            // date: '',
            // id: '',
            // user_id: 2
        }
    }

changeHandler = e => {
    this.setState ({
        trip: {
        ...this.state.trip,
        [e.target.name]: e.target.value
        }
    })
}


submitHandler = e => {
    e.preventDefault();
    const newTrip = {
        ...this.state.trip,
            date: '10/10/2010',
            id: Date.now()

    } 
    this.props.addTrip(newTrip)
    // .then(() => {
    //     this.props.history.push('/protected')
    // })

    this.setState({
        trip: {
            title: '',
            duration: '',
            description: '',
            trip_type: '',
            location: '',
            // professional: false, 
            // date: '',
            // id: '',
            // user_id: 2
        }
    });

    console.log(newTrip)

};

    render(){
        return(
            <div className="tripform">
            <form onSubmit={this.submitHandler}>
                <label for = "title">Trip Title:</label>
                <input
                    type = "text"
                    name = "title"
                    placeholder= "Eagle Rock"
                    value = {this.state.trip.title}
                    onChange= {this.changeHandler}
                 />
                <label for = "duration">Duration:</label>
                <input
                    type = "text"
                    name = "duration"
                    value = {this.state.trip.duration}
                    onChange = {this.changeHandler}
                />
                <label for ="trip_type">trip_type:</label>
                <input 
                    type = "text"
                    name = "trip_type"
                    value = {this.state.trip.trip_type}
                    onChange= {this.changeHandler}
                />
                 <label for ="location">location</label>
                <input 
                    type = "text"
                    name = "location"
                    value = {this.state.trip.location}
                    onChange= {this.changeHandler}
                />
                <label for = "password">Description: </label>
                <input
                    type= "text"
                    name= "description"
                    value= {this.state.trip.description}
                    onChange= {this.changeHandler}
                />
                <button>Add Trip</button>
            </form>
            </div>
        )

    }

}

export default TripForm