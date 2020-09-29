import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Paragraphs = ({ passage, currPage }) => {
  const [savedPass, setSavedPass] = useState([]);

  useEffect(() => {
    axios.get('/api/reader')
      .then(response => {
        setSavedPass(response.data.rows)
      })
      restoreHighlights();
  }, [currPage])

  const restoreHighlights = () => {
    savedPass.forEach(pass => {
      let currpage = pass.currpage;
      if (currpage === currPage) {
        let pid = pass.pid;
        let pstart = pass.pstart;
        let pend = pass.pend;

        let string = document.getElementsByClassName("passage")[pid].innerHTML.substring(pstart, pend);
        let toChange = document.getElementsByClassName("passage")[pid].innerHTML;
        toChange = toChange.replace(string, "<span class=highlighted>" + string + "</span>");
        document.getElementsByClassName("passage")[pid].innerHTML = toChange;
      }
    })
  }

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
        'pId': passId / currPage,
        'pStart': start,
        'pEnd': end,
      })
      .then(response => {})
    }
  }

  // restoreHighlights();

  return (
    <div className="passageContainer" onMouseUp={selectPhrase}>
      {passage}
    </div>
  )
}

export default Paragraphs;