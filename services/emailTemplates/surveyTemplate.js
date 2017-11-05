const keys = require('../../config/keys');
module.exports = survey => {
  return `
    <html>
    <head>
      <style>
      @import url(https://fonts.googleapis.com/css?family=Rye);
      a {
        color: white;
        text-decoration: none;
      }
      .btn {
        background: #3498db;
        background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
        background-image: -moz-linear-gradient(top, #3498db, #2980b9);
        background-image: -ms-linear-gradient(top, #3498db, #2980b9);
        background-image: -o-linear-gradient(top, #3498db, #2980b9);
        background-image: linear-gradient(to bottom, #3498db, #2980b9);
        -webkit-border-radius: 28;
        -moz-border-radius: 28;
        border-radius: 28px;
        font-family: Arial;
        color: #ffffff;
        font-size: 20px;
        padding: 10px 20px 10px 20px;
        text-decoration: none;
      }

      .btn:hover {
        background: #3cb0fd;
        background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
        background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
        background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
        background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
        background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
        text-decoration: none;
      }

      body {
        background: #eee;
      }
      </style>
    </head>
    <body>
      <div className='banner' style='text-align: center;>
        <h3>I'd like your input!</h3>
        <p>Please answer the following question: </p>
        <p>${survey.body}</p>
        <div>
          <button class='btn waves-effect waves-light'><a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a></button>
        </div>
        <div>
          <button class='btn waves-effect waves-light'><a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a></button>
        </div>
      </div>
    </body>
    </html>
  `;
};
