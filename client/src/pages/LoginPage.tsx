import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import googleLogo from "../assets/google.png";
import { useForm } from "react-hook-form";

export default function LoginPage() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // trigger a loading screen
            return;
        }
        if (user) navigate("/");
    }, [user, loading]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();
    const onSubmit = (data: LoginForm) => {
        console.log("hit");
        console.log(data);
        console.log(errors);
        logInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md">
                <h1 className="text-purple-1 m-auto mb-6">Amplo</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Email Address"
                        {...register("email", { required: true })}
                        className="p-2 mb-4 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true, min: 8 })}
                        className="p-2 mb-4 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary"
                    />
                    <input
                        type="submit"
                        value="Login"
                        className="bg-purple-1 text-white mb-2 drop-shadow-md py-2 rounded-md"
                    />
                </form>

                <div className="flex items-center mb-2">
                    <hr className="flex-grow border-t-tertiary" />
                    <span className="px-4 text-t-tertiary">
                        <p>or</p>
                    </span>
                    <hr className="flex-grow border-t-tertiary" />
                </div>
                <button
                    className="bg-b-tertiary text-black mb-2 drop-shadow-md py-2 rounded-md flex flex-row justify-center items-center"
                    onClick={signInWithGoogle}
                >
                    <img src={googleLogo} className="w-7 mr-2" />
                    <p>Login with Google</p>
                </button>

                <Link to="/reset" className="self-end mb-4">
                    <p className="text-t-tertiary text-sm">Forgot Password</p>
                </Link>
                <div className="flex flex-row space-x-2">
                    <p>Don't have an account?</p>
                    <p>
                        <Link to="/register" className="text-purple-1">
                            Register now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
