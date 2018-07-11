import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from "react";
import { removeModal } from "../../actions/modals";
import { Button, Modal } from 'react-bootstrap';

class DeleteFileModal extends React.Component {
  
  static propTypes = {
    id: PropTypes.string.isRequired,
    action: PropTypes.object.isRequired,
    fileName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  closeModal = () => {
    this.setState({
      show: false
    });
    setTimeout(() => {
      this.props.dispatch(
          removeModal(this.props.id)
      );
    }, 500);
  }

  render = () => (
      <Modal show={this.state.show}
             backdrop={true}
             onHide={this.closeModal}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Are you sure you want to delete {this.props.fileName}?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.closeModal}>Cancel</Button>
          <Button bsStyle="danger"
                  onClick={() => {
                    this.closeModal();
                    this.props.dispatch(
                      this.props.action
                    );
                  }}>
            Delete
          </Button>
        </Modal.Footer>

      </Modal>
  )
}

export default connect()(DeleteFileModal);