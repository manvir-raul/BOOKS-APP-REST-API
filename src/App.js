import React, { Component } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modal: false,
      // book:{id:null,title:"",rating:null}
      title: "",
      rating: null,
      id:1
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  // onChange=(e)=>{

  //   // this.setState({
  //   //   book:{[e.target.name]:e.target.value}
  //   // })
  //   console.log("e,target.value=",e.target.name);
  //   // this.setState((prevState)=>{
  //   //   console.log("e,target=",e.target)
  //   //   return ({
  //   //               book:{...prevState.book,
  //   //                    [e.target.name]:e.target.value
  //   //               }
  //   //           })
  //   //         }
  //   // )
  // }

  onChangeTitle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onDelete=(id)=>{
    console.log("onDelete =id",id)
    this.setState((prevState)=>{
      let books=prevState.books;
      books.splice(id,1)
      return ({books:books})
    })
  }

  onEdit=(id)=>{

  }
  onSubmit = () => {
    this.toggle();
    this.setState(prevState => {
      let book = {
        title: prevState.title,
        rating: prevState.rating,
        id: prevState.id
      };
      let books=[...prevState.books];
      books.push(book)
      console.log("book", book);

      return ({ books: books,title:"",rating:null,id:++prevState.id});
    });
  };

  render() {
    const books = this.state.books.map((book,index) => {
      return (
        <tr key={book.id}>
          <td>{index+1}</td>
          <td>{book.title}</td>
          <td>{book.rating}</td>
          <td>
            <Button color="success" size="sm" className="mr-2">
              Edit
            </Button>
            <Button color="danger" size="sm" onClick={()=>this.onDelete(index)}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className="App">
        <div>
          <Button color="primary" onClick={this.toggle}>
            Add book +
          </Button>
        </div>
        <div>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>title</th>
                <th>rating</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>{books}</tbody>
          </Table>
        </div>
        <Modal
          isOpen={this.state.modal}
          //toggle={this.toggle}
          className={this.props.modal}
        >
          <ModalHeader toggle={this.toggle}>Add Book</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleText">Book</Label>
              <Input
                type="text"
                name="title"
                id="exampleText"
                placeholder="with a book"
                onChange={this.onChangeTitle}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleRating">Rating</Label>
              <Input
                type="number"
                name="rating"
                id="exampleNumber"
                placeholder="Rating placeholder"
                onChange={this.onChangeTitle}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmit}>
              Add Book
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
