// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DatabaseContract
{

   address public user_address;
   string public user_name;
   uint256 public index = 0;

   string [] public names; 
   address [] public addresses ; 

   constructor ()
   {
       //do stuff
   }

   function addUser (string memory name, address u_address) public
   {
       user_address = u_address;
       user_name = name;

       names[index] = name;
       addresses[index] = user_address;

       index += 1;
   }

   function getUser () public view returns (string [] memory)
   {
       return names;
   }

}