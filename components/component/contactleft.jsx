'use client'
import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import client from '@/lib/sanity'
export default function Contactleft() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
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
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  className="min-h-[100px] bg-[#222222] text-white"
                  id="message"
                    value={message}
                        onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message" />
              </div>
              <Button onClick={()=>sendMail(name,message)} className="bg-[#4A5568] hover:bg-[#718096]">Send Message</Button>
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
async function sendMail(name, msg) {
    const data = await loadData();
    const email = data.email; // replace with your email
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(msg);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}