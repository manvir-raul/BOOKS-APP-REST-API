import React, { Component } from "react";
import { Table, Button } from "reactstrap";

const TableShow = ({ books, onDelete, toggle ,edit}) => {
  const booksRender = books.map((book, index) => {
    return (
      <tr key={book.id}>
        <td>{index + 1}</td>
        <td>{book.title}</td>
        <td>{book.rating}</td>
        <td>
          <Button color="success" size="sm" className="mr-2" onClick={edit}>
            Edit
          </Button>
          <Button color="danger" size="sm" onClick={() => onDelete(index)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <Button color="primary" onClick={toggle}>
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
          <tbody>{booksRender}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableShow;
