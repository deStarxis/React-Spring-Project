import axios from "axios";
import React from "react";

function DeleteButton(props) {
  const handleCategoryDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/${props.path}/${props.id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log(response.data);
      toast.success("Delete Successful", {
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="btn btn-danger" onClick={handleCategoryDelete}>
        Delete
      </button>
    </>
  );
}

export default DeleteButton;
