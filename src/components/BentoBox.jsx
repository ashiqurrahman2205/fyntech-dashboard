import ClientImage from "../assets/Clients.png";
import RetainersImage from "../assets/Retainers.png";

const BentoBox = () => {
  return (
    <>
      <section className="bg-black h-[93vh] ">
        <div className="ml-[5vw] w-[95vw] h-[100%]">
          <div className="w-[95%] h-[100%] mx-auto bg-black grid grid-cols-7 grid-rows-7 gap-y-2 gap-x-4 pb-2">
            <div className="bg-white col-span-4 row-span-2 pt-1 pl-3 rounded-2xl">
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p className="text-lg varela-round-regular">Expenses(AI)</p>
                  <p className="text-3xl varela-round-regular">$21,000</p>
                </div>
                <div className="pr-4 pt-2">
                  <svg
                    fill="#1019EC"
                    viewBox="0 0 16 16"
                    height="2em"
                    width="2em"
                  >
                    <path d="M0 8a8 8 0 1016 0A8 8 0 000 8zm5.904 2.803a.5.5 0 11-.707-.707L9.293 6H6.525a.5.5 0 110-1H10.5a.5.5 0 01.5.5v3.975a.5.5 0 01-1 0V6.707l-4.096 4.096z" />
                  </svg>
                </div>
              </div>
              <div className="text-center text-3xl">
                <p>Graph</p>
              </div>
            </div>

            <div className="bg-red-300 col-span-3 row-span-2">Invoice</div>

            <div className="bg-amber-600 col-span-2 row-span-3">Revenue</div>

            <div className="bg-white col-span-1 row-span-1 rounded-2xl pt-1 pl-2">
              <div className="flex justify-between">
                <div className="">
                  <p className="varela-round-regular text-lg font-bold">
                    Clients
                  </p>
                  <p className="font-['Urbanist'] text-[10px] text-gray-400">
                    increased by 5%
                  </p>
                </div>
                <div className=" pr-2 pt-1">
                  <svg
                    viewBox="0 0 512 512"
                    fill="#066604"
                    height="1em"
                    width="1em"
                  >
                    <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm129-297c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 103c9.4-9.4 24.6-9.4 33.9 0L385 215z" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-end">
                  <p className="text-3xl">21</p>
                </div>
                <div className="flex justify-end items-center pr-2">
                  <img src={ClientImage} alt="" className="h-[1.5em]" />
                </div>
              </div>
            </div>

            <div className="bg-white col-span-1 row-span-1 rounded-2xl pt-1 pl-2">
              <div className="flex justify-between">
                <div className="">
                  <p className="varela-round-regular text-lg font-bold">
                    Retainers
                  </p>
                  <p className="font-['Urbanist'] text-[10px] text-gray-400">
                    increased by 2%
                  </p>
                </div>
                <div className=" pr-2 pt-1">
                  <svg
                    viewBox="0 0 512 512"
                    fill="#066604"
                    height="1em"
                    width="1em"
                  >
                    <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm129-297c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 103c9.4-9.4 24.6-9.4 33.9 0L385 215z" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-end">
                  <p className="text-3xl">3</p>
                </div>
                <div className="flex justify-end items-center pr-2">
                  <img src={RetainersImage} alt="" className="h-[1.5em]" />
                </div>
              </div>
            </div>

            <div className="bg-[#212121] col-span-3 row-span-2 rounded-2xl pt-2 pr-4 pl-4 border-[1.5px] border-solid border-[#f3f3f3] border-opacity-30">
              <div className="flex justify-between varela-round-regular">
                <p className="varela-round-regular text-lg text-white">
                  Project Description
                </p>
                <div className="bg-white rounded-full">
                  <svg
                    fill="#1019EC"
                    viewBox="0 0 16 16"
                    height="2em"
                    width="2em"
                  >
                    <path d="M0 8a8 8 0 1016 0A8 8 0 000 8zm5.904 2.803a.5.5 0 11-.707-.707L9.293 6H6.525a.5.5 0 110-1H10.5a.5.5 0 01.5.5v3.975a.5.5 0 01-1 0V6.707l-4.096 4.096z" />
                  </svg>
                </div>
              </div>

              <div className="bg-[#737373] rounded-2xl border-solid border-[1.5px] font-['Urbanist'] border-white px-2 py-1 my-4 text-md text-[#d9d9d9]">
                <p>
                  The system will leverage machine learning algorithms to
                  analyze historical sales data, market trends, and external
                  factors to predict future sales figures accurately.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-3 justify-between mt-3 varela-round-regular">
                <div className="flex bg-[#d9d9d9] gap-2 p-1 rounded-2xl w-[150px]">
                  <div className="bg-white rounded-full">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="#0478ff"
                      height="1.5em"
                      width="1.5em"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm22.3 665.2l.2 31.7c0 4.4-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4C401.3 723 359.5 672.4 355 617.4c-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.7 29.8 55.4 74.1 61.3V533.9l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-72.9 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.9 46.9 125.9 109.2.5 4.7-3.2 8.8-8 8.8h-44.9c-4 0-7.4-3-7.9-6.9-4-29.2-27.4-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 108.9 116.4 0 75.3-56 117.3-134.3 124.1zM426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-36.9 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.8-.6-5.6-1.3-8.8-2.2V677c42.6-3.8 72-27.2 72-66.4 0-30.7-15.9-50.7-63.2-65.1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-black">
                      Budget:{" "}
                      <span className="text-black text-opacity-55">$150</span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="flex bg-[#d9d9d9] gap-2 p-1 rounded-2xl w-[220px]">
                    <div className="bg-[#0478ff] rounded-full h-[1.5em] w-[1.5em] border-2 border-solid border-white flex justify-center items-center">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fill="#ffffff"
                          d="M8 13a1 1 0 110-2 1 1 0 010 2zM8 17a1 1 0 110-2 1 1 0 010 2zM11 16a1 1 0 102 0 1 1 0 00-2 0zM16 17a1 1 0 110-2 1 1 0 010 2zM11 12a1 1 0 102 0 1 1 0 00-2 0zM16 13a1 1 0 110-2 1 1 0 010 2zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z"
                        />
                        <path
                          fill="#ffffff"
                          fillRule="evenodd"
                          d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm12 2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <p className="text-black mr-1">Deadline:</p>
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M19.5 4h-3V2.5a.5.5 0 00-1 0V4h-7V2.5a.5.5 0 00-1 0V4h-3A2.503 2.503 0 002 6.5v13A2.503 2.503 0 004.5 22h15a2.502 2.502 0 002.5-2.5v-13A2.502 2.502 0 0019.5 4zM21 19.5c0 .828-.672 1.5-1.5 1.5h-15C3.67 21 3 20.328 3 19.5V11h18v8.5zm0-9.5H3V6.5C3 5.672 3.67 5 4.5 5h3v1.5a.5.5 0 001 0V5h7v1.5a.5.5 0 001 0V5h3c.828 0 1.5.672 1.5 1.5V10z" />
                      </svg>
                      <p className="text-[#5F6368] ml-1">12-06-2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white col-span-2 row-span-2 rounded-2xl p-2">
              Remainders
            </div>

            <div className="bg-[#312f2f] col-span-3 row-span-1 py-3 rounded-2xl border-[1.5px] border-solid border-white border-opacity-25">
              <div className="flex justify-around">
                <div>
                  <p className="text-white text-3xl varela-round-regular">
                    8h 39m
                  </p>
                  <p className="text-white text-opacity-90 text-md varela-round-regular">
                    Average Time Spent
                  </p>
                </div>

                <div className="bg-white rounded-full  h-[3.5em] w-[3.5em] flex items-center justify-center border-[0.5em] border-[#0478ff] border-solid">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="#0478ff"
                    height="3em"
                    width="3em"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 01-11.2 1.7L483.3 569.8a7.92 7.92 0 01-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-emerald-500 col-span-5 row-span-2">
              Project OverView
            </div>
            <div className="bg-white col-span-2 row-span-1 px-4 py-2 rounded-2xl space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-md">
                    Project Productivity
                  </p>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="green"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path d="M3 19h18a1.002 1.002 0 00.823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 003 19z" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-x-2">
                <div className="flex justify-center items-center">
                <svg fill="none" viewBox="0 0 15 15" height="1.25em" width="1.25em">
                  <path
                    stroke="currentColor"
                    d="M3.5 0v5m8-5v5M5 8.5l2 2 3.5-4m-9-4h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                  />
                </svg>
                </div>
                <p className="text-lg varela-round-regular">68 <span className="text-opacity-50 text-black">/ Month</span></p>
              </div>
            </div>


            <div className="bg-white col-span-2 row-span-1 px-4 py-2 rounded-2xl space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-md">
                    Team Productivity
                  </p>
                </div>
                <div>
                <svg
      viewBox="0 0 24 24"
      fill="red"
      height="1.5em"
      width="1.5em"
 
    >
      <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
    </svg>
                </div>
              </div>

              <div className="flex gap-x-2">
                <div className="flex justify-center items-center">
                <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path
        fillRule="evenodd"
        d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
      />
    </svg>
                </div>
                <p className="text-lg varela-round-regular">50 <span className="text-opacity-50 text-black">/ Month</span></p>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default BentoBox;
