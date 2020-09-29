import React, { useState, useEffect } from 'react';

const Pagination = ({ passLimit, totalPasses, currPage, goFirst, goBack, goLast, goForward }) => {

  const totalPages = Math.ceil(totalPasses / passLimit);

  const goToFirst = (event) => {
    event.preventDefault();
    if (currPage !== 1) {
      goFirst(1);
    }
  }

  const goBackOne = (event) => {
    event.preventDefault();
    if (currPage !== 1) {
      goBack(currPage - 1);
    }
  }

  const goToLast = (event) => {
    event.preventDefault();
    goLast(totalPages);
  }

  const goFowardOne = (event) => {
    event.preventDefault();
    if (currPage !== totalPages) {
      goForward(currPage + 1);
    }
  }

  return (
    <div className="pageSelectContainer">
      <div className="goFirstContainer">
        <button type="button" className="goFirstBtn" onClick={goToFirst}>
          &laquo;
        </button>
      </div>
      <div className="goBackContainer">
        <button type="button" className="goBackBtn" onClick={goBackOne}>
          &lt;
        </button>
      </div>
      <div className="currPage">
        {currPage}
      </div>
      <div className="goForwardContainer">
        <button type="button" className="goForwardBtn" onClick={goFowardOne}>
          &gt;
        </button>
      </div>
      <div className="goLastContainer">
        <button type="button" className="goLastBtn" onClick={goToLast}>
          &raquo;
        </button>
      </div>

    </div>
  )
}

export default Pagination;