import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ReviewModal from "../Common/ReviewModal";

function ReviewList() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
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
  }
  useEffect(() => {
    fetchReviews();
  }, [id]);
  const handleReviewDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/reviews/${id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setReviewList(reviewList.filter((review) => review.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      <div>
        <Link
          to="/"
          className="btn btn-primary"
          id="GoBack"
          style={{ marginBottom: "20px" }}
        >
          Go Back
        </Link>

        <Button
          className="btn btn-success"
          id="AddNewReview"
          style={{ marginBottom: "20px", float: "right" }}
          onClick={handleShow}
        >
          Add New Review
        </Button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Comment</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {reviewList.length ? (
            <>
              {reviewList.map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.comment}</td>
                    <td>
                      <Link
                        className="btn btn-primary"
                        style={{ marginRight: "20px" }}
                        to={`/products/${id}/reviews/${data.id}`}
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleReviewDelete(data.id)}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              <tr style={{ textAlign: "center" }}>
                <td colSpan={3}>No data found</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <ReviewModal
        showModal={showModal}
        handleClose={handleClose}
        productId={id}
      />
    </div>
  );
}

export default ReviewList;
