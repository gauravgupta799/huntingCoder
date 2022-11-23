import React,{useState} from "react";
import styles from "../styles/ContactStyle.module.css";
import {toast } from 'react-toastify';

const Contact = () => {
	const [ user, setUser] = useState({
		name:"", email:"", phone:"",message:""
	})
	const notify = () => toast.success('🦄 Success',
	 {
		position: "top-right",
		autoClose: 1000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
	})
	
	const handleChange = (event) => {
       const Name = event.target.name;
	   const Value = event.target.value
	   setUser({...user, [Name]:Value})
	}

	const handleSubmit=(e) => {
		e.preventDefault();
		// console.log(user)
		try{
			fetch("http://localhost:3000/api/postContact",{
				method:"POST",
				headers:{
					'Content-type':'application/json',
				},
				body:JSON.stringify(user),
			})
			.then((response) => response.json())
			.then(data => {
				console.log("Success & Data", data)
				notify();
			})
		}catch(err) {
			console.log(err);
		}
	}
	return (
		// <div className={styles.container}>
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
							required
						/>
						<input
							id='email'
							name='email'
							type='text'
							placeholder='Your Email'
							className={styles.form_control}
							onChange={handleChange}
							required
						/>
						<input
							id='phone'
							name='phone'
							type='tel'
							placeholder='Your Phone'
							// pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
							className={styles.form_control}
							onChange={handleChange}
							required
						/>
						<textarea
							className={styles.form_control}
							id={styles.message}
							name='message'
							placeholder='Please enter your message here...'
							rows={5}
							onChange={handleChange}
							required
						/>
						
					<div className={styles.btnWrapper}>
						<button type='submit' className={styles.btnSubmit}>
							Submit
						</button>
					</div>
				</form>
			</div>
		// </div>
	);
};

export default Contact;