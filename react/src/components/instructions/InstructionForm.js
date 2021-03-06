import React from 'react'

const InstructionForm = (props) => {
  return(
      <form onSubmit={props.handleFormSubmit}>
        <div className="small-10 medium-10 large-11 columns">
        <label>
          step:
          <input
          type="text"
          id="text-line"
          placeholder="E.g. Dice onion, garlic, green pepper, and tomato."
          value={props.value}
          onChange={props.handleChange}
          />
        </label>
        </div>
          <input className="submit" type="submit" value="+" />
          {`\n`}
      </form>
  )
}

export default InstructionForm;
