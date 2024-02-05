import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({fullName: "", email: "", phone: "", exc: false, good: false, fair: false, bad: false, 
    exc1: false, good1: false, fair1: false, bad1: false, exc2: false, good2: false, fair2: false, bad2: false,
    exc3: false, good3: false, fair3: false, bad3: false})

    const changeHandler = (event) => {
        const {name,value,checked,type} =  event.target
        setFormData(prevFormData => {
          return{
            ...prevFormData,
            // [event.target.name]:event.target.value
            // [name] : value
            [name] : type === "checkbox" ? checked : value
          }
        });
    }
    const submitHandler = (event) => {
      event.preventDefault();
      //print
      console.log("Finally prinnting the entireform ka data....")
      console.log(formData)
  }
  return (
    <div className='flex justify-center items-center w-full mt-10'>

        <form action="" className='flex flex-col item-center border-2 w-9/12 p-10 m-5'
        onSubmit={submitHandler}>
                  <h1 className='font-bold text-3xl text-blue-500'>Feedback Form</h1>
        <div className='flex gap-10 mt-5'>
        <label htmlFor="fullName" className='m-2 font-bold text-2xl'>Full Name <sup>*</sup></label>
          <input type="text" className='border-4 w-[300px] rounded-md border-red-900 hover:border-dotted'
          placeholder='Enter Full Name' 
          onChange={changeHandler}
          name='fullName'
          id='fullName'
          value={formData.fullName}
          />

         <label htmlFor="email" className='m-2 font-bold text-2xl'>Email address <sup>*</sup></label>
          <input type="email" className='border-4 w-[300px] rounded-md  border-red-900 border-solid hover:border-dotted'
          placeholder='Enter Email Adress' 
          onChange={changeHandler}
          name='email' 
          id='email' 
          value={formData.email}
          />
        </div>

          <div className='flex mt-8'>
          <label htmlFor="phone" className='m-2 font-bold text-2xl'>Phone<sup>*</sup></label>
          <input type="text" className='border-4 ml-[90px] w-[300px] rounded-md  overflow-hidden border-red-900 hover:border-dotted '
          placeholder='Enter Phone Number' 
          onChange={changeHandler}
          name='phone' 
          id='phone' 
          value={formData.phone}
          />
          </div>

          <div className='flex mt-10 justify-between relative'>
          <div>
          <p className='text-[20px]'>please rate the quality of the service you recevied from your host <sup>*</sup></p>
          <div className='absolute left-0 mt-6'>
          <label htmlFor="exc" className='font-bold'>Excellent</label>
          <input type="checkbox" className='ml-3 mr-2' 
          onChange={changeHandler}
          name="exc" id="exc" 
          checked={formData.exc}
          />
          <label htmlFor="good" className='font-bold'>Good</label>
          <input type="checkbox" className='ml-3 mr-2' 
          onChange={changeHandler}
          name="good" id="good" 
          checked={formData.good}
          />
          <label htmlFor="fair" className='font-bold'>Fair</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="fair" id="fair" 
          checked={formData.fair}
          />
          <label htmlFor="bad" className='font-bold'>Bad</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="bad" id="bad" 
          checked={formData.bad}
          />
          </div>
          </div>

          <div className='relative'>
          <p className='text-[20px]'>Please rate the quality of your bevwrage <sup>*</sup></p>
          <div className='absolute left-0 mt-6'>
          <label htmlFor="exc1" className='font-bold'>Excellent</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="exc1" id="exc1" 
          checked={formData.exc1}
          />
          <label htmlFor="good1" className='font-bold'>Good</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="good1" id="good1" 
          checked={formData.good1}
          />
          <label htmlFor="fair1" className='font-bold'>Fair</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="fair1" id="fair1" 
          checked={formData.fair1}
          />
          <label htmlFor="bad1" className='font-bold'>Bad</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="bad1" id="bad1" 
          checked={formData.bad1}
          />
          </div>
           </div>
          </div>

          <div className='flex mt-20 justify-between relative'>
          <div>
          <p className='text-[20px]'>Was our restaurant clean? <sup>*</sup></p>
          <div className='absolute left-0 mt-6'>
          <label htmlFor="exc12" className='font-bold'>Excellent</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="exc2" id="exc2" 
          checked={formData.exc2}
          />
          <label htmlFor="good2" className='font-bold'>Good</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="good2" id="good2" 
          checked={formData.good2}
          />
          <label htmlFor="fair2" className='font-bold'>Fair</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="fair2" id="fair2" 
          checked={formData.fair2}
          />
          <label htmlFor="bad2" className='font-bold'>Bad</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="bad2" id="bad2" 
          checked={formData.bad2}
          />
          </div>
          </div>

          <div className='relative '>
          <p className='text-[20px] '>please rate your over all diring experience <sup>*</sup></p>
          <div className='mt-6 left-0 absolute'>
          <label htmlFor="exc3" className='font-bold'>Excellent</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="exc3" id="exc3" 
          checked={formData.exc3}
          />
          <label htmlFor="good3" className='font-bold'>Good</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="good3" id="good3" 
          checked={formData.good3}
          />
          <label htmlFor="fair3" className='font-bold'>Fair</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="fair3" id="fair3" 
          checked={formData.fair3}
          />
          <label htmlFor="bad3" className='font-bold'>Bad</label>
          <input type="checkbox" className='ml-3 mr-2'
          onChange={changeHandler}
          name="bad3" id="bad3" 
          checked={formData.bad3}
          />
          </div>
          </div>
          </div>

          <div >
          <button className='mt-[90px] bg-blue-900 p-3 border-blue-600 rounded-lg text-white font-bold
          text-[20px] hover:bg-blue-500 transition-all duration-75'>Submit Review</button>
          </div>
          
        </form>
    </div>
  )
}

export default Form