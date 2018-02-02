import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            AllPosts: []
        }
    }

    componentWillMount() {
        const str = localStorage.getItem('Posts');
        let parsedStr = null;
        if (!str) {
	        localStorage.setItem("Posts", JSON.stringify([]))
        } else {
            parsedStr = JSON.parse(str);
        }
        this.setState({
           AllPosts: parsedStr || []
        });

    }
    deleteItem(index) {
	    let OldPosts = JSON.parse(localStorage.getItem("Posts"))
	    OldPosts.splice(index-1, 1)
	    localStorage.setItem("Posts", JSON.stringify(OldPosts))
	    this.setState({
		    AllPosts: OldPosts
	    })
    }
  render() {
      const { AllPosts } = this.state;
      if(AllPosts !== null){

	      const getLinks = () => {
		      const items = []
              const PostsIndex = Object.keys(AllPosts)
		      for(let i = 1 ;i <= PostsIndex.length; i++){
			      const oneItem = (
			      	<div key={i} className="item">

			          <Link to = {"/sayer/show/" + i}
			                id={i} key={i}>

                      { AllPosts[i-1].item.length > 25 ? AllPosts[i - 1].item.slice(0, 25)+'...' : AllPosts[i - 1].item}

                      </Link>
						<div className="actions">
				        <span>
					        { AllPosts[i - 1].comments.length  }
				        </span>

				        <div className="deleteBtn" onClick={(() => this.deleteItem(i))}>
				        Delete
				        </div>
						</div>
			        </div>
                  )

			      items.push(oneItem)

		      }
		      return items
	      }
	      var items = getLinks()
      }
    return (

        <div className="container">
            <div className="headerMain">
                <h1>Sayer</h1>
                <p>World's most used time waster</p>
            </div>
                {items}
            <div className="buttonAddContainer">
                <Link to = "/sayer/create" className="buttonAdd"  >+</Link>
            </div>
        </div>


    )
  }
}

export default Main;
