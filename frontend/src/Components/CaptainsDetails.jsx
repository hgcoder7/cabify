import React from 'react'

const CaptainsDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
            <h4 className="text-lg font-medium">Harshit Gupta</h4>
          </div>
          <div className="">
            <h4 className="text-xl font-semibold">₹295.90</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-11 items-center">
          <div className="text-center">
            <i className=" text-3xl mb-2 font-thin ri-taxi-line"></i>
            <h5 className="text-lg font-medium">1.7</h5>
            <p className="text-sm text-gray-600">Years</p>
          </div>
          <div className="text-center">
            <i className=" text-3xl mb-2 font-thin ri-star-fill"></i>
            <h5 className="text-lg font-medium">4.6</h5>
            <p className="text-sm text-gray-600">Rating</p>
          </div>
          <div className="text-center">
            <i className=" text-3xl mb-2 font-thin ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10h</h5>
            <p className="text-sm text-gray-600">Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainsDetails
