import React from "react";

function Title(props) {
  const { title, desc } = props;
  return (
    <>
      <h2 className="md:text-4xl text-3xl max-w-xl mx-auto mb-4">{title}</h2>
      <p className="mb-8 max-w-xl mx-auto">{desc}</p>
    </>
  );
}

export default Title;
