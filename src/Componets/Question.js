import React from 'react'
export default function Question(props) {
  return (
    <div className='container-fluid'>
        <div className='col-md-5 m-auto'>
            <div className='mt-3'>
                <div className='card text-left'>
                    <div className='card-body'>
                        <form onSubmit={props.submit}>
                            <div className='form-group'>
                                <label htmlFor=''><b>3.</b>What are you currently doing?</label>
                                <br/>
                                <input type='radio' id='teacher' name='q1'   value="teacher" autoComplete='off'/>
                                <label htmlFor='teacher'>Teacher</label> { " "}
                                <input type='radio' value="student" id='student' name='q1'
                                autoComplete='off'/>
                                <label htmlFor='stuedent'>Student</label> {" "}
                                <input type='radio' id='programmer' value="programmer" name='q1' autoComplete='off'/>
                                <label htmlFor='programmer'>Programmer</label> {" "}
                                <input type='radio' id='other' name='q1' autoComplete='off' value="other"/>
                                <label htmlFor='other'>Other</label>
                                <br/>
                                <input
                                type='text'
                                className='form-control'
                                disabled
                                autoComplete='off'
                                name='other'
                                placeholder='type here if not listed'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>{' '} <b>4.</b> Please rate our course</label>
                                <br/>
                                <input type='radio' id="good" autoComplete='off' name='q2' value="good"/>                                <label htmlFor='good'>Good</label> { " "}
                                <input type='radio' id='poor' autoComplete='off' name='q2' value="poor"/>
                                <label htmlFor='poor'>Poor</label> {" "}
                                <input type='radio' id='excellent' autoComplete='off' name='q2' value="excellent"/>
                                <label htmlFor='excellent' >Excellent</label>                                
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''><b>5.</b> Write your reweive here</label>
                                <textarea className='form-control' name='q3'></textarea>
                                <button type='submit' className='btn btn-primary mt-2'>Save</button>
                            </div>
                        </form>
                        <span className='badge badge-pill disabled'>1</span>
                        <span className='badge badge-pill badge-primary'>2</span>
                         </div>
                     </div>
                 </div>
             </div>
       </div>
  );
};
