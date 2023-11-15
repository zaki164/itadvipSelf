const CustomHeader = ({ header }) => {
  return (
    <>
      <h5 className="text-mainColor text-l-xl font-bold">{header?.title}</h5>
      <h3 className="text-2xl-3xl font-bold tracking-wide">
        {header?.sub_title}
      </h3>
    </>
  );
};

export default CustomHeader;
