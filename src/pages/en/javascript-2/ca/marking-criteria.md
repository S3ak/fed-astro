---
title: Marking criteria
description: sample
tags: JavaScript 2
sidebar: javascript-2

layout: ../../../../layouts/MainLayout.astro
---

<table style="max-width: 100%">
  <tr>
    <th>Assessment Criteria</th>
    <th>Learning Outcomes</th>
    <th>Completed</th>
  </tr>
  <tr>
    <td>Using debugging and advanced JavaScript features
      <ul>
        <li>The submission contains code that is modular and split into ES6 modules.</li>
        <li>The submission contains destructured objects and/or arrays.</li>
        <li>JSDocs was used to document functions.</li>
        <li>The submission works correctly without any errors.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has knowledge of the programming language JavaScript used for developing interactive and dynamic web solutions</li>
        <li>has knowledge of data structure manipulation techniques such as array manipulation and object destructuring.</li>
        <li>has knowledge of writing modular code using ES6 modules.</li>
        <li>has knowledge of processes for testing and debugging.</li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>Using peer feedback to improve one's code
      <ul>
          <li>The candidate(s) has made effective use of git branching & PRs to manage feature development.</li>
          <li>The candidate(s) has made effective use of planning tools to coordinate feature development.</li>
          <li>The candidate(s) can reflect on suggested changes and implement feedback.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>can explain his/her choice of techniques and tools for developing interactive and dynamic solutions with JavaScript.</li>
        <li>can explain his/her choice of development processes for solutions using modern JavaScript concepts.</li>
        <li>can reflect over his/her own practice for the development of interactive and dynamic solutions with JavaScript and adjust it under supervision or user feedback.</li>
        <li>can find and refer to information and vocational material for development with JavaScript.</li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>All features delivered
      <ul>
        <li>The submission makes use of JWT to authenticate users</li>
        <li>The submission allows a logged in user to create a post.</li>
        <li>The submission allows a logged in user to update a post.</li>
        <li>The submission allows a logged in user to delete a post.</li>
        <li>The submission contains working search functionality.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>can plan and carry out interactive and dynamic solutions, either alone or as part of a group can implement standalone applications in JavaScript given small assignments.</li>
        <li>can exchange points of view with other with background in the trade/discipline in relation to the development of interactive and dynamic solutions.</li>
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
