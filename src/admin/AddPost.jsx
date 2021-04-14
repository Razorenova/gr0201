import React from 'react';

export class AddPost extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            author: ""
        }
        this.handlerInput = this.handlerInput.bind(this);

    }
    componentDidMount() {
        this.props.changeH1("Добавление статьи")
    }
handlerInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState( {
            [name]: value
        })

}
    render() {
        return(
            <div className="container">
                <div className="col-sm-5 mx-auto">
                    <form action="">
                        <div className="mb-3">
                            <input value={this.state.title} onChange={this.handlerInput} name="title" type="text" placeholder="Заголовок" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <textarea value={this.state.text} onChange={this.handlerInput} name="text" placeholder="Статья" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <input value={this.state.author} onChange={this.handlerInput} name="author" type="text" placeholder="Автор" className="form-control"/>
                        </div>
                        <div className="mb-3 text-center">
                            <input type="submit" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}