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
      modal: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/books")
      .then(response => this.setState({ books: response.data }));
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
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
    this.setState(prevState => {
      let books = prevState.books;
      books.splice(id, 1);
      return { books: books };
    });
  };

  onEdit = id => {
    console.log("edit id", id);
  };
  
  onSubmit = () => {
    this.toggle();
    axios
      .post("http://localhost:3000/books", this.state.book)
      .then(response => {
        this.setState(prevState => {
          let books = [...prevState.books, { ...response.data }];
          return { books, book: {} };
        });
      });
  };

  render() {
    console.log("state", this.state.book);
    return (
      <div className="App">
        <TableShow
          books={this.state.books}
          onDelete={this.onDelete}
          toggle={this.toggle}
          onEedit={this.onEdit}
        />
        <ModalShow
          modalState={this.state.modal}
          toggle={this.toggle}
          onChangeTitle={this.onChangeTitle}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
