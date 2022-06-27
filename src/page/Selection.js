import React from 'react'

const Selection = () => {
  return (
    <div className="black h-full w-screen">
        <h3 className="font primary-color mx-8 text-xl">Browse By Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-6 gap-3   p-8 ">
            <div className="bg-white shadow-md hover flex flex-col justify-center items-center font text-lg rounded-md cursor-pointer max-h-72">
                <h3 className="z-10 absolute text-white ">Necklaces</h3>
                <img className="bg-cover w-full h-full" src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="necklace" />
            </div>
            <div className="bg-white shadow-md hover flex flex-col justify-center items-center font text-lg rounded-md cursor-pointer max-h-72">
                <h3 className="z-10 absolute text-white ">Earings</h3>
                <img className="bg-cover w-full h-full" src="https://images.pexels.com/photos/3290235/pexels-photo-3290235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="earings" />
            </div>
            <div className="bg-white shadow-md hover flex flex-col justify-center items-center font text-lg rounded-md cursor-pointer max-h-72">
                <h3 className="z-10 absolute text-white ">Rings</h3>
                <img className="bg-cover w-full h-full" src="https://images.pexels.com/photos/204993/pexels-photo-204993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ring" />
            </div>
            <div className="bg-white shadow-md hover flex flex-col justify-center items-center font text-lg rounded-md cursor-pointer max-h-72">
                <h3 className="z-10 absolute text-white ">Bracelets</h3>
                <img className="bg-cover w-full h-full" src="https://images.pexels.com/photos/10460479/pexels-photo-10460479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bracelet" />
            </div>
            <div className="bg-white shadow-md hover flex flex-col justify-center items-center font text-lg rounded-md cursor-pointer max-h-72">
                <h3 className="z-10 absolute text-white ">Engagement Rings</h3>
                <img className="bg-cover w-full h-full" src="https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="engagement ring" />
            </div>
            <div className="bg-white shadow-md hover flex flex-col justify-center items-center font text-lg rounded-md cursor-pointer max-h-72">
                <h3 className="z-10 absolute text-white ">Pendants</h3>
                <img className="bg-cover w-full h-full" src="https://images.pexels.com/photos/12145108/pexels-photo-12145108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pendant" />
            </div>
        </div>
    </div>
  )
}

export default Selection