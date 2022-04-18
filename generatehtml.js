const Employee = require('./employee.js')
const Engineer = require('./engineer.js')
const Intern = require('./intern.js')
const Manager = require('./manager.js')

//employees


const generateHtml = function (allEmployees)
return 
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Builder</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://unpkg.com/bulmaswatch/cerulean/bulmaswatch.min.css"></link>
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
       Team Builder
      </h1>
      <p class="subtitle">
      </p>

      <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <p class="title">Manager</p>
      </article>
    </div>
  </div>

  <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <p class="title">Engineer</p>
      </article>
    </div>
  </div>

  <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <p class="title">Intern</p>
      </article>
    </div>
  </div>

  <div class="tile is-parent">
      <article class="tile is-child notification is-info">
        <p class="title">Employee</p>
      </article>
    </div>
  </div>


    </div>
  </section>
  </body>
</html>