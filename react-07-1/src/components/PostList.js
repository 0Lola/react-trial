import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions';

class PostList extends React.Component {

    render() {
        const posts = this.props.posts.map(e =>
            <div key={e.id} className="card">
                <div class="content">
                    <div className="header">{e.title}</div>
                </div>
                <div className="content">
                    <div className="description">
                        {e.body}
                    </div>
                </div>
            </div>)

        return <>
            <h1>Posts</h1>
            <div className="ui cards">{posts}</div>
        </>
    }

    componentDidMount() {
        // 當畫面顯示，dispatch action 'getPosts'
        this.props.getPosts();
    }

}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { getPosts })(PostList);
