import React from 'react'
import detectEthereumProvider from '@metamask/detect-provider';
import { findAllInRenderedTree } from 'react-dom/test-utils';

const provider =   detectEthereumProvider(); 

const { ethereum } = window;

let initState ={
    accounts : [],
    chainId : 0

}
    async function connect() {
        if (provider) {
            if(isMetaMaskInstalled()){
             ethereum.request({ method: 'eth_requestAccounts' });
            //   ethereum.enable()
            //   .then(function (accounts){
            //     initState.accounts = accounts;
            //   })
            //    .catch(function (error){
            //     console.log(error)
            //    })
            }
            else{
                alert("Install metamask");
            }
        }
        else{
            alert("Error while connecting metamask");
        }
    }

    async function getChainId (){

        initState.chainId = await ethereum.request({ method: 'eth_chainId' });

        ethereum.on('chainChanged', handleChainChanged);

        function handleChainChanged(_chainId) {
            if(_chainId !== initState.chainId){
        
                 window.location.reload();
                 initState.chainId = _chainId;
            }  
        }    
       console.log(initState.chainId)
    }
    
    async function getAccounts(){

       initState.accounts = await ethereum.request({method : 'eth_accounts'});
        ethereum.on('accountsChanged', handleAccountsChanged);
        
        function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            console.log('Please connect to MetaMask.');
            } else if (ethereum.selectedAddress!== initState.accounts) {
                initState.accounts = ethereum.selectedAddress;
                window.location.reload();

            }
            
        } 
        console.log(initState.accounts);
    }

    const isMetaMaskInstalled = () => {
        return Boolean(ethereum && ethereum.isMetaMask);
      }; 

export {connect,getAccounts,getChainId,initState,ethereum}
