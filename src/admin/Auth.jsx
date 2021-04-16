import React from 'react';

export class Auth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: ""
        }
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }
    handlerInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    handlerSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append( "email",this.state.email) ;
        formData.append( "pass",this.state.pass) ;
        fetch( "http://v90377xk.beget.tech/pre/php/handlerAuth.php", {
        method: "POST",
        body: formData

        })
            .then(response=>response.json())
            .then(result=>console.log(result));
    }
    render() {
        return (
            <div className="container">
                <div className="col-sm-5 mx-auto">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <input value={this.state.email} onChange={this.handlerInput} name="email" type="text" className="form-control" placeholder="login"/>
                        </div>
                        <div className="mb-3">
                            <input value={this.state.pass} onChange={this.handlerInput} name="pass" type="password" className="form-control" placeholder="pass"/>
                        </div>
                        <div className="mb-3 text-center">
                            <input type="submit" value="Войти" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}