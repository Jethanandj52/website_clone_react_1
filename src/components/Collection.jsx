import React, { useEffect, useState } from "react";

const Collection = () => {
  const [fakeData, setFakeData] = useState([]);
  const [number, setNumber] = useState(0);

  // Fetch furniture data
  useEffect(() => {
    fetch("https://furniture-dummy-data-api.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        if (data?.payload && Array.isArray(data.payload)) {
          setFakeData(data.payload);
        } else {
          console.error("API response is not as expected", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Generate random number for "Colors"
  useEffect(() => {
    const num = Math.floor(Math.random() * 5) + 1;
    setNumber(num);
  }, []);

  return (
    <div className="mt-10 px-4 sm:px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl sm:text-5xl font-bold">Our Collection</h2>
        <div className="border text-center flex items-center justify-center rounded-full p-4 w-24 h-24 cursor-pointer font-bold">
          View All
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {fakeData.map((item) => (
          <div
            key={item.id}
            className=" rounded-lg  shadow hover:shadow-lg text-center bg-gray-200"
          >
           <div
  className="flex justify-between items-start rounded w-full h-50 p-4 bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${item.img_link})`,
    backgroundSize: "cover", // or "contain" if you want the full image without cropping
  }}
>
  <span className="bg-stone-500 h-6 text-white rounded px-2 text-sm">
    Best Sale
  </span>
  <span>{number} Colors</span>
</div>


            

            <div className="flex justify-between  items-center p-4">
              <div className="text-left">
                <div className="text-sm">{item.name}</div>
                <div className="font-bold">${item.price}</div>
              </div>
              <button className="text-2xl cursor-pointer">🛒</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
