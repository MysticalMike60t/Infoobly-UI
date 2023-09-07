import React from "react";
import BasicButton from "../../modules/buttons/BasicButton";

const Test = () => {
  return (
    <div className="container__page test">
      <div className="page__wrapper">
        <div className="wrapper__title">
          <h1 className="title__h1">Module Tests</h1>
        </div>
        <BasicButton
          bgColor="#2d77df"
          onClick={() => alert("Button clicked!")}
          disabled={false}
          style={{ fontSize: "16px" }}
        >
          <span>Custom Content</span>
        </BasicButton>
      </div>
    </div>
  );
};

export default Test;
