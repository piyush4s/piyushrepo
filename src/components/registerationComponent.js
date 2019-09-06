import React from 'react';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleSubmit = (e) => {
        //todo: store the date in state object, validate the data
        e.preventDefault();
        //validate form
        if(this.validateForm()) {
            alert('Validated successfully');
            let fields = {
                name: '',
                email: '',
                phone: '',
                password: ''
            }
            this.setState({
                fields: fields
            })

            localStorage.setItem('login', true);
        }
    }

    validateForm = () => {
        //check name's value
        //check email's value
        //check phone's value
        //check password value

        let fields = this.state.fields;
        let isValid = true;
        let errors = {};

        if(!fields['name']){
           isValid = true;
           errors['name'] = 'Please enter your name';
        }

        if(fields['name'] && !fields['name'].match(/^[a-zA-Z ]*$/)) {
            isValid = false;
            errors['name'] = 'Please enter name in a proper format';
        }

        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(fields.email === '' || !emailPattern.test(fields.email)) {
            isValid = false;
            errors['email'] = 'Please enter your email in a proper format';
        }

        //TODO: add validations for phone number and password

        this.setState({
            errors: errors
        })

        return isValid;
    }

    handleChange = (e) => {
        let formField = this.state.fields;
        formField[e.target.name] = e.target.value;
        this.setState({
            fields: formField
        });
    }
    

    render() {
        return (
            <section className="container">
                <h3>Register</h3>
                <section className="row">
                    <form name="registerForm" onSubmit={this.handleSubmit} noValidate>
                        <section className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" value={this.state.fields.name} onChange={this.handleChange}/>
                            <span className="errorMsg">{this.state.errors.name}</span>
                        </section>
                        <section className="form-group">
                            <label>Email ID</label>
                            <input type="text" name="email" className="form-control" value={this.state.fields.email} onChange={this.handleChange}/>
                            <span className="errorMsg">{this.state.errors.email}</span>
                        </section>
                        <section className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" name="phone" className="form-control" value={this.state.fields.phone} onChange={this.handleChange}/>
                        </section>
                        <section className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" value={this.state.fields.password} onChange={this.handleChange}/>
                        </section>
                        <section className="form-group">
                            <button className="btn btn-success">Submit</button>
                        </section>
                    </form>
                </section>
                
            </section>
        )
    }
}

export default RegisterComponent;