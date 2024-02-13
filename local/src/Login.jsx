import * as React from 'react'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Swal from 'sweetalert2'

const defaultTheme = createTheme()

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  )
}

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {}

    formData.forEach((value, key) => {
      data[key] = value
    })

    console.log({
      username: data.username,
      password: data.password,
    })

    try {
      const response = await fetch('http://cafe-project-server11.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const result = await response.json()
      if (result.message === 'Success') {
        localStorage.setItem('token', data.token)
        // window.location = 'https://cafe-project-server11.onrender.com/Dashboard'
        window.location.href = '/Dashboard';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result.message, // Show specific error message from the server
        })
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-25 w-25"
            src="data:image/png;base64,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"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
          </p>
        </div>
      </div>
    </>
  )
}
