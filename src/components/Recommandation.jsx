import React from 'react'
// import recommand1 from '../Images'
import recommand1 from '../Images/recommand1.jpg'
import recommand2 from '../Images/recommand2.jpg'



const Recommandation = () => {
  return (
    <div className='text-center'>
        <div className='text-6xl font-bold  mt-10'> Most Recommended Product For You !</div>
        <div className='flex justify-around mt-10'>
          
  <div className="   rounded w-140 h-100 p-4 bg-center bg-no-repeat flex flex-col justify-center items-center"
  style={{
    backgroundImage: `url(${recommand1})`,
    backgroundSize: "cover", // or "contain" if you want the full image without cropping
    alignItems:"center",
    
  }}>
    <div className='text-white   text-4xl font-bold '>Dinning Room</div>
    <div className='  w-20 h-20 rounded-full text-center items-center flex justify-center mt-5 cursor-pointer' style={{backgroundColor:"black",color:"white",opacity:0.8}}>Veiw All</div>
  </div>
          
            <div
  className="flex justify-between items-start rounded w-140 h-100 p-4  bg-no-repeat"
  style={{
    backgroundImage: `url(${recommand2})`,
    backgroundSize: "cover", // or "contain" if you want the full image without cropping
  }}
></div>
        </div>
    </div>
  )
}

export default Recommandation