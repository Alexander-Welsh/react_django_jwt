import React from 'react'
// import { FormGroup, FormFeedback, Label, Input } from 'reactstrap';
export default ({name, label, error, type, ...rest}) => {
  const id = `id_${name}`,
        input_type = type?type:"text"
  return (
    <div>
      <h1 style={{textAlign:"center"}}> Fuck React</h1>

    </div>
  )
}