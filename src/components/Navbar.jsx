const Navbar = () => {
  return (
    <>
      <section className="h-[7vh] bg-black flex justify-end pr-10 items-center">
        <div className="flex gap-2">
          <div className="w-[10em] h-[2em] bg-[#d9d9d9] flex items-center pl-2 rounded-full">
            <div className="border-[2px] border-white border-solid bg-white rounded-full">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path
                fillRule="evenodd"
                d="M8 16A8 8 0 108 0a8 8 0 000 16zm.847-8.145a2.502 2.502 0 10-1.694 0C5.471 8.261 4 9.775 4 11c0 .395.145.995 1 .995h6c.855 0 1-.6 1-.995 0-1.224-1.47-2.74-3.153-3.145z"
              />
            </svg>
            </div>
          </div>

          <div className="flex items-center">
            <svg
              viewBox="0 0 448 512"
              fill="#5e5353"
              height="1.5em"
              width="1.5em"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32v19.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416h384c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3c-31.2-35.2-48.5-80.5-48.5-127.6V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H160c0 17 6.7 33.3 18.7 45.3S207 512 224 512s33.3-6.7 45.3-18.7z" />
            </svg>
          </div>

        </div>
      </section>
    </>
  );
};

export default Navbar;
