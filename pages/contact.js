import React,{useState} from "react";
import styles from "../styles/ContactStyle.module.css";

const Contact = () => {
	const [ user, setUser] = useState({
		name:"", email:"", phone:"",message:""
	})

	const handleChange = (event) => {
       const Name = event.target.name;
	   const Value = event.target.value
	   setUser({...user, [Name]:Value})
	}

	const handleSubmit=(e) => {
      e.preventDefault();
	  console.log(user)
	}
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<form className={styles.formHorizontal} onSubmit={handleSubmit}>
				       <h2 id={styles.title}>Contact Us</h2>
						<input
							id='name'
							name='name'
							type='text'
							placeholder='Your Name'
							className={styles.form_control}
							onChange={handleChange}
						/>
						<input
							id='email'
							name='email'
							type='text'
							placeholder='Your Email'
							className={styles.form_control}
							onChange={handleChange}
						/>
						<input
							id='phone'
							name='phone'
							type='tel'
							placeholder='Your Phone'
							// pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
							className={styles.form_control}
							onChange={handleChange}
						/>
						<textarea
							className={styles.form_control}
							id={styles.message}
							name='message'
							placeholder='Please enter your message here...'
							rows={5}
							onChange={handleChange}
						/>
						
					<div className={styles.btnWrapper}>
						<button type='submit' className={styles.btnSubmit}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
