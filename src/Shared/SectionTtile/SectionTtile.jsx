
const SectionTtile = ({sortTtile,longTtile,description}) => {
    return (
      <div className="text-center space-y-2">
        <h6 className="text-[#4BADE8] font-semibold">{sortTtile}</h6>
        <h3 className="text-3xl text-[#595959] font-semibold">{longTtile}</h3>
        <p className="max-w-2xl  mx-auto text-[#8c8c8c] text-sm">
          {description}
        </p>
      </div>
    );
};

export default SectionTtile;