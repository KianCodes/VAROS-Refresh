import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Contact.module.scss'
import { useState } from 'react'
import axios from 'axios'

const contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [requiredFields, setRequiredFields] = useState( <div className={styles.requiredFieldsHidden}></div>)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setRequiredFields(
      <div className={styles.requiredFieldsFadeOut}>Please fill out all the fields.</div>
    )
    const n = e.target.name;
    if(n === "name") {
      setName(e.target.value)
    } else if(n === "email") {
      setEmail(e.target.value)
    } else if(n === "subject") {
      setSubject(e.target.value)
    } else if(n === "message") {
      setMessage(e.target.value)
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(name === "" || email === "" || subject === "" || message === "") {
      setRequiredFields(
        <div className={styles.requiredFieldsFadeIn}>
          Please fill out all the fields.
        </div>
      )
    } else {
      const form = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      }
        
        let req = await axios.post('/api/contact', form)
        .then((res) => {
          console.log(res);
          if(res.status === 200) {
            alert("Message Sent.");
            console.log("Message Successfully sent");
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
          }
          else {
            alert("Message failed to send.")
          }
        })
    }
    
  };

  return (
    <div className = {styles.container}>
        <Head>
            <title>VAROS: Contact</title>
            <meta name="description" content="Virtual and Augmented Reality Organ Systems" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1>Contact Us</h1>
          {requiredFields}
          <div className={styles.formContainer}>
            <div className={styles.formContent}>
              <div>
                <form id="form" className={styles.contactform}>
                  <div className={styles.form_group}>
                    <label className={styles.label} htmlFor='name'>
                      Name
                    </label>
                    <br />
                    <input
                      onChange={handleChange}
                      className={styles.inputfield}
                      type='text'
                      name='name'
                      id='name'
                      value={name}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label className={styles.label} htmlFor='email'>
                      Email
                    </label>
                    <br />
                    <input
                      onChange={handleChange}
                      className={styles.inputfield}
                      type='email'
                      name='email'
                      id='email'
                      value={email}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label className={styles.label} htmlFor='subject'>
                      Subject
                    </label>
                    <br />
                    <input
                      onChange={handleChange}
                      className={styles.inputfield}
                      type='text'
                      name='subject'
                      id='subject'
                      value={subject}
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label className={styles.label} htmlFor='message'>
                      Message
                    </label>
                    <br />
                    <textarea
                      onChange={handleChange}
                      className={styles.inputfield}
                      name='message'
                      id='message'
                      cols={30}
                      rows={10}
                      value={message}
                    ></textarea>
                  </div>
                  <div
                    className=
                    {`${styles.form_group}
                    ${styles.submit_button_div}`}
                  >
                    <input  
                            value="Send"
                            type='submit'
                            onClick={handleSubmit}
                            className={styles.submit_button}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default contact