import logo from "../assets/logo.svg";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/SignUpSchema";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
    const { setUser } = useContext(AuthContext);

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    };

    const signUp = async (values) => {
        try {
            const res = await axios.post("/signup", values);

            if (res.status === 200) {
                localStorage.setItem(
                    "AUTH_TOKEN",
                    JSON.stringify(res.data.token)
                );
            }

            setUser(res.data.user);
        } catch (error) {
            console.log(error);
        }
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                action.resetForm();
                signUp(values);
            },
        });
    return (
        <>
            <div className="h-screen bg-[#5a19bb] flex justify-center items-center">
                <div className="h-[80%] w-2/3 bg-white flex">
                    <div className="w-1/2 px-10 py-7">
                        <div className="h-32">
                            <img
                                className=""
                                src={logo}
                                alt=""
                            />
                            <p className="text-5xl font-poppins font-extralight text-purple-600 pt-4">
                                Hello,
                            </p>
                            <h1 className="text-6xl font-poppins font-bold text-purple-600 -mt-2">
                                Weclome!
                            </h1>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-1"
                            >
                                <div className="flex flex-col h-20">
                                    <label
                                        htmlFor="nme"
                                        className="w-11 pl-1 text-xs relative top-2 left-1 bg-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="h-12 border-solid border-[1px] border-black pl-2"
                                        type="name"
                                        autoComplete="off"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name ? (
                                        <p className="text-red-600 text-xs -mt-0.5">
                                            {errors.name}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex flex-col h-20">
                                    <label
                                        htmlFor="email"
                                        className="w-10 pl-1 text-xs relative top-2 left-1 bg-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="h-12 border-solid border-[1px] border-black pl-2"
                                        type="email"
                                        autoComplete="off"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? (
                                        <p className="text-red-600 text-xs -mt-0.5">
                                            {errors.email}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex flex-col h-20">
                                    <label
                                        htmlFor="password"
                                        className="w-16 pl-1 text-xs relative top-2 left-1 bg-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="h-12 border-solid border-[1px] border-black pl-2"
                                        type="password"
                                        autoComplete="off"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && touched.password ? (
                                        <p className="text-red-600 text-xs -mt-0.5">
                                            {errors.password}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex flex-col h-20">
                                    <label
                                        htmlFor="password"
                                        className="w-[130px] pl-1 text-xs relative top-2 left-1 bg-white"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        className="h-12 border-solid border-[1px] border-black pl-2"
                                        type="password"
                                        autoComplete="off"
                                        name="confirm_password"
                                        id="confirm_password"
                                        placeholder="Confirm Password"
                                        value={values.confirm_password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.confirm_password &&
                                    touched.confirm_password ? (
                                        <p className="text-red-600 text-xs -mt-0.5">
                                            {errors.confirm_password}
                                        </p>
                                    ) : null}
                                </div>
                                <button
                                    className="bg-[#5a19bb] mt-1 h-10 w-24 text-white"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </form>

                            <p className="">
                                Already have an account ?{" "}
                                <a
                                    href="/login"
                                    className="text-cyan-600"
                                >
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 bg-black">
                        <img
                            src=""
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
