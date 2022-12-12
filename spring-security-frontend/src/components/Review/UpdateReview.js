import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateReview() {
  const navigate = useNavigate();
  const [review, setReview] = useState({});
  const { id, reviewId } = useParams();
  const onValueChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReview({ ...review, [name]: value });
  };
  async function fetchReview() {
    const response = await axios.get(
      `http://localhost:8080/reviews/${reviewId}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    setReview(response.data);
  }
  useEffect(() => {
    fetchReview();
  }, [id]);
  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/reviews/${reviewId}`,
        review,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      navigate(`/products/${id}/reviews`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      <Link
        to={`/products/${id}/reviews`}
        className="btn btn-danger"
        id="back"
        style={{ marginBottom: "20px" }}
      >
        Back to Main
      </Link>
      <form
        style={{ width: "50%", margin: "auto", marginTop: "30px" }}
        onSubmit={onFormSubmit}
      >
        <h3>Update Review</h3>
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
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateReview;
