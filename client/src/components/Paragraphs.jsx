import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Paragraphs = ({ passage, currPage }) => {
  const selectPhrase = (event) => {
    event.preventDefault();
    let selObj = window.getSelection();
    let passId = Number(selObj.anchorNode.parentNode.id);
    let start = selObj.anchorOffset;
    let end = selObj.extentOffset;
    let string = selObj.toString();

    if (Math.abs(start - end) !== 0) {
      let toChange = selObj.anchorNode.parentNode.innerHTML
      toChange = toChange.replace(string, "<span class=highlighted>" + string + "</span>");
      selObj.anchorNode.parentNode.innerHTML = toChange;
      axios.post('/api/reader', {
        'currPage': currPage,
        'pId': passId,
        'pStart': start,
        'pEnd': end,
      })
      .then(response => {})
    }
  }

  return (
    <div className="passageContainer" onMouseUp={selectPhrase}>
      {passage}
    </div>
  )
}

export default Paragraphs;