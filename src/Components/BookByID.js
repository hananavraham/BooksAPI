import React, { Component } from 'react'
import axios from 'axios'
import Book from './Book'
import MdSave from 'react-icons/lib/md/save'


class BookByID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing:true,
            book:null
        }

        this.search = this.search.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderUI   = this.renderUI.bind(this);
    }
    
    
    search() {
      axios.post (`https://book-payments.herokuapp.com/getBookByID`, {
        id: this.bookID.value
      })
      .then(response =>{
        console.log(response.data[0]);
        //console.log(response.date.discount);
        this.setState({
            editing:false,
            book:response.data[0]
        })
      })
      .catch(err =>{
        console.log(err);
      });   
  }

    renderForm() {
    return (
       <div>
        <form>
        <label>Book ID:</label>
          <input ref={
            (input) => {
              this.bookID=input;
            }
          }/>
          <button type="button"><MdSave onClick={this.search}/></button>        
        </form>
      </div>
    )
  }

  renderUI() {
    return (          
      <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
            <h5 className="card-title">{this.state.book.name}</h5>
            <p className="card-text">ID: {this.state.book.id}</p>
            <p className="card-text">Type: {this.state.book.type}</p>
            <p className="card-text">Price: {this.state.book.price}</p>
            <p className="card-text">MemberDiscunt: {this.state.book.discount.memberDiscunt}</p>
            <p className="card-text">RegularDiscunt: {this.state.book.discount.regularDiscunt}</p>
        </div>
      </div>
      );
  }


  render() {
      return (
        this.state.editing ? this.renderForm() : this.renderUI()
      )
  }
}
export default BookByID