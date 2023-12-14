'use client'
import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import client from '@/lib/sanity'
export default function Contactleft(params) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
  return (
    <div>
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  className="bg-[#222222] text-white"
                  id="name"
                  value={name}
                    onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Your Email</Label>
                <Input
                  className="bg-[#222222] text-white"
                  id="name"
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  className="min-h-[100px] bg-[#222222] text-white"
                  id="message"
                    value={message}
                        onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message" />
              </div>
              <Button disabled={!(name.length&&email.length&&message.length)} onClick={()=>sendMessage(params.type,name,email,message,setEmail,setName,setMessage)} className="bg-[#4A5568] hover:bg-[#718096]">Send Message</Button>
            </div>
          </div>
  )
}
async function loadData()
{
  const query = `*[_type == "contact"][0]`;
  const res =  client.fetch(query);
  return res;
}


async function sendMessage(type, name, email, message,setEmail,setName,setMessage) {
    
    setEmail('');
    setName('');
    setMessage('');
  const webhookURL = 'https://discord.com/api/webhooks/1184532192450318507/mC3aWwL-dg7OUdWtYL3WEi9tEm2U31qLgdjSop0n68B7QhtefMPb_5_z0hi1uv8Kv5_k';

  const data = {
      content: `**Type:** ${type}\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
      username: name,
  };

  const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }
}