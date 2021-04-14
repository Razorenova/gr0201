import React from 'react';

export class AddPost extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="container">
                <div className="col-sm-5 mx-auto">
                    <form action="">
                        <div className="mb-3">
                            <input type="text" placeholder="Заголовок"/>
                        </div>
                        <div className="mb-3">
                            <textarea placeholder="Статья"></textarea>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Автор"/>
                        </div>
                        <div className="mb-3">
                            <input type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}