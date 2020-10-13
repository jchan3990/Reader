import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

import TopBar from './TopBar.jsx';
import Paragraphs from './Paragraphs.jsx';
import Pagination from './Pagination.jsx';

import sampleData from '../sampleData/sampleData.js'

const App = () => {
  const [passage, setPassage] = useState([]);
  const [savedPass, setSavedPass] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1)
  const [passLimit, setPassLimit] = useState(10);

  useEffect(() => {
    let hp = sampleData.split('\n\n\n');
    setPassage(hp.map((pass, idx) => <p key={idx} id={idx} className="passage">{pass}</p>));
    axios.get('/api/reader')
      .then(response => {
        setSavedPass(response.data.rows);
      })
  }, [])

  useEffect(() => {
    restoreHighlights();
  }, [currPage])

  const restoreHighlights = () => {
    savedPass.forEach(pass => {
      let currpage = pass.currpage;
      if (currpage === currPage) {
        let pid = pass.pid % 10;
        let pstart = pass.pstart;
        let pend = pass.pend;

        let string = document.getElementsByClassName("passage")[pid].innerHTML.substring(pstart, pend);
        let toChange = document.getElementsByClassName("passage")[pid].innerHTML;
        toChange = toChange.replace(string, "<span class=highlighted>" + string + "</span>");
        document.getElementsByClassName("passage")[pid].innerHTML = toChange;
      }
    })
  }

  const goFirst = (page) => {
    setCurrPage(page);
  }

  const goBack = (page) => {
    setCurrPage(page);
  }

  const goLast = (page) => {
    setCurrPage(page);
  }

  const goForward = (page) => {
    setCurrPage(page);
  }

  const idxOfLast = currPage * passLimit;
  const idxOfFirst = idxOfLast - passLimit;
  const currPasses = passage.slice(idxOfFirst, idxOfLast);

  restoreHighlights();

  return (
    <div className="main">
      <TopBar />
      <Paragraphs passage={currPasses} currPage={currPage} />
      <Pagination passLimit={passLimit} totalPasses={passage.length} currPage={currPage} goFirst={goFirst} goBack={goBack} goLast={goLast} goForward={goForward} />
    </div>
  )
};

export default App;