import React,{useState,useEffect} from 'react'
import {connect,getAccounts,getChainId,initState,ethereum
} from './metamask'
import {addr} from '../js/addresses'
import {abi} from '../js/contractAbi'
import Web3 from 'web3'
function Contract() {

    const [val , setVal] = useState(0);
    const[accounts,setAccounts] = useState(null);
     var web3 = new Web3(window.ethereum);

    useEffect(() => {
        
            connect()
            getAccounts()
            setAccounts( initState.accounts)
            getChainId()
            
    },[setAccounts])
    
    const handleSubmit  = e => {
     e.preventDefault();
     signTransaction();
        }

        async function signTransaction(){
           var contractInstance = await new web3.eth.Contract(abi,addr);
           var bal = await  contractInstance.methods.bal().call();
          console.log(bal);
          var acc = "0xfa4f324d33c6c6edd74d91dd5b5bd82d78fe3031";
          console.log(accounts.toString());
          var trans = await contractInstance.methods.accept().send({from:initState.accounts.toString(),value:web3.utils.toWei(val.toString(),"ether")});
            console.log(trans.toString());
        }

    return (
        <div>
            <form onSubmit ={handleSubmit}> 
                <input type="text" value = {val} onChange ={(e) => setVal(e.target.value)} />
                <button type ="submit">Send Eth</button>
            </form>
        </div>
    )
}

export default Contract
