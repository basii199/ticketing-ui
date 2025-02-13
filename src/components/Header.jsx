const Header = () => {
  return (
    <>
      <div className="flex font-namum h-[76px] items-center justify-between bg-[#05252C]/40 border border-[#197686] rounded-[24px] p-[16px] min-[600px]:fixed left-0 right-0 z-50">


        <div className="flex gap-2 items-center">
          <div className="border border-[#0E464F] rounded-[12px] bg-[#052F35]">
            <img className="m-[7px] w-[20px]" src="icons/ticket.svg" alt="ticket icon"/>
          </div>

          <div>
            <img className="w-[44px]" src="icons/ticz.svg" alt="ticx logo" />
          </div>
        </div>


        <div className="flex p-[10px] gap-[26px] max-[500px]:hidden">
          <p className="font">
            Events
          </p>

          <p className="text-[#B3B3B3] max-[600px]:hidden">
            My Tickets
          </p>
          
          <p className="text-[#B3B3B3] max-[700px]:hidden"> 
            About Project
          </p>
        </div>

       
        <button className="bg-white text-black px-[24px] py-[16px] rounded-[12px] flex items-center gap-2 text-[16px] max-[500px]:text-[14px]">
          MY TICKETS

          <img src="icons/right-arrow.svg" alt="right arrow" />
        </button>
      </div>

      <div className="min-[600px]:h-[76px]">

      </div>
    </>
  )
}

export default Header
