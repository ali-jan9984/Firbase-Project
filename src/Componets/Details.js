import React from 'react'

export default function Details(props) {
  return (
    <div>
      <form 
      className='form text-black mt-2 p-3 rounded' 
      style={{width:"450px",marginLeft:"500px",marginRight:"500px",background:"#fff"}} 
      onSubmit={props.submit}>
        <h1 
        className='text-center form-group' 
        style={{fontWeight:"550"}}>
          Fill out the Form
          </h1>
        <label
        htmlFor='name' 
        className='form-group text-center' 
        style={{fontSize:"20px"}}>
          <b>1.</b>Name:
          </label>
        <input 
        type='text' 
        name='name' 
        className='form-group p-3 mt-2' 
        placeholder='enter your name' 
        style={{width:"100%",borderRadius:"20px"}} 
        required/>
        <br/>
        <label 
        htmlFor='Email' 
        className='form-group text-center' 
        style={{fontSize:"20px"}}>
          <b>2.</b>Email:
          </label>
        <input 
        type='email' 
        name='email' 
        className='form-group p-3 mt-2' 
        placeholder='enter your email' 
        style={{width:"100%",borderRadius:"20px"}} 
        required/>
        <button 
        type='submit' 
        className='btn btn-primary mt-3 p-2'
        style={{fontSize:"20px",width:"200px"}}>
          Next
          </button>
      </form>
    </div>
  )
}
