import React from 'react';

export class Auth extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="container">
                <div className="col-sm-5 mx-auto">
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="login"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="pass"/>
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