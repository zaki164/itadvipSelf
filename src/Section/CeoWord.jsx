const CeoWord = ({ data }) => {
  return (
    <section id="ceo" className="section_padding">
      <div className="custom-container flex-col gap-6 md:gap-8 flex_center rounded-[53px] pt-8 pb-12 px-10 lg:px-6 bg-[#fffaea]">
        <img
          src={data?.image}
          alt="ceo"
          className="rounded-full w-20 h-20 md:w-36 md:h-36"
        />
        <h3 className="font-bold text-2xl-3xl">{data?.title}</h3>
        <p className="font-medium text-base-l leading-7 md:leading-10 w-90 md:max-w-3xl text-center quoteParagraph">
          {data?.sub_title}
        </p>
      </div>
    </section>
  );
};

export default CeoWord;
