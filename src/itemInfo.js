import React from 'react'
import {Link} from 'react-router-dom'
import Comment from './components/comments'

class itemInfo extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			Post: {
				item: "title",
				comments: []
			},
			index: null,
			commentText: ''
		}
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.addComment = this.addComment.bind(this)
	}
	componentWillMount() {
		let index = this.props.match.params.id - 1
		let post = JSON.parse(localStorage.getItem('Posts'))[index]
		this.setState({
			Post: post,
			index: index
		})
	}
	updateCommentText(commentText){
		this.setState({commentText: commentText.target.value})
	}

	handleKeyPress = event => {
		if (event.key === 'Enter') {
		}
	}
	addComment(){
		const { Post } = this.state;
		if (this.state.commentText === '') {return}
		Post.comments.push(this.state.commentText)
		var AllPosts = JSON.parse(localStorage.getItem('Posts'))
		AllPosts[this.state.index] = Post
		localStorage.setItem("Posts", JSON.stringify(AllPosts))
		this.setState({
			commentText: '',
			Post: Post
		})
		this.commentInput.focus()
	}
	getRandomColor = () => {
		var letters = '0123456789ABCDEF';
		var color = '#';

		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}

		return color;
	}


	render() {
		const { Post } = this.state;

		var comments = () => {
			var commentText = []
			for (let i = 0; i< Post.comments.length; i++) {
				commentText.push(<div key={i} className="commentTextAndAvatar">
					<div className="commentAvatar" style={{backgroundColor: this.getRandomColor()}}></div>
					<Comment key={i} text={Post.comments[i]} />
				</div>)
			}
			return commentText
		}


		return (
			<div className="container">
				<div className="header" >
					<h1>{Post.item}</h1>
					<Link to = "/sayer" className="backBtn">&#8592;</Link>
				</div>
				{comments()}
				<div className="inputWrapper">
					<div className="createCommentForm">
						<div  className="buttonCreate" onClick={this.addComment}>></div>
						<input type="text"
						       ref={((input) => {this.commentInput = input})}
						       placeholder="New item title"
						       className="commentInput"
						       value={this.state.commentText}
						       onChange={commentText => this.updateCommentText(commentText)}
						       onKeyPress={this.handleKeyPress}
						/>
					</div>
				</div>
			</div>
		)
	}
}


export default itemInfo