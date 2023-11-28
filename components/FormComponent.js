'use client'

import { Form, Formik, useField } from 'formik'
import * as Yup from 'yup'

const nameRegex = /^[\w\d\s]+$/
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formData = [
  {
    name: 'name',
    label: 'Your Name',
    type: 'text',
    required: true,
    placeholder: 'Enter Your Name',
  },
  {
    name: 'email',
    label: 'Your Email',
    type: 'email',
    required: false,
    placeholder: 'Enter Your Email',
  },
  {
    name: 'phone',
    label: 'Your Phone',
    type: 'tel',
    required: true,
    placeholder: 'Enter Your Phone Number',
  },
  {
    name: 'message',
    label: 'Your Message',
    type: 'text',
    required: false,
    placeholder: 'Enter Your Message',
  },
]

const getValidationSchema = () => {
  const rulesObj = {
    name: Yup.string()
      .trim()
      .matches(nameRegex, {
        excludeEmptyString: true,
        message: 'Only alphanumeric characters allowed',
      })
      .min(3, 'Minimum 3 letters required')
      .max(15, 'Must be 15 characters or less')
      .required("Required"),
    message: Yup.string().trim(),
    email: Yup.string()
      .trim()
      .email("Please add correct email id like 'abc@gmail.com'"),

    phone: Yup.string()
      .trim()
      .matches(phoneRegExp, {
        excludeEmptyString: true,
        message: 'Phone number is not valid',
      })
      .length(10, `Number should be at least 10 digits`)
      .required("Required"),
  }

  const schema = Yup.object(rulesObj)

  return schema
}

const InputItem = (props) => {
  console.log(props)
  const [field, meta, helpers] = useField(props.name)

  return (
    <div className="grid grid-cols-[1fr_auto] items-stretch gap-2">
      <div className={`col-span-full row-span-full block w-full`}>
        <label
          htmlFor={props.name}
          className={`gap mb-0 flex text-base font-normal `}
        >
          <div>{props.label}</div>
          {props.required && <span className="text-rose-600">*</span>}
        </label>
        <div className="">
          <input
            className="input input-bordered w-full"
            {...field}
            {...props}
          />
        </div>
        {meta.touched && meta.error ? (
          <div className="text-xs mt-0.5 capitalize text-rose-600">{meta.error}</div>
        ) : null}
      </div>
    </div>
  )
}

export default function FormComponent() {
  const formInitialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  const handelOnSubmit = (values, actions) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={formInitialState}
      validationSchema={getValidationSchema()}
      onSubmit={handelOnSubmit}
    >
      <div className="m-2 max-w-2xl rounded-lg border bg-slate-50 py-5 xl:mx-auto">
        <div className="my-2 text-center text-3xl font-bold text-amber-500">
          Lets Connect !
        </div>
        <Form className="grid gap-3 p-4">
          {formData.map((props) => (
            <InputItem key={props.name} {...props} />
          ))}

          <button
            name="submit"
            className="btn mt-5 bg-slate-900 font-bold text-white"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  )
}
