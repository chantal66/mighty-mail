import React from 'react';
import styled from 'styled-components';
import image from './images/online-survey-tool-banner.png';

const h2 = styled.h2`
.css-typing
{
    width: 30em;
    white-space:nowrap;
    overflow:hidden;
    -webkit-animation: type 5s steps(50, end);
    animation: type 5s steps(50, end);
}

@keyframes type{
    from { width: 0; }
}

@-webkit-keyframes type{
    from { width: 0; }
}

`;


const Landing = () => {
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <img
        src={image}
        alt="landing background image"
        style={{ width: '100%'}}
      />
      <h2 className='css-typing'>For smart tailor-made online surveys</h2>
    </div>
  );
};

export default Landing;
