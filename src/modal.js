import React from 'react';

import {
Modal,
ModalHeader,
ModalBody,
ModalFooter,
FormGroup,
Label,
Input,
Button
} from "reactstrap";

const ModalShow = ({modalState,modal,toggle,onChangeTitle,onSubmit}) => {
    return ( 
        <Modal
          isOpen={modalState}
          //toggle={this.toggle}
          className={modal}
        >
          <ModalHeader toggle={toggle}>Add Book</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleText">Book</Label>
              <Input
                type="text"
                name="title"
                id="exampleText"
                placeholder="with a book"
                onChange={onChangeTitle}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleRating">Rating</Label>
              <Input
                type="number"
                name="rating"
                id="exampleNumber"
                placeholder="Rating placeholder"
                onChange={onChangeTitle}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onSubmit}>
              Add Book
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
     );
}
 
export default ModalShow;
