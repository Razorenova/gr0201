import React from 'react';

export class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            data_added: "",
            author: ""
        }
    }
    componentDidMount() {
        const formData = new FormData();
        formData.append('id',this.props.match.params.id);
        fetch("http://v90377xk.beget.tech/pre/php/getPost.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.props.changeH1(result.title);
                this.setState({
                        text: result.text
                    }
                )
            })

    }

    render() {
        return (
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {this.state.text}
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}