//TODO: should loop through arrays to create employee cards (.map?)

const displayManagers = managers => {
    if(!managers) {
        return '';
    } 
    return 
    `
    <div class="col-lg-4 col-md-4 col-sm-6 pt-4">
          <div class="card">
          <div class="card-header">
            <h5 class="card-title">${managers.name}</h5>
            <i class="fas fa-briefcase fa-lg"></i>
            <h6 class="card-text">${managers.role}</h6>
          </div>
          <div class="card-body">
            <p>Email: </p><a href="mailto:${managers.email}">${managers.email}</a>
            <p class="card-text">Office: ${managers.officeNumber}</p>
          </div>
      </div>
    </div>
    `
}



const displayEngineers = engineers => {
    if(!engineers) {
        return '';
    } 
    return 
    `
    <div class="col-lg-4 col-md-4 col-sm-6 pt-4">
          <div class="card">
          <div class="card-header">
            <h5 class="card-title">${engineers.name}</h5>
            <i class="fas fa-laptop-code fa-lg"></i>
            <h6 class="card-text">${engineers.role}</h6>
          </div>
          <div class="card-body">
            <p>Email: </p><a href="mailto:${engineers.email}">${engineers.email}</a>
            <p class="card-text">GitHub: </p><a href="https://github.com/${engineers.username}" target="_blank">${engineers.username}</a>
          </div>
      </div>
    </div>
    `
}
const displayInterns
if(!interns) {
    return '';
} 
return 
`
<div class="col-lg-4 col-md-4 col-sm-6 pt-4">
      <div class="card">
      <div class="card-header">
        <h5 class="card-title">${interns.name}</h5>
        <i class="fas fa-baby fa-lg"></i>
        <h6 class="card-text">${interns.role}</h6>
      </div>
      <div class="card-body">
        <p>Email: </p><a href="mailto:${interns.email}">${interns.email}</a>
        <p class="card-text">School: ${interns.school}</p>
      </div>
  </div>
</div>
`


module.exports = templateData => {
    const {managers, engineers, interns} = templateData;
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"
    />
    <script
    src="https://kit.fontawesome.com/f78f1848e0.js"
    crossorigin="anonymous"
  ></script>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet" href="/src/style.css"/>
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <h1 class="text-center pt-2" id="appTitle">TEAM</h1>
    </header>
    <div class="container-fluid p-0">
      <div class="col mt-5">
      <div class="row" id="team-container">
            ${displayManagers(managers)}
            ${displayEngineers(engineers)}
            ${displayInterns(interns)}
      </div>
      </div>
    </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
        integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
        crossorigin="anonymous"></script>
    </body>
  </html>
  
      `;
}



