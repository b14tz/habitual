import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
    registerWithEmailAndPassword, // registerWithEmailAndPassword(name, email, password)
    signInWithGoogle,
} from "../lib/firebase";
import googleLogo from "../assets/google.png";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupForm>();

    const onSubmit = (data: SignupForm) => {
        console.log(data);
        console.log(errors);
        registerWithEmailAndPassword(data.displayName, data.email, data.password);
    };

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md">
                <h1 className="text-purple-1 m-auto mb-6">Amplo</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Display Name"
                        {...register("displayName", { required: true, min: 2 })}
                        className="p-2 mb-4 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary"
                    />
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
                        value="Register"
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
                    type="button"
                    className="bg-b-tertiary text-black mb-2 drop-shadow-md py-2 rounded-md flex flex-row justify-center items-center"
                    onClick={signInWithGoogle}
                >
                    <img src={googleLogo} className="w-7 mr-2" />
                    <p>Register with Google</p>
                </button>
                <div className="mt-4 flex flex-row space-x-2">
                    <p> Already have an account?</p>
                    <p>
                        <Link to="/login" className="text-purple-1">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
