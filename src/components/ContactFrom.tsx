import { useForm, type SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
}

const ContactFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  const formSubmiting: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div
      className="contact-form container"
      onSubmit={handleSubmit(formSubmiting)}
    >
      <form className="row">
        <div className="col-md-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name:"
            {...register("name", {
              required: "Name is requiered!",
              minLength: {
                value: 3,
                message: "Name should have 3 character atleast!",
              },
              maxLength: {
                value: 10,
                message: "Name should have 10 character maximum!",
              },
            })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your email:"
            {...register("email", {
              required: "Email is requiered!",
              minLength: {
                value: 10,
                message: "Email should have 10 character atleast!",
              },
              maxLength: {
                value: 30,
                message: "Email should have 30 character maximum!",
              },
              pattern: {
                value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                message: "Your email is not valid",
              },
            })}
          />
          {errors.email && (
            <p className="text-danger"> {errors.email.message} </p>
          )}
        </div>
        <div className="col-md-12 mb-3">
          <select className="form-select">
            <option selected disabled value="">
              Select One
            </option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Phone Number:"
            {...register("phone", {
              required: "Phone number is required!",
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: "Your phone number is not valid.",
              },
            })}
          />
          {errors.phone && (
            <p className="text-danger">{errors.phone.message}</p>
          )}
        </div>
        <div className="col-12">
          <button
            className="btn btn-warning fw-bold py-2"
            style={{ fontSize: "13px" }}
            type="submit"
          >
            SUBMIT NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
