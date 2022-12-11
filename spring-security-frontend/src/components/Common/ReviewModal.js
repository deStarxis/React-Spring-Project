import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ReviewModal(props) {
  const id = props.productId;
  const initalState = [];
  const [reviewList, setReviewList] = useState(initalState);
  async function fetchReviews() {
    const response = await axios.get(
      `http://localhost:8080/products/${id}/reviews`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    setReviewList(response.data);
    console.log(reviewList);
  }
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>These are reviews</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewModal;
