import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useQuery ,useMutation } from '@apollo/client';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import SNEAKY_text from 'src/assets/Images/SNEAKY_text.png'
import {Input ,SubmitButton} from 'src/components/FormItems'
import {REGISTER} from 'src/queries'
import { useDispatch } from "react-redux";
import {setUserData} from 'src/redux/user'
import { useRef, useState } from "react";
const schema = z.object({
  fullName: z.string().min(5, { message: "Fullname must have at least 4 characters" }),
  email: z.string().email(),
  username: z.string().min(4, { message: "Username must have at least 4 characters" }),
  password: z.string().min(8, { message: "Password must have at least 8 characters" }),
});
//6Ldz__cpAAAAANabBu5Vt2rfmaojJp57fjkXE4ej
export default function Login() {
	const [registerUser, { loading }] = useMutation(REGISTER);
	const [captchValue,setCaptchaValue] = useState("")
	const captchaRef = useRef<ReCAPTCHA>(null)
  const dispatch = useDispatch()
	const {
    register,
    handleSubmit,
		setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });


	const captchaSuccess = (value:any) => {
		setCaptchaValue(value)
	}

	const onSubmit = async (formData:any) => {
		captchaRef.current.reset();
		if(!captchValue) return alert("Please fill captcha")
		try {
			let {data} = await registerUser({
				variables:{
					data:{
						name:formData.fullName,
						email:formData.email,
						username:formData.username,
						password:formData.password,
						captcha:captchValue
					}
				}
			})
			dispatch(setUserData(data.register))
		}catch(e:any) {
			captchaRef.current.reset();
			setError("root", {
        message: e.message,
      });
			console.log(e)
		}
	}

	  return (
			<div className="flex justify-center items-center w-full h-full fixed top-0 z-10 phone:bg-slate-100 md:bg-black">
					<img src="https://st3.depositphotos.com/1411595/34413/i/450/depositphotos_344138160-stock-photo-young-woman-in-a-black.jpg" alt="" className="w-3/12 m-16 phone:hidden xl:flex" />
					<div className="flex absolute h-full w-full"></div>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-loginFormWidth bg-slate-100 rounded-2xl z-10">
							<div className="flex flex-col p-8">
									<div className="flex flex-col items-center ">
											<h2 className="flex text-3xl my-4 text-grey_font">Sign up</h2>
											<span className="text-main-pink font-light">Global Fun , Model Register</span>
									</div>
									<Input label={'Full Name'}  bind={{ ...register("fullName") }} error={errors.fullName} />
									<Input label={'Email'} bind={{ ...register("email") }} error={errors.email}/>
									<Input label={'Username'} bind={{ ...register("username") }} error={errors.username}/>
									<Input label={'Password'} type="password" bind={{ ...register("password") }} error={errors.password}/>
									<br/>
									<ReCAPTCHA
                    sitekey="6LeX__cpAAAAAHccZS7Qdd6nl6vY1MaIvIbmNnG4"
										ref={captchaRef}
                    onChange={captchaSuccess}
										onExpired={() => alert('captcha expired')}
										onErrored={() => alert("captcha expired")}
                  />
									<SubmitButton label={'Signup'} saving={loading}/>
									{errors.root && (
										<center>
											<div className="text-red-500 mt-4">{errors.root.message}</div>
										</center>
									)}
									<span className="block text-center text-md text-slate-400 mt-2 font-light">Already have an account ?  &nbsp;
											<Link to="/login" className="text-main-pink cursor-pointer">Login</Link>
									</span>
							</div>
							<div className="flex flex-col items-center py-4 mt-4 border-t font-normal text-grey_font phone:text-sm md:text-base">
									<span className="text-center">This site is protected by reCAPTCHA and the google</span>
									<span>
											<span className="text-blue_font cursor-pointer">Privacy policy</span>&nbsp;and&nbsp;
											<span className="text-blue_font cursor-pointer">Terms of Service </span>
									</span>
							</div>
					</form>
			</div>
    )
}