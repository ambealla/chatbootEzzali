import { useEffect, useState } from 'react'
import {FaFacebookF} from 'react-icons/fa'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/index'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

 
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        'gmail',
        'template_YeJhZkgb',
        form.current,
        'your-token'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>  <div className='container metiere'>
      <div className='row'>
      <div className="col-12 col-md-6  contact-page ">
        <div className="text-zone">
          <h1 className='TITLE'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'n', 'o', 'u', 's']}
              idx={15}
            />
          </h1>
          
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        </div>
        <div className=' col-12 col-md-6'>
       <div>
       <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            madinat el irfane Rabat<br />
                            <i className="fa fa-phone"></i>: +212 1234 567890<br />
                            <i className="fa fa-fax"></i>: +212 8765 432190<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net" color='black'>ensias@gmail.com</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                        <FaFacebookF/>
                    </div>
                </div>
       </div>
        </div>
      </div>
      </div>
    </>
  );
}


export default Contact
