import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import { login } from "../../store/session";
import { getFilter } from "../../store/filter";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [img_url, setImgUrl] = useState("");
	const [bio, setBio] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	  }

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(validateEmail(email) === false){
			setErrors(["Please provide a valid email"])
			return
		}
		if (password.length < 6){
			setErrors(["Password must be at least six characters long"])
			return
		}
		if (password === confirmPassword) {
			const data = await dispatch(signUp(first_name, last_name, username, email, img_url, bio, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
			dispatch(getFilter())
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	const demolitionUser = (e) => {
		e.preventDefault();
		// const demouser = User
		dispatch(
		  login(
			'demo@aa.io',
			'password'
		  )
		)
		.then(closeModal())
		.catch(
		  async (res) => {
			const data = await res.json();
			if (data && data.errors) setErrors(data.errors);
		  }
		);
	}

	return (
		<>
		<div className="signUpModal">
			<h1>Sign Up for Gulp</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<div>
				<label>
					First Name :
					<input
						type="text"
						value={first_name}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</label>
				</div>
				<div>
				<label>
					Last Name :
					<input
						type="text"
						value={last_name}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</label>
				</div>
				<div>
				<label>
					Username :
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				</div>
				<div>
				<label>
					Email :
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				</div>
				<div>
				<label>
					Profile Picture Url :
					<input
						type="text"
						value={img_url}
						onChange={(e) => setImgUrl(e.target.value)}
						required
					/>
				</label>
				</div>
				<div>
				<label>
					Biography :
					<input
						type="text"
						value={bio}
						onChange={(e) => setBio(e.target.value)}
						required
					/>
				</label>
				</div>
				<div>
				<label>
					Password :
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				</div>
				<div>
				<label>
					Confirm Password :
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				</div>
				<div>
				<button className="signUpButtons" type="submit">Sign Up</button>
				</div>
				<div>
				<button className="signUpButtons" onClick={demolitionUser}>Demo User Login</button>
				</div>
			</form>
			</div>
		</>
	);
}

export default SignupFormModal;
