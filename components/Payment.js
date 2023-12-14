'use client'
import React, { useState } from 'react'


function Payment() {
    const [data, setData] = useState({});
   
    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(data)
        const name = data.name;
    const email = data.email;
    const total_amount = data.total_amount;
    const address = data.address;
    const phoneNumber = data.phoneNumber;
   
    setData({})
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Donation Details</h2>
        <form>
        <div className="mb-4">
                <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">
                    Your Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="total_amount" className="block text-gray-700 font-bold mb-2">
                    Total Amount
                </label>
                <input
                    type="text"
                    id="total_amount"
                    name="total_amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={data.total_amount}
                    onChange={(e) => setData({ ...data, total_amount: e.target.value })}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={data.address}
                    onChange={(e) => setData({ ...data, address: e.target.value })}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                    Phone Number
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
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
        </form>
    </div>
</div>
  )
}

export default Payment