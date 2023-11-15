const FooterTitle = ({ title }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <h5 className=" text-l-xl font-bold">{title}</h5>
      <div className="w-full h-[1px] bg-[#FFCC59]/50 relative">
        <div
          className={`w-14 md:w-16 lg:w-20 bg-[#FFCC59] h-3 absolute top-0 rtl:right-0 ltr:left-0 -translate-y-1/2 rounded-2xl`}
        ></div>
      </div>
    </div>
  );
};

export default FooterTitle;
