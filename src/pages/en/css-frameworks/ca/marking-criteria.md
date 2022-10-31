---
title: Marking Criteria
description: sample
tags: CSS Frameworks
layout: ../../../../layouts/MainLayout.astro
---

<table style="max-width: 100%">
  <tr>
    <th>Assessment Criteria</th>
    <th>Learning Outcomes</th>
    <th>Completed</th>
  </tr>
  <tr>
    <td>Using and extending Bootstrap correctly
      <ul>
        <li>The submission uses .p- & .m- classes to handle padding and margins rather than using custom styles.</li>
        <li>The submission uses the .nav component to represent navigation menus.</li>
        <li>The submission uses $primary to change the main theme colour.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has knowledge of the DRY principle that is used in the development of stylesheets</li>
        <li>can assess his/her own stylesheets in relation to the DRY principle</li>
        <li>has knowledge of arranging stylesheets appropriately.</li>
        <li>can assess and implement code from documentation on a CSS framework</li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>Using Bootstrap Responsive tooling correctly
      <ul>
        <li>The submission uses .row and .col classes to form a grid layout.</li>
        <li>The submission uses -sm-x class modifiers to utilise framework breakpoints.</li>
        <li>The submission does not implement custom grid techniques or breakpoints.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>can explain his/her choices for using the CSS framework and relevant tools for developing digital solutions</li>
        <li>can reflect over his/her own application of the CSS framework in the development of stylesheets and adjust it under supervision, or in relation to the general development of industry tools</li>
        <li>can find and refer to information on new versions of the CSS framework, relevant tools and assess the relevance in relation to his/her own projects</li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>All features delivered
      <ul>
        <li>The submission features a profile page with required detail.</li>
        <li>The submission features a login page with a validated tag.</li>
        <li>The submission features a home page with required detail.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>can plan and carry out digital solutions based on the CSS framework, either alone or as part of a group</li>
        <li>can plan and carry out digital solutions that work independent of screen resolutions</li>
        <li>can exchange points of view about the use of CSS frameworks with other vocational students and participate in discussions about the development of digital solutions based on CSS frameworks</li>
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
