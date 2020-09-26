import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import SelectionHighlighter from 'react-highlight-selection';

import TopBar from './TopBar.jsx'

import sampleData from '../sampleData/sampleData.js'

const App = () => {
  const [passage, setPassage] = useState([]);
  const [savedPass, setSavedPass] = useState([]);

  useEffect(() => {
    let hp = sampleData.split('\n\n\n');
    setPassage(hp.map((pass, idx) => <p key={idx} id={idx}>{pass}</p>));
  }, [])

  const selectPhrase = (event) => {
    // event.preventDefault();
    let selObj = window.getSelection();
    let passId = Number(selObj.anchorNode.parentNode.id);
    let start = selObj.anchorOffset;
    let end = selObj.extentOffset;
    let string = passage[passId].props.children.slice(start, end);
  }

  return (
    <div className="main">
      <TopBar />
      <div className="passageContainer">
        <span className="passage" onClick={selectPhrase}>
          {passage}
        </span>
      </div>
    </div>
  )
};

export default App;