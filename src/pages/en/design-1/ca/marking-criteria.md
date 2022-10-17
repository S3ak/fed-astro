---
title: Marking Criteria
keywords: sample
tags: Design 1
sidebar: design-1
permalink: design-1/marking-criteria.html
folder: design-1
---

<table style="max-width: 100%">
  <tr>
    <th>Assessment Criteria</th>
    <th>Learning Outcomes</th>
    <th>Completed</th>
  </tr>
  <tr>
    <td>User Interface Design
      <ul>
        <li>The submission has taken design principles into consideration.</li>
        <li>The submission is consistent and well crafted.</li>
        <li>The submission uses competitor benchmarking and problem-solving skills.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has basic knowledge of identity elements and the concepts typography, colour, graphical
elements</li>
        <li>has knowledge of tools and techniques for image editing and design</li>
        <li>can apply basic knowledge about identity elements such as typography, colour and
graphic elements and perform simple development or editing of visual elements for onscreen
use</li>
        <li>can carry out or process simple identity elements and put them together into a layout for
use in screen-based solutions and services</li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>User Experience Design
      <ul>
        <li>has knowledge of the concepts composition, grid and the basic design principles used for
screen-based solutions</li>
        <li>The submission has taken User Experience  principles into consideration.</li>
        <li>The submission has functional prototypes.</li>
        <li>The submission has taken user testing and Accessibility into consideration.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has knowledge of the central concepts and processes used in visual design of useroriented
solutions and services for web and mobile devices</li>
        <li>has basic knowledge about the structure of websites and interactive products</li>
        <li>can update their vocational knowledge of visual designing user-oriented solutions for
web and mobile devices</li>
        <li>can apply knowledge about basic design principles and perform development of simple
layouts for web-based solutions and services</li>
        <li>understands the ethical principles that apply for using visual means in the development
of user-friendly web solutions</li>
        <li>has developed an ethical attitude in relations to using visual means</li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>Deliverables and features
      <ul>
        <li>The submission features functional prototypes.</li>
        <li>The submission features mobile and desktop screens.</li>
        <li>The submission has taken user testing into consideration.</li>
        <li>The submission features all the pages according to the Site Architecture.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has insight into relevant standards and current design processes from idea to finished
product</li>
        <li>has insight into relevant quality requirements for text content on web pages and how it
is produced and structured</li>
        <li>has insight into methods, techniques and tools for elaboration and presentation of ideas,
sketches, prototypes and simple visual elements</li>
        <li>understands the importance of how good visual design can support value creation for
businesses, organizations or individuals</li>
        <li>can apply knowledge of the central concepts and processes for visual designing userfriendly
solutions and services for web and mobile devices</li>
        <li>can find information and material regarding visual design for screen-based solutions and
services</li>
        <li>can develop work methods from a progress plan for design processes and visual design
from idea to finished product</li>
        <li>can build relations with their peers and with graphic designers and content developers</li>
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
