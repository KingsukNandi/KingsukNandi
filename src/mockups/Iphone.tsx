interface IphoneProps {
  width?: number; // in px
}

const Iphone = ({ width = 300 }: IphoneProps) => {
  const height = width * 2; // maintain aspect ratio

  return (
    <div
      className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] shadow-xl"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Top notch */}
      <div
        className="bg-gray-800 absolute rounded-b-[1rem] left-1/2 -translate-x-1/2"
        style={{
          width: `${width * 0.49}px`,
          height: `${height * 0.03}px`,
          top: 0,
        }}
      ></div>

      {/* Left buttons */}
      <div
        className="bg-gray-800 absolute rounded-s-lg"
        style={{
          width: `${width * 0.01}px`,
          height: `${height * 0.08}px`,
          left: `-${width * 0.057}px`,
          top: `${height * 0.21}px`,
        }}
      ></div>
      <div
        className="bg-gray-800 absolute rounded-s-lg"
        style={{
          width: `${width * 0.01}px`,
          height: `${height * 0.08}px`,
          left: `-${width * 0.057}px`,
          top: `${height * 0.3}px`,
        }}
      ></div>

      {/* Right button */}
      <div
        className="bg-gray-800 absolute rounded-e-lg"
        style={{
          width: `${width * 0.01}px`,
          height: `${height * 0.11}px`,
          right: `-${width * 0.057}px`,
          top: `${height * 0.24}px`,
        }}
      ></div>

      {/* Screen */}
      <div
        className="rounded-[2rem] overflow-hidden bg-white dark:bg-gray-800"
        style={{ width: `${width * 0.91}px`, height: `${height * 0.95}px` }}
      >
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
          className="dark:hidden w-full h-full object-cover"
          alt=""
        />
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
          className="hidden dark:block w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Iphone;
