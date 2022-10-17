---
title: Marking Criteria
keywords: sample
tags: HTML and CSS
sidebar: html-css
permalink: html-css/marking-criteria.html
folder: html-css
---

<table style="max-width: 100%">
  <tr>
    <th>Assessment Criteria</th>
    <th>Learning Outcomes</th>
    <th>Completed</th>
  </tr>
  <tr>
    <td>Responsive
      <ul>
        <li>The website is responsive across screen sizes.</li>
        <li>The website works on major browsers and across major devices.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has broad knowledge of the concepts responsive, adaptive, flow design and CSS Media Queries that are used to build web solutions that function independent of screen resolutions </li>
        <li>has knowledge of the tool Chrome DevTools used for testing websites across different platforms and operating systems. </li>
        <li>can apply knowledge relating to HTML, CSS and CSS Media Queries to develop functional and user-friendly web solutions </li>
        <li>masters Chrome DevTools for testing websites across different platforms and operating systems </li>
        <li>can apply techniques and tools to perform simple user tests to map visual and technical deficiencies </li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>Bug-free, neat and well written code
      <ul>
        <li>Semantic HTML5 elements are used where approriate</li>
        <li>The HTML is bug-free</li>
        <li>No inline styling</li>
        <li>The CSS follows DRY principles</li>
        <li>The HTML and CSS are formatted neatly</li>
        <li>Each page has a unique title</li>
        <li>Each page has a unique meta description</li>
        <li>Images are below 200kb to ensure faster loading time</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has broad knowledge of concepts and processes that are used in web development with HTML and CSS </li>
        <li>has knowledge of tools that are used to develop websites based on HTML and CSS </li>
        <li>has knowledge of processes and tools that are used for validating websites </li>
        <li>can update his/her vocational knowledge of new developments and techniques for web development with HTML and CSS </li>
        <li>has knowledge of the historical development of and is familiar with previous releases of HTML and CSS </li>
        <li>masters industry-relevant tools and software for planning, develop and validate web solutions built with HTML and CSS </li>
        <li>can find information and material that is relevant for developing websites with HTML and CSS</li>
        <li>can carry out visual and technical web solutions based on HTML and CSS and complete fully functional projects from start to finish </li>
        <li>can build relations with his/her peers, graphic designers, content developers and participate in interdisciplinary collaboration </li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>Appeal of website and ease of navigation
      <ul>
        <li>The website has no broken links</li>
        <li>Navigation between pages is clear</li>
        <li>The website appeals to the target audience.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has insight into quality requirements for the logic and aesthetic structure for websites and interactive products </li>
        <li>understands the importance of following procedures for universal design and good practice for coding </li>
        <li>can apply vocational knowledge to develop websites in accordance with ethical demands and guidelines for universal design </li>
        <li>understands the ethical principles used in the industry for universal design of ICT solutions </li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>WCAG friendly
      <ul>
        <li>Images have alt text.</li>
        <li>Anchor tags are used to link pages together.</li>
        <li>Semantic HTML is used to ensure accessibility with screen readers.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has broad insight into relevant regulations and guidelines for universal design of ICT solutions and the WCAG standard </li>
        <li>can apply knowledge of the WCAG standard </li>
        <li>understands the ethical principles related to the development of web solutions and services </li>
        <li>has developed an ethical attitude in relation to developing HTML and CSS websites and can carry out the development of user-friendly websites based on HTML and CSS, the needs of selected target groups or client briefs</li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
   <tr>
    <td colspan="2">
    </td>
    <td class="grade">
    </td>
  </tr>
</table>

<script>
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const grade = document.querySelector(".grade");
  let criteriaPassed = 0;
  checkboxes.forEach(item => item.onclick = function(e){
    if(e.target.checked === true){
      criteriaPassed++;
      if(criteriaPassed === checkboxes.length){
        grade.innerHTML = "Passed";
      }
    }
    else {
      criteriaPassed--;
      grade.innerHTML = "";
    }
  })
</script>
