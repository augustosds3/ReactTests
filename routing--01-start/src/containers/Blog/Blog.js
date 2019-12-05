import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
        auth: false
    }

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/posts">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path = "/" exact render = {() => <h1>Route</h1>}/>
                    <Route path = "/" render = {() => <h1>Route 2</h1>}/>*/}

                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render = {()=> <h1>Not found</h1>}/>
                    {{/* <Redirect from = "/" to = "/posts"/> */}}
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;