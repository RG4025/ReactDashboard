import Swal from 'sweetalert2'
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

// or via CommonJS

export default function Contact() {
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eql3fxd', 'template_u95mj17', form.current, 'doh70r-RBS96oifej')
      .then((result) => {
        (function alertNew() {
            Swal.fire({
                title: "Yeah!",
                text: "Your Response has been submitted!",
                icon: "success"
              });
          })();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          (function swAlert(){
            Swal.fire("Sorry for the inconvenience! response is not submitted..");
         })();
      });
  };

  function resetForm(){
    setTimeout(() =>{
      let form = document.getElementById('reset');
      form.reset();

    },5000);
  }

  {

    useEffect(()=>{
      let year = document.getElementById('yearMain');
      
      let currYear = new Date();
      year.innerText = currYear.getFullYear();
      
      console.log(currYear.getFullYear());

    },[])
  }
 
  


  return (
    <>
      <section className="section_contact d-md-flex  align-items-center ms-0 ms-md-4 ms-xl-5 py-5 text-center">
        <div className="me-5 mt-0 pt-0">
          <h3>Stay In Touch :</h3>
        </div>
        <form id='reset' ref={form} onSubmit={sendEmail}>
          <div className="contact_div d-md-flex mt-5">
            <div className="">
              <div>
                <input type="text" name='user_name' placeholder="Your Name*" required/>
              </div>

              <div>
                <input type="email" name='user_email' placeholder="Your Email*" required/>
              </div>
            </div>

            <div>
              <textarea
                name="message"
                id="message"
                rows="5"
                cols="30"
                placeholder="Message*"
                required
              ></textarea>

            </div>
          </div>

          <div className="contact_button pt-4">
            
              <button type="submit" onClick={resetForm} >Submit</button>
          </div>
        </form>
        
      </section>

      <section className='second_footer'>
        <div className="container FooterContact">
        <footer>
            <div class="container ten_section_wrapper py-3">
                <p> 
                    Created by <b> &lt;R_<span class="text-danger">G</span>&gt;</b>. Copyright &#169; Rushi_<span
                        id="yearMain"></span>.
                </p>
            </div>
        </footer>
        </div>
      </section>
    </>
  );
}
