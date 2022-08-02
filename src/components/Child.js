import {React, useContext} from 'react'
import {UserContext} from '../App'
import Grandchild from './Grandchild'

const Child = () => {
        let providercount= useContext(UserContext)
        const buttonClicked =() =>{
            providercount.setCounter(providercount.counter+1)
        }

return (
    <div>
        <Grandchild/>
        <button onClick={buttonClicked}>update</button>
        
    </div>

    )
}
export default Child