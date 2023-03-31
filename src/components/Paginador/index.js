//import React, { useState } from "react";
//import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import "./style.css";

function Paginador({ handlePageClick }) {
  return (
    <ReactPaginate
      previousLabel={<FaAngleLeft />}
      nextLabel={<FaAngleRight />}
      pageCount={10}
      onPageChange={handlePageClick}
      containerClassName={"paginator-container"}
      pageClassName={"paginator-page"}
      pageLinkClassName={"paginator-link"}
      previousClassName={"paginator-nav"}
      previousLinkClassName={"paginator-link"}
      nextClassName={"paginator-nav"}
      nextLinkClassName={"paginator-link"}
      breakClassName={"paginator-page"}
      breakLinkClassName={"paginator-link"}
      activeClassName={"paginator-active"}
    />
  );
}

export default Paginador;
