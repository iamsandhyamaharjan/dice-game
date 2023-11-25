import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
<h2>How to play dice game</h2>
<div className='text'>
          <p>Select any number</p>
          <p>Click on dice</p>
          <p>
                    After click on dice if seleced number is equal to dice number you will get some point as dice {""}
          </p>
          <p>If you get wrong guess then the 2 point will be deducted</p>
</div>

    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding: 20px;
border-radius:10px;
h2{
          font-size:24px;
          font-weight:bold;
}
.text{
          margin-top: 10px;
}
          
`