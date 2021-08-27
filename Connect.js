import React, { Component } from 'react'
import {connect,getAccounts,getChainId} from './metamask'



class Connect extends Component {


    componentDidMount(){
     
      getAccounts();
      getChainId();

    }

    render() {
        return (
            <div>
                <button onClick = {connect}>Connect to metamask</button>
            </div>
        )
    }
}
export default Connect
