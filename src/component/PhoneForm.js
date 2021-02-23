import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name : '',
        phone : ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render() {
        return (
            <form>
                <input name="name" placeHolder="name" onChange={this.handleChange} ></input>
                <input name="phone" placeHolder="phone" onChange={this.handleChange}></input>
                <div>
                    {this.state.name} {this.state.phone}
                </div>
            </form>
        );
    }
}


export default PhoneForm;


