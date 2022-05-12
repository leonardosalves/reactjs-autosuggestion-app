import React from 'react'
import { Form } from 'react-bootstrap'
import InputControl from './components/InputControl'

const App = () =>{
    return(
        <div className='main'>
            <h1>ReactJS AutoBusca</h1>
            <div>
              <Form>
                <InputControl
                    name="country"
                    label="Entre o nome do país"
                    placeholder="Escreva um nome de um país"
                    />
              </Form>
            </div>
           </div>
    )
}

export default App