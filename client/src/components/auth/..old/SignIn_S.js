import React from "react"
import { Form, Field } from "react-final-form"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(500)
  window.alert(JSON.stringify(values, undefined, 2))
}


export default () => (
  <div>
    <Form onSubmin={showResults}>
      {({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name="firstName" component="input" placeholder="First Name"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  </div>
)
