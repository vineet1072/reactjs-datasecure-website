import React from 'react'
import '../contact/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='form-container'>
            <form>
            
                <h2><span>Contact</span> Us</h2>   
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='Enter your name'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea rows='10' cols ='50' placeholder='Enter your message'/>
                </div>
                <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact