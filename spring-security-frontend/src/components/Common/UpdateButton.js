import React from "react";

function UpdateButton(props) {
  return (
    <>
      <button className="btn btn-danger" onClick={handleCategoryDelete}>
        Delete
      </button>
    </>
  );
}

export default UpdateButton;
