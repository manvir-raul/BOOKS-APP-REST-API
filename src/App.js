import React, { Component } from "react";
import axios from "axios";
import TableShow from "./table";
import ModalShow from "./modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      book: {
        title: "",
        rating: ""
      },
      newModal: false,
      editModal:false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/books")
      .then(response => this.setState({ books: response.data }));
  }

  editModalToggle = () => {
    this.setState(prevState => ({
      editModal: !prevState.editModal
    }));
  };

  newModalToggle = () => {
    this.setState(prevState => ({
      mewModal: !prevState.newModal
    }));
  };

  onChangeTitle = e => {
    let { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      book: { ...prevState.book, [name]: value }
    }));
  };

  onDelete = id => {
    console.log("onDelete =id", id);
    axios
    .delete(`http://localhost:3000/books/${id}`)

    axios
      .get("http://localhost:3000/books")
    .then(response=>this.setState({books:response.data}))
    // this.setState(prevState => {
    //   let books = prevState.books;
    //   books.splice(id, 1);
    //   return { books: books };
    // });
  };

  onEdit = book => {
    this.editModalToggle();
    this.setState({book})
    // axios
    // .get(`http://localhost:3000/books/${book.id}`)
    // .then(response=>this.setState({book:response.data}))
  };

  onSubmit = () => {
    this.newModalToggle();
    axios
      .post("http://localhost:3000/books", this.state.book)
      .then(response => {
        this.setState(prevState => {
          let books = [...prevState.books, { ...response.data }];
          return { books, book: {} };
        });
      });
  };

  onSubmitEditted=()=>{
    this.editModalToggle();
    let {id} = this.state.book;
    axios.patch(`http://localhost:3000/books/${id}`,this.state.book);

    axios
    .get("http://localhost:3000/books")
    .then(response => this.setState({ books: response.data }));
    
  }


  render() {
    console.log("state", this.state.book);
    return (
      <div className="App">
        <TableShow
          books={this.state.books}
          onDelete={this.onDelete}
          toggle={this.toggle}
          onEdit={this.onEdit}
        />
        <ModalShow
          modalState={this.state.newModal}
          toggle={this.newModalToggle}
          onChangeTitle={this.onChangeTitle}
          onSubmit={this.onSubmit}
          book={this.state.book}
        />
        <ModalShow
          modalState={this.state.editModal}
          toggle={this.editModalToggle}
          onChangeTitle={this.onChangeTitle}
          onSubmit={this.onSubmitEditted}
          book={this.state.book}
        />
      </div>
    );
  }
}

export default App;
