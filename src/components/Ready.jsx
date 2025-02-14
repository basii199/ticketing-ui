import { useNavigate } from "react-router-dom"

const Ready = ( {fullDetails} ) => {

  const [state_imgUrl, setImagUrl] = fullDetails.imgUrl
  const [state_name, setName] = fullDetails.name
  const [state_email, setEmail] = fullDetails.email
  const [state_request, setRequest] = fullDetails.request
  const [state_tickets, setTickets] = fullDetails.tickets
  const [state_ticketType, setTicketType] = fullDetails.ticketType

  const navigate = useNavigate()
  const {email, imgUrl, name, request, ticketType, tickets} = JSON.parse(localStorage.getItem('details'))

  function handleNewTicket () {
    localStorage.removeItem('details')
    console.log('done')

    setImagUrl('')
    setName('')
    setEmail('')
    setRequest('')
    setTicketType('REGULAR')
    setTickets(1)

    navigate('/')
  }
  
  return (
    <div className="w-full flex justify-center">
      <div className="w-[700px] bg-[#041E23] border border-[#0E464F] p-[48px] mt-[48px] rounded-[40px]">


        <div className="flex justify-between items-center">
          <p className="font-namum text-[32px]">
            Ready
          </p>

          <p className="font-roboto text-[16px] ">
            Step 3/3
          </p>
        </div>

        <div className="h-1 w-full bg-[#0E464F] mb-8 relative rounded">
          <div className="absolute inset-0 bg-[#24A0B5] right-0 rounded">
          </div>
        </div>

        <p className="font-alatsi text-[32px] mb-4 text-center">
          Your Ticket is Booked!
        </p>

        <p className="font-roboto text-[16px] mb-8 text-center">
          Check your email for a copy you can <strong>download</strong> 
        </p>

        <div className="flex flex-col items-center">
          <div className="clip-path-1 p-8 flex flex-col w-[300px] h-[480px] items-center bg-[#24A0B5] relative">


            <div className="bg-[#072C31] inset-[2px] absolute clip-path-2 p-5">

              <div className="flex flex-col p-4 items-center bg-[#031E21]/10 border border-[#24A0B5] rounded-[14px]">
                <p className="font-rage text-[34px]">
                  Techember Fest '25'
                </p>

                <p className="font-roboto text-[10px]">
                📍 04 Rumens road, Ikoyi, Lagos
                </p>

                <p className="font-roboto text-[10px]">
                📅 March 15, 2025 | 7:00 PM
                </p>

                <div className="size-[140px] border-4 border-[#24A0B5]/50 rounded-[12px] my-3 flex items-center justify-center overflow-hidden">

                  <img src={imgUrl || "icons/ticz.svg"} alt="uploaded photo" className="size-full object-cover"/>
                  
                </div>

                <div className="w-full bg-r rounded-[8px] bg-[#08343C] border border-[#133D44] grid grid-cols-2 p-1">

                  <div className="p-1 border-r border-b border-white/20">
                    <p className="font-roboto text-[10px] text-white/33">
                      Name:
                    </p>

                    <p className="font-roboto text-[12px] font-bold mt-1.5 max-w-[90px] overflow-hidden text-ellipsis">
                      {name}
                    </p>
                  </div>

                  <div className="p-1 max-w-[105px] overflow-hidden text-ellipsis border-b border-white/20">
                    <p className="font-roboto text-[10px] text-white/33">
                      Email:
                    </p>

                    <p className="font-roboto text-[12px] font-bold mt-1.5 ">
                      {email}
                    </p>
                  </div>

                  <div className="p-1 border-r border-b border-white/20">
                    <p className="font-roboto text-[10px] text-white/33">
                      Ticket Type:
                    </p>

                    <p className="font-roboto text-[12px]  mt-1.5">
                      {ticketType || '-'}
                    </p>
                  </div>

                  <div className="p-1 border-b border-white/20">
                    <p className="font-roboto text-[10px] text-white/33">
                      Ticket for:
                    </p>

                    <p className="font-roboto text-[12px] font-bold mt-1.5">
                      {tickets || '-'}
                    </p>
                  </div>

                  <div className="p-1 col-span-full">
                    <p className="font-roboto text-[10px] text-white/33">
                      Special request:
                    </p>

                    <p className="font-roboto text-[10px] mt-1.5 line-clamp-2">
                      {request || '-'}
                    </p>
                  </div>                

                </div>

              </div>

            </div>
          </div>

          <div className="clip-path-3 p-8 flex flex-col w-[300px] h-[120px] items-center bg-[#24A0B5] relative mt-[-2px]">
            <div className="bg-[#072C31] inset-[2px] absolute clip-path-4 flex items-center justify-center">

            <img  src="icons/barcodes.svg" alt="" />
              
            </div>
          </div>

        </div>

        

        <div className="flex gap-6 mt-8 font-namum text-[16px] max-[550px]:flex-col-reverse">

          <button className="grow max-w-1/2 border border-[#197686] rounded-[8px] text-[#24A0B5] p-3 max-[550px]:max-w-full" onClick={()=>{handleNewTicket()}}>
            Book Another Ticket
          </button>

          <button className="grow max-w-1/2 bg-[#24A0B5] rounded-[8px] p-3 max-[550px]:max-w-full">
            Download Ticket
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default Ready
