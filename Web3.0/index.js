//deployment to a non node.js server
//import 'https://cdn.skypack.dev/@officient/regenerator-runtime';

//depencies for node.js server
import {abi} from "../build/contracts/DatabaseContract.json";
import "regenerator-runtime";

const {ethers} = require("ethers");

var wallet_address, provider, signer, balance, contract;

const CONTRACT_ADDRESS = "0x2B7D6305d47620e352D168CE27A72De8953B6384";
var btn, uid, tbl;
      
window.onload = async () =>
{
    
    try {
    //provider

        provider = new ethers.providers.Web3Provider(window.ethereum);

        //requesting connection with metamask

        await provider.send("eth_requestAccounts", []);

        //getting wallet details
        signer = await provider.getSigner();
  
        wallet_address = await signer.getAddress();
        balance = await signer.getBalance();
        balance = ethers.utils.formatEther(balance);

    } catch (err) {
        alert("Please ensure you have Metamask extension");
        console.log(err)
    }

    finally {
      
        btn = document.querySelector("#btn"); 
        uid = document.querySelector("#uid"); 
        tbl = document.querySelector("#tbl"); 
        btn.addEventListener("click", async () => {

            const input = uid.value;
            if (input.length < 3) {
                alert("Invalid user input");
                return;
            }

            signer = provider.getSigner();
            const smart_contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
            const tx = await smart_contract.addUser(input.toString(), wallet_address);
            await tx.wait();

            console.log(tx);
            
        });

    }

}