import { Link, useNavigate } from "react-router-dom"
import { SpinningCircles } from "react-loading-icons"
import { useState } from "react"
import isEmail from "validator/lib/isEmail"

const AttendeeDetails = ( {fullDetails} ) => {

  const [imgUrl, setImagUrl] = fullDetails.imgUrl
  const [name, setName] = fullDetails.name
  const [email, setEmail] = fullDetails.email
  const [request, setRequest] = fullDetails.request
  const [tickets, setTickets] = fullDetails.tickets
  const [ticketType, setTicketType] = fullDetails.ticketType

  const [loading, setLoading] = useState(false)
  let [isValidEmail, setisvalid] = useState(true)

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    if (!email) return

    const details = {
      'ticket-type': ticketType,
      'tickets': tickets,
      'image-url': imgUrl,
      'name': name,
      'email': email,
      'request': request
    }
    localStorage.setItem('details', JSON.stringify(details))
    navigate('/ready')
  }

  function handleInput(e, input){

    if (input === 'name') setName(e.target.value)
    if (input === 'email') {
      setEmail(e.target.value)
      setisvalid(isEmail(email))
      console.log(isValidEmail)
    }
    if (input === 'request') setRequest(e.target.value)

  }

  async function handleUpload(e){
    const file = e.target.files[0]

    if(!file) return
    setLoading(true)

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'my-preset-1')
    data.append('cloud_name', 'dj5wh1pcv')

    const res = await fetch('https://api.cloudinary.com/v1_1/dj5wh1pcv/upload',{
      method: 'POST',
      body: data
    })
    
    const url = await res.json()
    setImagUrl(url.url)

    setLoading(false)
  }  

  return (
    <div className="w-full flex justify-center">

      <div className="w-[700px] bg-[#041E23] border border-[#0E464F] p-[48px] mt-[48px] rounded-[40px]">

        <div className="flex justify-between items-center">
          <p className="font-namum text-[32px]">
            Attendee Details
          </p>

          <p className="font-roboto text-[16px] ">
            Step 2/3
          </p>
        </div>

        <div className="h-1 w-full bg-[#0E464F] mb-8 relative rounded">
          <div className="absolute inset-0 bg-[#24A0B5] right-1/3 rounded">
          </div>
        </div>

        <form className="bg-[#08252B] border border-[#0E464F] w-full rounded-[32px] flex flex-col p-[24px]">

          <div className="max-w-[556px] p-6 bg-[#052228] border border-[#07373F] rounded-[24px]" >
            <p className="font-roboto text-[16px] mb-2">
              Upload Profile Photo
            </p>

            <div className="flex flex-col items-center justify-center relative">
              <div className="w-full flex justify-center items-center  bg-black/20 h-50 absolute">
              </div>

              <div className="size-[240px] bg-[#0E464F] border-4 border-[#24A0B5]/50 rounded-[32px] flex flex-col items-center justify-center z-10 relative overflow-hidden">

                {loading? <SpinningCircles/> : '' }

                {imgUrl? <img className="z-20 size-full object-cover hover:opacity-50" src={imgUrl} alt="uploaded photo" /> : ''} 

                <div className="absolute p-6 flex flex-col items-center justify-center">
                  <img src="icons/cloud.svg" alt="cloud icon" />

                  <label htmlFor="file-input" className="text-center w-[176px] mt-4 font-roboto text-[16px] cursor-pointer hover:opacity-80" >
                    Drag & drop or click to upload
                  </label>
                </div>                  

                <input hidden type="file" accept="image/*" id="file-input" onChange={(e)=>{handleUpload(e)}} className="absolute -z-10"/>          

              </div>
            </div>
          </div>       
          

          <hr className="border-2 border-[#07373F] my-8" />

          <p className="font-roboto text-[16px] mb-2">
            Enter your name
          </p>

          <input type="text" className="border border-[#07373F] px-2 py-3 rounded-[8px]" name="name" id="name" onChange={e=>handleInput(e, 'name')}/>

          <p className="font-roboto text-[16px] mb-2 mt-8">
            Enter your email *
          </p>

          <div className="relative">
            <input type="email" className="w-full border border-[#07373F] pl-11 pr-2 py-3 rounded-[8px]" name="email" id="email" required placeholder="hello@avioflagos.io" onChange={e=>handleInput(e, 'email')}/>

            <img className="absolute top-1/2 -translate-y-1/2 left-[14px]" src="icons/mail.svg" alt="mail icon" />

            {isValidEmail? '': <p className="text-red-500 text-xs absolute left-1">
              Please enter valid email
            </p>}
          </div>

          <p className="font-roboto text-[16px] mb-2 mt-8">
            Special request
          </p>


          <textarea name="special-request" id="special-request" className="border border-[#07373F] px-2 py-3 rounded-[8px] h-[127px] mb-1 resize-none" placeholder="Textarea" onChange={e=>handleInput(e, 'request')}>
          </textarea>


          <div className="flex gap-6 mt-8 font-namum text-[16px] max-[550px]:flex-col-reverse">

            <Link to="/" className="grow border border-[#197686] rounded-[8px] text-[#24A0B5] p-3 flex justify-center items-center">
              Back
            </Link>

            <button className="grow max-w-1/2 bg-[#24A0B5] rounded-[8px] p-3 max-[550px]:max-w-full flex justify-center items-center" onClick={(e)=>{handleSubmit(e)}}>
              Get My Free Ticket
            </button>

          </div>
        </form>
      </div>
      
    </div>
  )
}

export default AttendeeDetails
