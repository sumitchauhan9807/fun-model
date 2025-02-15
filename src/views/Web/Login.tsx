import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input, SubmitButton } from 'src/components/FormItems'
import { LOGIN } from 'src/queries'
import { useDispatch } from "react-redux";
import { setUserData } from 'src/redux/user'
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
const schema = z.object({
  usernameOrEmail: z.string().min(4, { message: "Username Or Email must have at least 4 characters" }),
  password: z.string().min(8, { message: "Password must have at least 8 characters" }),
});

export default function Login() {
  const dispatch = useDispatch()
  const [loginUser, { loading }] = useMutation(LOGIN);
  // const [loginUser, { loading }] = useMutation(LOGIN,{context:{apiName:"sfu"}});

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit: any = async (formData: any) => {
    try {
      let { data } = await loginUser({
        variables: {
          data: {
            usernameOrEmail: formData.usernameOrEmail,
            password: formData.password
          }
        }
      })
      dispatch(setUserData(data.modelLogin))
    } catch (e: any) {
      setError("root", {
        message: e.message,
      });
      console.log(e)
    }
  }
  return (
    <div className="flex justify-center items-center w-full h-full fixed top-0 z-10 phone:bg-slate-100 md:bg-black">
      <img src="https://www.ukmodels.co.uk/wp-content/uploads/2020/10/shutterstock_136135856-1024x694.jpg" alt="" className="absolute h-full opacity-10 sm:left-[-30%] xl:left-[-10%] phone:hidden md:flex" />
      <img src="https://st3.depositphotos.com/1411595/34413/i/450/depositphotos_344138160-stock-photo-young-woman-in-a-black.jpg" alt="" className="w-3/12 m-16 phone:hidden xl:flex z-10" />
      <div className="flex absolute h-full w-full"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-loginFormWidth bg-slate-100 rounded-2xl z-10">
        <div className="flex flex-col p-8">
          <div className="flex flex-col items-center ">
            <h2 className="flex text-3xl my-4 text-grey_font">Log in</h2>
            <span className="text-main-pink font-light">Global Fun , Model Login</span>
          </div>
          <Input label={'Username Or Email'} bind={{ ...register("usernameOrEmail") }} error={errors.usernameOrEmail} />
          <Input type={'password'} label={'Password'} bind={{ ...register("password") }} error={errors.password} />
          <SubmitButton label={'Login'} saving={loading} />
          {errors.root && (
            <center>
              <div className="text-red-500 mt-4">{errors.root.message}</div>
            </center>
          )}
          <span className="block text-center text-md mt-2 font-normal text-blue_font cursor-pointer">Forgot username or password?</span>
          <Link to="/signup" className="block text-center text-md text-slate-400 mt-2 font-light">Not a member ? <span className="text-main-pink cursor-pointer">Sign up</span></Link>
        </div>
        <div className="flex flex-col items-center py-4 mt-4 border-t font-normal text-grey_font text-center phone:text-sm md:text-base">
          <span>This site is protected by reCAPTCHA and the google</span>
          <span>
            <span className="text-blue_font cursor-pointer">Privacy policy</span>&nbsp;and&nbsp;
            <span className="text-blue_font cursor-pointer">Terms of Service </span>
          </span>
        </div>
        {/* <span className="block text-center text-slate-600 mt-4 font-medium">Or Log in with</span> */}
        {/* <div className="flex justify-center mt-8">
                    <button className="flex items-center py-2 px-4 font-medium rounded-md mx-2 bg-white w-full justify-center">
                        <FcGoogle />&nbsp;
                        Google
                    </button>
                    <button className="flex items-center py-2 px-4 font-medium rounded-md mx-2 bg-fb_blue text-white w-full justify-center">
                        <LiaFacebookF />&nbsp;
                        Facebook
                    </button>
                </div> */}
      </form>
    </div>
  )
}