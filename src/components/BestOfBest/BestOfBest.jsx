import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import feamleDestrist from '../../assets/professional-female-dentist.jpg'
const BestOfBest = () => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="md:flex items-center gap-16 max-w-[1200px] mx-auto px-4">
      <div className="flex-1">
        <img src={feamleDestrist} className="rounded-md" alt="" />
      </div>
      <div className="flex-1 space-y-4 mt-6 md:mt-0">
        <h4 className="text-[#4EAAE5] font-semibold text-lg">
          Best Of The Best
        </h4>
        <h1 className="text-4xl font-semibold ">High End Equipments</h1>
        <p className="text-[#8C8C8C]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div>
          <h5 className="text-lg font-semibold text-[#434343] mb-2">
            Endodontic Equipment
          </h5>
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="buffer"
              sx={{ height: "15px", borderRadius: "5px" }}
              value={progress}
              valueBuffer={buffer}
            />
          </Box>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-[#434343] mb-2">
            Operatory Cabinetry
          </h5>
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="buffer"
              sx={{ height: "15px", borderRadius: "5px" }}
              value={progress}
              valueBuffer={buffer}
            />
          </Box>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-[#434343] mb-2">
            Dental Operatory Lights
          </h5>
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="buffer"
              sx={{ height: "15px", borderRadius: "5px" }}
              value={progress}
              valueBuffer={buffer}
            />
          </Box>
        </div>
        <div>
          <h5 className="text-lg font-semibold text-[#434343] mb-2">
            Surgical Microscopes
          </h5>
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="buffer"
              sx={{ height: "15px", borderRadius: "5px",marginBottom:"50px" }}
              value={progress}
              valueBuffer={buffer}
            />
          </Box>
        </div>
        <div>
          <button className="bg-[#4FA9E4] px-9 hover:bg-transparent hover:outline hover:text-[#8e8e8e] hover:outline-[#4FA9E4] outline-1 transition-all ease-in-out duration-300 py-3 text-white rounded-full text-sm font-semibold ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestOfBest;
