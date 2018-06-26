import React, {Component} from 'react'
import Book from './Book'
import MdAdd from 'react-icons/lib/md/add'


class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
      ]
    }
    this.eachBook   = this.eachBook.bind(this);
    this.update     = this.update.bind(this);
    this.delete     = this.delete.bind(this);
    this.add        = this.add.bind(this);
    this.nextID     = this.nextID.bind(this);
    this.addBook    = this.addBook.bind(this);
  }


  addBook(){
    this.add("yossi","action",150,100,160);
  }


  add(name,type,price,memberDiscunt,regularDiscunt) {
    this.setState(prevState => ({
      books: [
      ...prevState.books,
      {
          id: this.nextID(),
          name: name,
          type: type,
          price: price,
          discount:{memberDiscunt:memberDiscunt,regularDiscunt:regularDiscunt}
      }]
    }))
  }

  nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  }

  componentDidMount() {
     const url = "https://book-payments.herokuapp.com/getAllBooks";
     fetch(url)
     .then((res) => {
        return res.json();
     })
     .then((data) => {
        var self=this;
        data.map((data) => {
            console.log('book')
            self.add(data.name, data.type,data.price,data.discount.memberDiscunt,data.discount.regularDiscunt);
        })
     })
}


  update(newBook, i) {
    this.setState(() => ({
      books: this.state.books.map(
        (book) => (book.id !== i) ? book : {...book, name: newBook}
      )
    }))
  }    

  delete(id) {
      //finish yourself- this should be called by onDelete
  }

  eachBook (book,i) {
    return (          
      <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
          <Book key={'book'+i} index={i} onChange={this.update}>
            <h5 className="card-title">{book.name}</h5>
            <p className="card-text">ID: {book.id}</p>
            <p className="card-text">Type: {book.type}</p>
            <p className="card-text">Price: {book.price}</p>
            <p className="card-text">MemberDiscunt: {book.discount.memberDiscunt}</p>
            <p className="card-text">RegularDiscunt: {book.discount.regularDiscunt}</p>
          </Book>
        </div>
      </div>
      )
  }

  render() {
      return (
        <div className="bookList">
          {this.state.books.map(this.eachBook)}
          <button id="add" className="btn btn-primary" style={{marginTop:7+'px'}}>
             <MdAdd onClick={this.addBook}/></button>
        </div>
      )
  }
}
export default BooksList