---
title: Marking Criteria
keywords: front-end frameworks, react
tags: Front-end Frameworks
layout: ../../../../layouts/MainLayout.astro
---

<table style="max-width: 100%">
  <tr>
    <th>Assessment Criteria</th>
    <th>Learning Outcomes</th>
    <th>Completed</th>
  </tr>
  <tr>
    <td>Using React correctly
      <ul>
        <li>The submission has well-structured and formatted code.</li>
        <li>Best practices are following, such as having a component in its own folder.</li>
        <li>There are no errors in the console.</li>
        <li>The App runs without any errors, and there are no errors in the console</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>has knowledge of industry-relevant JavaScript frameworks, has knowledge of the
difference between a library, framework and runtime script engine.</li>
        <li>has knowledge of principles for software architecture and design patterns that
frameworks are built on, such as MVC, Event driven architecture etc.</li>
        <li>is familiar with the possible risks by using less-known JavaScript frameworks.</li>
        <li>has insight into their own opportunities for work related the JavaScript framework.</li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>Using libraries and common design patterns
      <ul>
        <li>The app uses React Router.</li>
        <li>The app uses a Layout component.</li>
        <li>The data is from the specified API.</li>
        <li>Dynamic segments are used for the Product page</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>can explain their choice of JavaScript framework</li>
        <li>can explain the functionality of the JavaScript framework and the architecture behind the different frameworks, and the reasons for using these frameworks</li>
        <li>can reflect his/her own choices and use for JavaScript frameworks in the development of
        digital solutions and adjust it under supervision or in relation to overall development</li>
        <li>can find and refer to technical information about the JavaScript framework and assess its relevance for each specific project</li>
      </ul>
    </td>
    <td>
      <input type="checkbox">
    </td>
  </tr>
  <tr>
    <td>All features delivered
      <ul>
        <li>The submission features a home page that contains a list of products and a lookahead search bar.</li>
        <li>The submission features an individual product page that fetches an individual item from the API.</li>
        <li>The submission features a cart icon that displays the number of items in the cart.</li>
        <li>The submission features a checkout page.</li>
        <li>The submission features a checkout success page.</li>
        <li>The submission features a contact page with the correct validation.</li>
        <li>The submission contains a shopping cart that can have products added to it.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>can plan and carry out digital solutions developed with JavaScript frameworks</li>
        <li>can plan and carry out work with JavaScript frameworks and develop solutions based on
specifications</li>
        <li>can exchange points of view with his/her peers and participate in discussions about the
use of JavaScript frameworks in the development of digital solutions</li>
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
