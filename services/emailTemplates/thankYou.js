const keys = require('../../config/keys');
module.exports = thankYou => {
  return `
    <html>
    <head>
      <style>
      body {
        background: #eee;
      }

      div {
        bacground-color: #0000FF;
        height: 300px;
      }
      </style>
    </head>
    <body>
      <div className='banner' style='text-align: center;>
        <h3>Thanks for Voting!!!</h3>
        </div>
      </div>
    </body>
    </html>
  `;
};
