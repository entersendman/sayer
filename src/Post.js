import React, { Component } from 'react';
//import {Link} from 'react-router-dom'
//import Comment from './components/comments'


class Post extends Component {
	constructor(props) {
		super(props)
		this.state = {
				item: "item1",
				comments: []
		}

	}


	setState() {
		comments: localStorage.getItem()
	}


		render(){
		localStorage.setItem("Posts", JSON.stringify([]))
			let OldPosts = JSON.parse(localStorage.getItem("Posts"))
			OldPosts.push(this.state)
			localStorage.setItem("Posts", JSON.stringify(OldPosts))
			OldPosts = JSON.parse(localStorage.getItem("Posts"))
			OldPosts.push(this.state)
			localStorage.setItem("Posts", JSON.stringify(OldPosts))
			return (

				<div className="container">
					{console.log(JSON.parse(localStorage.Posts))}
				</div>


			);
		}
}

export default Post;


