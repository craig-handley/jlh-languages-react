import React, { Fragment, useState } from "react";
import Navigation from './Navigation';
import { useForm } from "react-hook-form";
import { init, sendForm } from 'emailjs-com';
import ReactFlow from 'react-flow-renderer';
import generateElements from '../data/elements';

init('user_xsbCjwzBxgWTMv938QiEQ');

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('Message');
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    const statusMessage = document.querySelector('.status-message');
    sendForm('service_noq8y8c', 'template_id95lk4', '#contact-form')
      .then(function (response) {
        setStatusMessage('Message sent!');
        statusMessage.className = 'status-message success';
        setTimeout(() => {
          statusMessage.className = 'status-message'
        }, 5000);
        console.log('SUCCESS!', response.status, response.text);
        reset();
      }, function (error) {
        setStatusMessage('Failed to send message! Please try again.');
        statusMessage.className = 'status-message failure';
        setTimeout(() => {
          statusMessage.className = 'status-message'
        }, 5000);
        console.log('FAILED...', error);
      });
  };
  const message = watch('userMessage') || "";
  const messageCharsLeft = 1500 - message.length;
  const elements = generateElements();

  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>How do I book an experience for my school?</h2>
          </header>
          <div className="flex flex-3">
            <article>
            </article>
            <article>

              <div style={{ height: 850 }}>
                <ReactFlow
                  elements={elements}
                  nodesDraggable={false}
                  paneMoveable={false}
                  selectNodesOnDrag={false}
                  zoomOnDoubleClick={false}
                  zoomOnPinch={false}
                  zoomOnScroll={false}
                  elementsSelectable={false}
                >
                </ReactFlow>
              </div>
            </article>
            <article>
            </article>
          </div>

          <div>
            <br></br>
            <br></br>
          </div>

          <article>
            <div>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                {errors.userName && <div className='sub-text'>Name is required</div>}
                <input type='text' name='userName' placeholder='Name' {...register('userName', { required: true })} />
                <br />
                {errors.schoolName && <div className='sub-text'>School Name is required</div>}
                <input type='text' name='schoolName' placeholder='School Name' {...register('schoolName', { required: true })} />
                <br />
                {errors.schoolPostcode && <div className='sub-text'>School Postcode is required</div>}
                <input type='text' name='schoolPostcode' placeholder='School Postcode' {...register('schoolPostcode', { required: true })} />
                <br />
                {errors.userEmail && <div className='sub-text'>Email is required</div>}
                <input type='email' name='userEmail' placeholder='Email' {...register('userEmail', { required: true })} />
                <br />
                {errors.userMessage && <div className='sub-text'>Message is required</div>}
                <textarea name='userMessage' placeholder='Extra information or requirements' {...register('userMessage', { required: false, maxLength: 1500 })} />
                <p className='sub-text'>{messageCharsLeft} characters remaining</p>
                <br />
                <input type='submit' value='Send' />
                <br></br>
                <br></br>
                <p className='status-message'>{statusMessage}</p>
              </form>
            </div>
          </article>

          <div>
            <br></br>
            <br></br>
          </div>

        </div>
      </section>
    </Fragment>
  );
};

export default Contact;

