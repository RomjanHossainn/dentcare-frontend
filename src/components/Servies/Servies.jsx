import { useEffect, useRef, useState } from "react";
import SectionTtile from "../../Shared/SectionTtile/SectionTtile";
import teeth1 from '../../assets/teeth1.png'
import teeth2 from '../../assets/teeth2.png'
import teeth3 from '../../assets/teeth3.png'
import teeth4 from '../../assets/teeth4.png'
import teeth5 from '../../assets/teeth5.png'
import teeth6 from '../../assets/teeth6.png'
import SingleServies from "./SingleServies";



const Servies = () => {

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


    const services = [
      {
        image: teeth1,
        title: "Teeth Whitening",
        description:
          "Revitalize your smile with professional teeth whitening. Achieve a brighter, confident look through safe, effective treatments for a radiant, sparkling appearance",
      },
      {
        image: teeth2,
        title: "Teeth Whitening",
        description:
          "Revitalize your smile with professional teeth whitening. Achieve a brighter, confident look through safe, effective treatments for a radiant, sparkling appearance",
      },
      {
        image: teeth3,
        title: "Teeth Whitening",
        description:
          "Revitalize your smile with professional teeth whitening. Achieve a brighter, confident look through safe, effective treatments for a radiant, sparkling appearance",
      },
      {
        image: teeth4,
        title: "Teeth Whitening",
        description:
          "Revitalize your smile with professional teeth whitening. Achieve a brighter, confident look through safe, effective treatments for a radiant, sparkling appearance",
      },
      {
        image: teeth5,
        title: "Teeth Whitening",
        description:
          "Revitalize your smile with professional teeth whitening. Achieve a brighter, confident look through safe, effective treatments for a radiant, sparkling appearance",
      },
      {
        image: teeth6,
        title: "Teeth Whitening",
        description:
          "Revitalize your smile with professional teeth whitening. Achieve a brighter, confident look through safe, effective treatments for a radiant, sparkling appearance",
      },
    ];


    return (
      <div className="py-12 max-w-screen-xl mx-auto px-4">
        <SectionTtile
          sortTtile={"Our Services"}
          longTtile={"What Service We Offer"}
          description={
            "Exemplary service delivering quality, efficiency, and customer satisfaction. We prioritize your needs with a personalized approach for unparalleled excellenc"
          }
        ></SectionTtile>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <SingleServies service={service} key={index}></SingleServies>
          ))}
        </div>
        <div>
          
        </div>
      </div>
    );
};

export default Servies;