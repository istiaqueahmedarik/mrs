'use client'
import React, { useState } from 'react'
import axios from 'axios';
import { useToast } from './ui/use-toast';


function Payment() {
    const [data, setData] = useState({});
    const { toast } = useToast()
    const handleSubmit =  (e) => {
        toast({
            description: "Wait a moment, we are processing your request",
          })
        const name = data.name;
    const email = data.email;
    const total_amount = data.total_amount;
    const address = data.address;
    const phoneNumber = data.phoneNumber;
    setData({ name: '', email: '', total_amount: '', address: '', phoneNumber: '' });
    axios.post('https://mrs2api.vercel.app/api/v1/sslcommerz', {
        total_amount : total_amount,
        phoneNumber : phoneNumber,
        address : address, 
        email : email,
        name : name
      })
      .then(function (response) {
        window.location.href = response.data.url;
      })
      .catch(function (error) {
        
      });
    
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-[2%] text-white">
    <div className="max-w-md w-full p-6 bg-[#242f46] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Donation Details</h2>
        <div>
        <div className="mb-4">
                <label htmlFor="Name" className="block  font-bold mb-2">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="Name"
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="Name" className="block  font-bold mb-2">
                    Your Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="Email"
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="total_amount" className="block  font-bold mb-2">
                    Total Amount
                </label>
                <input
                    type="text"
                    id="total_amount"
                    name="total_amount"
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={data.total_amount}
                    onChange={(e) => setData({ ...data, total_amount: e.target.value })}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block  font-bold mb-2">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={data.address}
                    onChange={(e) => setData({ ...data, address: e.target.value })}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block  font-bold mb-2">
                    Phone Number
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={data.phoneNumber}
                    onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                    required
                />
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    onClick={handleSubmit}
                >
                    Donate
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Payment