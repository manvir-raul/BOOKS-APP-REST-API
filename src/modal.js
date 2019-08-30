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
              <Label for="titleID">Book</Label>
              <Input
                type="text"
                name="title"
                id="titleID"
                placeholder="write book"
                onChange={onChangeTitle}
              />
            </FormGroup>
            <FormGroup>
            <Label for="autherID">Auther</Label>
              <Input
                type="text"
                name="auther"
                id="autherID"
                placeholder="Auther Name"
                onChange={onChangeTitle}
              />
            </FormGroup>
            <FormGroup>
              <Label for="ratingID">Rating</Label>
              <Input
                type="number"
                name="rating"
                id="ratingID"
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
