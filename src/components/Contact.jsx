import React from 'react'

export default function Contact() {

    const CONTACT={
        address:"F#133 Subhash Gate, Karnal,132001",
        phoneNo:"9467082615",
        email:"kashishgabakashish530@gmail.com",
    };
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'> Get in Touch</h1>

        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="" className='my-4 border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}
