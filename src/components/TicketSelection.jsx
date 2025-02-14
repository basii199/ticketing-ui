import { Link } from "react-router-dom"

const TicketSelection = ( {fullDetails} ) => {

  const [tickets, setTickets] = fullDetails.tickets
  const [ticketType, setTicketType] = fullDetails.ticketType


  function handleChange(e){
    setTickets(e.target.value)
  }

  function handleClick (e, type){
    setTicketType(type)
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[700px] bg-[#041E23] border border-[#0E464F] p-[48px] mt-[48px] rounded-[40px]">


        <div className="flex justify-between items-center">
          <p className="font-namum text-[32px]">
            Ticket Selection
          </p>

          <p className="font-roboto text-[16px] ">
            Step 1/3
          </p>
        </div>

        <div className="h-1 w-full bg-[#0E464F] mb-8 relative rounded">
          <div className="absolute inset-0 bg-[#24A0B5] right-2/3 rounded">

          </div>

        </div>

        <div className="bg-[#08252B] border border-[#0E464F] w-full rounded-[32px] flex flex-col p-[24px]">

          <div className="flex flex-col items-center justify-center text-center border border-[#07373F] rounded-[24px] bg-radial-[at_10%_30%] from-10% from-[#0E464F] to-[#02191D] to-90% bg-no-repeat">
            <p className="font-rage text-[62px] text-gray-50 max-[550px]:text-[40px]">
              Techember Fest "25
            </p>

            <p className="max-w-[340px] font-roboto text-[16px] mb-[8px] max-[550px]:text-[14px]">
              Join us for an unforgettable experience at Techember! Secure your spor now
            </p>

            <div className="flex gap-2 max-[650px]:flex-col">
              <p className="max-w-[340px] font-roboto text-[16px] max-[550px]:text-[14px]">
              📍 04 Rumens road, Ikoyi, Lagos  ||
              </p>

              <p className="max-w-[340px] font-roboto text-[16px] max-[550px]:text-[14px]">
                March 15, 2025 | 7:00 PM
              </p>
            </div>

          </div>

          <hr className="border-2 border-[#07373F] my-8" />

          <p className="font-roboto text-[16px] mb-2">
            Select Ticket Type:
          </p>
          

          <div className="ticket-type bg-[#052228] border border-[#07373F] rounded-[24px] p-4 flex justify-between gap-[25px] max-[550px]:flex-col ">

            <input defaultChecked hidden type="radio" name="ticket-type" id="REGULAR"/>
            <label htmlFor="REGULAR" className="p-3 border border-[#197686] rounded-[12px] flex flex-col" onClick={(e)=>handleClick(e, 'REGULAR')}>
              <p className="font-roboto text-[24px] mb-3">
                Free
              </p>

              <p className="font-roboto text-[16px]">
                REGULAR ACCESS
              </p>

              <p className="font-roboto text-[14px] text-[#D9D9D9]">
                20/52
              </p>
            </label>

            <input hidden type="radio" name="ticket-type" id="VIP"/>
            <label htmlFor="VIP" className="flex flex-col p-3 grow bg-[#052228] border border-[#197686] rounded-[12px]" onClick={(e)=>handleClick(e, 'VIP')}>
              <p className="font-roboto text-[24px] mb-3">
                $100
              </p>

              <p className="font-roboto text-[16px]">
                VIP ACCESS
              </p>

              <p className="font-roboto text-[14px] text-[#D9D9D9]">
                20/52
              </p>
            </label>

            <input hidden type="radio" name="ticket-type" id="VVIP"/>
            <label htmlFor="VVIP" className="flex flex-col p-3 grow bg-[#052228] border border-[#197686] rounded-[12px]" onClick={(e)=>handleClick(e, 'VVIP')}>
              <p className="font-roboto text-[24px] mb-3">
                $150
              </p>

              <p className="font-roboto text-[16px]">
                VVIP ACCESS
              </p>

              <p className="font-roboto text-[14px] text-[#D9D9D9]">
                20/52
              </p>
            </label>

          </div>

          <p className="font-roboto text-[16px] mb-2 mt-8">
            Number of Tickets
          </p>

          <select name="number-of-tickets" id="number-of-tickets" className="border border-[#07373F] px-2 py-3 rounded-[8px]" onChange={(e)=>{handleChange(e)}}>
            <option className="bg-[#12464e]" value="1">1</option>
            <option className="bg-[#12464e]" value="2">2</option>
            <option className="bg-[#12464e]" value="3">3</option>
            <option className="bg-[#12464e]" value="4">4</option>
            <option className="bg-[#12464e]" value="5">5</option>
          </select>

          <div className="flex gap-6 mt-8 font-namum text-[16px] max-[550px]:flex-col-reverse">

            <Link to="/" className="grow border border-[#197686] rounded-[8px] text-[#24A0B5] p-3 flex justify-center items-center">
              Cancel
            </Link>

            <Link to="/details" className="grow bg-[#24A0B5] rounded-[8px] p-3 flex justify-center items-center">
              Next
            </Link>

          </div>
        </div>
      </div>      
    </div>
  )
}

export default TicketSelection
