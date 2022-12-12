import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ReviewModal(props) {
  const initalState = {};
  const [review, setReview] = useState(initalState);
  const [product, setProduct] = useState(initalState);
  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReview({ ...review, [name]: value });
  };
  async function fetchProduct() {
    const response = await axios.get(
      `http://localhost:8080/products/${props.productId}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    setProduct(response.data);
  }
  useEffect(() => {
    fetchProduct();
  }, [props.productId]);
  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        comment: review.comment,
        product: product,
      };
      const response = await axios.post(
        "http://localhost:8080/reviews",
        payload,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      props.handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <input
              type="text"
              className="form-control"
              id="comment"
              name="comment"
              value={review.comment}
              onChange={onValueChanged}
              placeholder="Enter comment"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={onFormSubmit}
          >
            Add
          </button>
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
