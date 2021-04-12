import React from 'react';

function PreviewPost(){
    return(
        <div className="post-preview">
            <a href="post.html">
                <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
                </h3>
            </a>
            <p className="post-meta">Posted by
                <a href="#">Start Bootstrap</a>
                on September 24, 2019</p>
        </div>

    )
}
export class PostList extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch('https://v90377xk/beget.tech/pre/php/getPosts.php')
            .then(response=>response.json ())
            .then(result=>{
                this.setState({
                    posts: result.map(item=><PreviewPost/>)
                    }
                )
            })
    }

    render(){
        return(

            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        {this.state.posts}
                    </div>
                </div>
            </div>


        )
    }
}