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
    setPassage(hp.map((pass, idx) => <p key={idx} id={idx} className="passage">{pass}</p>));
  }, [])

  const selectPhrase = (event) => {
    event.preventDefault();
    let selObj = window.getSelection();
    let passId = Number(selObj.anchorNode.parentNode.id);
    let start = selObj.anchorOffset;
    let end = selObj.extentOffset;
    let string = selObj.toString();
    let toChange = document.getElementsByClassName("passage")[passId].innerHTML
    console.log(string);
    console.log(toChange);
    toChange = toChange.replace(string, "<span class=highlighted>" + string + "</span>");
    document.getElementsByClassName("passage")[passId].innerHTML = toChange;
    console.log(toChange);
  }

  return (
    <div className="main">
      <TopBar />
      <div className="passageContainer" onMouseUp={selectPhrase}>
        {passage}
      </div>
    </div>
  )
};

export default App;