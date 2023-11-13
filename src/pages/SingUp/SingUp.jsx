import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function SingUp() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { createuser } = useContext(AuthContext);

  const onSubmit = (data) => {
    createuser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sing Up</title>
      </Helmet>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SingUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one upper case letter, one number, and
                    one special character
                  </span>
                )}
                {/* {errors.password && (
                <span className="text-red-600">Password is required</span>
              )} */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="mt-6 form-control">
                <button type="submit" className="btn btn-primary">
                  SingUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingUp;
