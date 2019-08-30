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
    console.log("add clicked");
    
    this.setState(prevState => ({
      newModal: !prevState.newModal
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
    axios
    .delete(`http://localhost:3000/books/${id}`)

    axios
      .get("http://localhost:3000/books")
    .then(response=>this.setState({books:response.data}))
  };

  onEdit = book => {
    this.editModalToggle();
    this.setState({book})
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
    return (
      <div className="App">
        <TableShow
          books={this.state.books}
          onDelete={this.onDelete}
          toggle={this.newModalToggle}
          onEdit={this.onEdit}
        />
        <ModalShow
          modalState={this.state.newModal}
          toggle={this.newModalToggle}
          onChangeTitle={this.onChangeTitle}
          onSubmit={this.onSubmit}
          book={this.state.book}
          button="add book"
        />
        <ModalShow
          modalState={this.state.editModal}
          toggle={this.editModalToggle}
          onChangeTitle={this.onChangeTitle}
          onSubmit={this.onSubmitEditted}
          book={this.state.book}
          button="edit book"
        />
      </div>
    );
  }
}

export default App;
