import { Link } from "react-router-dom";


export default function Login() {
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const phoneNumber = form.phoneNumber.value;
        const password = form.password.value;

        console.log({ phoneNumber, password })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="  bg-base-200 shadow-lg h-1/2 py-20 rounded-xl">
                <div className="flex flex  gap-5 lg:flex-row-reverse px-10 ">

                    <div className="  w-full max-w-xl ">
                        <form className="" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input name="phoneNumber" type="text" placeholder="phone number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left max-w-2xl mt-5">

                        <div>
                            <h1 className="text-5xl font-bold text-primary">MyCash </h1>
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>

                        </div>
                        <div>
                            <p>Don't  have any account ? <Link className="text-primary" to={'/register'}>Register </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
