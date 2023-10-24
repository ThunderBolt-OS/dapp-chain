import React, { useState, useEffect, createContext, useContext } from 'react';
import { ethers } from 'ethers';

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState(null); 
  const [metaMaskData, setMetaMaskData] = useState({
    networkId: null,
    chainId: null,
    accounts: [],
    isMetaMaskConnected: false,
    balanceOfEactAccount: [],
  });

  const connectMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const networkId = await window.ethereum.request({ method: 'net_version' });
        const chainId = window.ethereum.chainId;
        const isMetaMaskConnected = window.ethereum.isConnected();
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          console.log(`Connected to MetaMask. Account: ${accounts[0]}`);
          console.log('all meta mask data', accounts, networkId, chainId, isMetaMaskConnected);
          
          let balanceOfEactAccount = []
          for (let i = 0; i < accounts.length; i++) {
            const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[i]] });
            balanceOfEactAccount.push(balance)
          }

          setMetaMaskData({
            networkId,
            chainId,
            accounts,
            isMetaMaskConnected,
            balanceOfEactAccount,
          });
        }
      } else {
        alert('MetaMask is not installed. Please install MetaMask.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectMetaMask = () => {
    setAccount(null);
    setIsConnected(false);
    setMetaMaskData({ ...metaMaskData, isMetaMaskConnected: false });
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setAccount(window.ethereum.selectedAddress);
      setIsConnected(true);
      console.log(`Connected to MetaMask. Account: ${window.ethereum.selectedAddress}`);
      JSON.stringify(metaMaskData);
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
          console.log(`MetaMask account changed. Account: ${accounts[0]}`);
        } else {
          setAccount(null);
          setIsConnected(false);
          setMetaMaskData({ ...metaMaskData, isMetaMaskConnected: false });

          console.log('Disconnected from MetaMask.');
        }
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
      }
    };
  }, []);

  return (
    <WalletContext.Provider
      value={{
        account,
        isConnected,
        connectMetaMask,
        disconnectMetaMask,
        metaMaskData
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
