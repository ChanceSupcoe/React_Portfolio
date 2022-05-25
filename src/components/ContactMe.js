import React from 'react';
import '../styles/contactme.css';

function ContactMe() {
    return (
    <div>
      <div id="contact" class="header2">
          <h2>Contact Me</h2>
          <p>To discuss future collaboration or partnership opportunities, please fill out the form below</p>
           <form action="mailto:chancesupcoe@gmail.com" method="post" enctype="multipart/form-data" name="EmailForm">
               Name:<br/><input type="text" name="ContactName" size="20"/><br/><br/>
               Message:<br/><textarea name="ContactComment" rows="10" cols="20"></textarea>
               <br/><br/><input type="submit" value="Submit"/>
           </form>
           <br/>
           <br/>
      </div>     
    </div>
    );
  }

export default ContactMe;
