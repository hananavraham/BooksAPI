import React, { Component } from 'react'
import axios from 'axios'
import Book from './Book'
import MdSave from 'react-icons/lib/md/save'


class BookByPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing:true,
            books: []
        }

        this.search = this.search.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderUI   = this.renderUI.bind(this);
    }
    
    
    search() {
      axios.get (`https://book-payments.herokuapp.com/getBooksByPrice/
          ${this.min.value}/${this.max.value}`)
      .then(response =>{
        console.log(response.data);
        //console.log(response.date.discount);
        this.setState({
            editing:false,
            books:response.data
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
        <label>Min: </label>
          <input ref={
            (min) => {
              this.min=min;
            }
          }/>
          <label>Max: </label>
           <input ref={
            (max) => {
              this.max=max;
            }
          }/>
          <button type="button"><MdSave onClick={this.search}/></button>        
        </form>
      </div>
    )
  }

  
  eachBook (book,i) {
    return (          
      <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
            <h5 className="card-title">{book.name}</h5>
            <p className="card-text">ID: {book.id}</p>
            <p className="card-text">Type: {book.type}</p>
            <p className="card-text">Price: {book.price}</p>
            <p className="card-text">MemberDiscunt: {book.discount.memberDiscunt}</p>
            <p className="card-text">RegularDiscunt: {book.discount.regularDiscunt}</p>
        </div>
      </div>
      )
  }


  renderUI() {
    return (          
       this.state.books.map(this.eachBook)
      );
  }


  render() {
      return (
        this.state.editing ? this.renderForm() : this.renderUI()
      )
  }
}
export default BookByPrice