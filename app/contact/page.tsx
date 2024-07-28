"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import { Input, notification } from 'antd'
import emailjs from '@emailjs/browser';
import { NotificationPlacement } from 'antd/es/notification/interface';

export default function Page() {
  const tags = ['Quantum', 'Product', 'Something', 'Design system'];
  const [value, setValue] = React.useState(0);
  const form = useRef<HTMLFormElement | null>(null);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: `email sent successfully`,
    });
  };

  /**
   * Sends an email using emailjs with the provided form data.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
   * @return {Promise<void>} A promise that resolves when the email is sent successfully, or rejects with an error message.
   */
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (form.current) {
      try {
        await emailjs.sendForm(
          'service_x03drve',
          'template_zivmvhe',
          form.current,
          { publicKey: 'tIZRH3zx-GKO4Gr5t' },
        );
        console.log('SUCCESS!');
        openNotification();
        form.current.reset();
      } catch (error) {
        console.log('FAILED...', error );
      }
    } else {
      console.log('Form is not available');
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
    {contextHolder}

    <div className="contact">
      <h1 className="contact__title">Contact Us</h1>
      <div className="contact__body">
        <div className="contact__body-left">
          <p> Lets discuss <br /> on something <span>cool</span> together </p>
          <div className="contact__info">
            <div className="contact__info-part">
              <Image alt="logo" src="/images/footer/email.svg" width={100} height={100} />
              hello@skillbirdge.com
            </div>
            <div className="contact__info-part">
              <Image alt="logo" src="/images/footer/phone.svg" width={100} height={100} />
              +91 91813 23 2309
            </div>
            <div className="contact__info-part">
              <Image alt="logo" src="/images/footer/location.svg" width={100} height={100} />
              Somewhere in the World
            </div>
            <div className="contact__link">
              <Image className="contact__link-image" alt="logo" src="/images/contact/face.svg" width={100} height={100} />
              <Image className="contact__link-image" alt="logo" src="/images/contact/insta.svg" width={100} height={100} />
              <Image className='fff' alt="logo" src="/images/contact/tut.svg" width={100} height={100} />
            </div>
          </div>
        </div>
        <div className="contact__body-right">
          <h3>I&apos;m interested in...</h3>
          <div className="contact__tags">
            {tags.map((item, idx) => (
              <div
                onClick={() => setValue(idx)}
                key={idx}
                className={`contact__tags-tag ${value === idx ? 'contact__tags-tag-active' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
            <input type="text" placeholder="Your name" name="name" />
            <input type="text" placeholder="Your email" name="email" />
            <input type="text" placeholder="Company name if exists" name='company' />
            <input placeholder="Your message" name='message' />
            <button  type="submit">Send Message</button>
        </div>
      </div>
    </div>
    </form>

  );
}
