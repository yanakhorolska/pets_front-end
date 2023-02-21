import React from 'react'
import { Formik, Form, Field } from 'formik'

const inintualValues = {
    username: "Max",
}

const UserDataItem = () => {
    const handleSubmit = (values, action) => {
        console.log(values)
    };
    return (
        
      <div>
          <Formik inintualValues={inintualValues} onSubmit={handleSubmit}>
              <Form>
                <label htmlFor="username">Name
                  <Field id="username" name="username" type="text" />
                 
                    </label>  
                     <button type="button">EditInput</button>
                  <button type="submit">Submit</button>
              </Form>
              
      </Formik>
                 {/* <form>
              <label htmlFor="email">Email
                  <input id="email"></input>
                  <button type="button">EditInput</button>
                  <button type="submit">Submit</button>
              </label>
      </form>
      <form>
              <label htmlFor="birthday">Birthday
                  <input id="birthday"></input>
                  <button type="button">EditInput</button>
                  <button type="submit">Submit</button>
              </label>
      </form>
      <form>
              <label htmlFor="phone">phone
                  <input id="phone"></input>
                  <button type="button">EditInput</button>
                  <button type="submit">Submit</button>
              </label>
      </form>
      <form>
              <label htmlFor="city">city
                  <input id="city"></input>
                  <button type="button">EditInput</button>
                  <button type="submit">Submit</button>
              </label>
          </form> */}
    </div>
  )
}

export default UserDataItem