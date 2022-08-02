import { useContext } from "react";
import {React, UserContext} from '../App'

const Grandchild = () => {
    const providercount = useContext(UserContext)
    return(
        <div>
            <h1>{providercount.counter}</h1>
        </div>
    )
}
export default Grandchild
