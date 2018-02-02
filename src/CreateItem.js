import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class CreateItem extends Component {
    constructor(props){
        super(props)
	    this.state = {
		    item: "item1",
		    comments: []
	    }
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    updateItemText(itemText){
        this.setState({item: itemText.target.value})
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {

        }
    }

    addItem(){
        if (this.state.itemText === '') {return}
	    let OldPosts = JSON.parse(localStorage.getItem("Posts"))
	    OldPosts.push(this.state)
	    localStorage.setItem("Posts", JSON.stringify(OldPosts))

        //localStorage.setItem('itemsArr', JSON.stringify(itemsArr))
        this.setState({
	        item: ''
        })

        this.textInput.focus()
    }

    render() {



        return (

            <div className="container">
                <div className="header">
                    <h1>Create new item</h1>
                    <Link to = "/sayer" className="backBtn">&larr;</Link>
                </div>
                <div className="createItemForm">
                <Link to ="/sayer" className="buttonCreate" onClick={this.addItem}>></Link>
                <input type="text"
                       ref={((input) => {this.textInput = input})}
                       placeholder="New item title"
                       className="textInput"
                       value={this.state.itemText}
                       onChange={itemText => this.updateItemText(itemText)}
                       onKeyPress={this.handleKeyPress}
                />
                </div>


            </div>


        );
    }
}

export default CreateItem;
