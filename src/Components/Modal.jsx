import React from 'react'

export default function Modal() {
  return (
    <div>
        <div class="myform bg-dark">
    <h1 class="text-center">Login Form</h1>
    <form>
        <div class="mb-3 mt-4">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" class="btn btn-light mt-3">LOGIN</button>
        <p>Not a member? <a href="#">Signup now</a></p>
    </form>
</div>
    </div>
  )
}
