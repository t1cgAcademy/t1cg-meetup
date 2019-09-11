import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

class Resources extends Component {
  render() {
    return(
      <div>
        <h1>
          FREE Resources for Beginners
          </h1>
        <ul>
        <li><a href="www.google.com" target="blank">www.codecademy.com</a></li>
    <li><a href="www.sololearn.com" target="blank">www.soloearn.com</a></li>
  
    <li><a href="www.freecodecamp.org">www.freecodecamp.org</a></li>
    <li><a href="codepen.io">codepen.io</a></li>
    <li><a href="https://www.youtube.com/watch?v=PkZNo7MFNFg">Beau Carnes</a></li>
    <li><a href="codesandbox.io">code sandbox</a></li>
    
    <li><a href="www.datacamp.com">datacamp</a></li>
  
  <li><a href="dataquest.io">dataquest</a></li>
  
  <li><a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG">Net Ninja</a></li>
  
  <li><a href="https://www.lynda.com/in/linkedin-learning?src=go-pa&veh=sem_src.go-pa_c.ggl-ldc-sem-b2c-brand-dr-namer-ror-lang-eng-biz-gamma-desktop-core-brand_pcrid_295793837162_pkw_lynda%20com_pmt_e_g.CjwKCAjw44jrBRAHEiwAZ9igKMc-VwbnBiSCfcrLMz6aV8eKBvcfuZ6gH9nNrMVZeHnO4iQP9SJPzRoCwaQQAvD_BwE_learning&trk=sem_ldctest2lillp_c.ggl-ldc-sem-b2c-brand-dr-namer-ror-lang-eng-biz-gamma-desktop-core-brand_pkw.lynda%20com_pcrid.295793837162_g.CjwKCAjw44jrBRAHEiwAZ9igKMc-VwbnBiSCfcrLMz6aV8eKBvcfuZ6gH9nNrMVZeHnO4iQP9SJPzRoCwaQQAvD_BwE_learning&lpk35=9137&gclid=CjwKCAjw44jrBRAHEiwAZ9igKMc-VwbnBiSCfcrLMz6aV8eKBvcfuZ6gH9nNrMVZeHnO4iQP9SJPzRoCwaQQAvD_BwE">lynda.com</a> NOTE: join for free through local library, i.e., if you are paying for this services, then you are getting ripped off</li>

  <li><a href="https://www.tutorialspoint.com/codingground.htm">Coding Ground -- Lots of Resources!!!</a></li>
  
  <li><a href="https://www.learn-js.org/">learn-js.org</a></li>

  <li><a href="https://colorlib.com/wp/learn-javascript-online-free/">Free List of JS Courses</a></li>
  <li><a href="https://www.javascript.com/try">javascript.com</a></li>
  <li><a href="https://jsbin.com/">jsbin</a></li>
  <li><a href="https://javascript.info/">javascript info</a></li>
  <li><a href="https://www.fullstackacademy.com/blog/learn-javascript-for-free-11-online-tutorials-resources">resources from fullstackacademy</a></li>
  
  <li><a href="https://hackernoon.com/10-websites-to-learn-javascript-for-beginners-31e13bbdbb5c">hacker noon resources</a></li>
  <li><a href="https://gitconnected.com/learn/javascript">gitconnected</a></li>
  <li><a href="https://www.codeconquest.com/tutorials/javascript/">code conquest</a></li>
  <li><a href="https://learnjavascript.online/">Only First 40 Lessons Are Free...</a></li>
  <li><a href="https://www.youtube.com/watch?v=W6NZfCO5SIk">free 49 minute intro on youtube...</a></li>
  <li><a href="https://www.youtube.com/watch?v=hdI2bqOjy3c">Traversy Crash Course</a></li>
  <li><a href="https://colorlib.com/wp/javascript-tutorials/">colorlib collection</a></li>
  <li><a href="https://www.udemy.com/course/javascript-essentials/">free udemy course!</a></li>
  <li><a href="https://watchandcode.com/p/practical-javascript">independent free course</a></li>
  </ul>
      </div>

    )
  }
}

const radix = document.getElementById("root");
ReactDOM.render(<Resources />, radix);
