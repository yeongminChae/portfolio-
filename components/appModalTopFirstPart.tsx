import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import koreanAppImg1 from "../pages/cloneCoding/image/koreanApp/koreanAppImg1.png";
import koreanAppImg2 from "../pages/cloneCoding/image/koreanApp/koreanAppImg2.png";
import koreanAppImg3 from "../pages/cloneCoding/image/koreanApp/koreanAppImg3.png";
import koreanAppImg4 from "../pages/cloneCoding/image/koreanApp/koreanAppImg4.png";
import koreanAppImg5 from "../pages/cloneCoding/image/koreanApp/koreanAppImg5.png";
import paintAppImg1 from "../pages/cloneCoding/image/paintApp/paintAppImg1.png";
import paintAppImg2 from "../pages/cloneCoding/image/paintApp/paintAppImg2.png";
import paintAppImg3 from "../pages/cloneCoding/image/paintApp/paintAppImg3.png";
import paintAppImg4 from "../pages/cloneCoding/image/paintApp/paintAppImg4.png";
import paintAppImg5 from "../pages/cloneCoding/image/paintApp/paintAppImg5.png";
import youtubeAppImg1 from "../pages/cloneCoding/image/youtubeApp/youtubeAppImg1.png";
import youtubeAppImg2 from "../pages/cloneCoding/image/youtubeApp/youtubeAppImg2.png";
import youtubeAppImg3 from "../pages/cloneCoding/image/youtubeApp/youtubeAppImg3.png";
import youtubeAppImg4 from "../pages/cloneCoding/image/youtubeApp/youtubeAppImg4.png";
import youtubeAppImg5 from "../pages/cloneCoding/image/youtubeApp/youtubeAppImg5.png";
import todoAppImg1 from "../pages/cloneCoding/image/todoApp/todoAppImg1.png";
import todoAppImg2 from "../pages/cloneCoding/image/todoApp/todoAppImg2.png";
import todoAppImg3 from "../pages/cloneCoding/image/todoApp/todoAppImg3.png";
import todoAppImg4 from "../pages/cloneCoding/image/todoApp/todoAppImg4.png";
import jobsAppimg1 from "../pages/cloneCoding/image/jobsApp/jobsAppimg1.png";
import jobsAppimg2 from "../pages/cloneCoding/image/jobsApp/jobsAppimg2.png";
import jobsAppimg3 from "../pages/cloneCoding/image/jobsApp/jobsAppimg3.png";
import cartAppImg1 from "../pages/cloneCoding/image/cartApp/cartAppImg1.png";
import cartAppImg2 from "../pages/cloneCoding/image/cartApp/cartAppImg2.png";
import cartAppImg3 from "../pages/cloneCoding/image/cartApp/cartAppImg3.png";
import cartAppImg4 from "../pages/cloneCoding/image/cartApp/cartAppImg4.png";
import cartAppImg5 from "../pages/cloneCoding/image/cartApp/cartAppImg5.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AppModalTopFirstPart() {
  const router = useRouter();
  const [index, setIndex] = useState(1);
  const [back, setBack] = useState(false);
  const [image, setImage] = useState<StaticImageData>();
  const [key, setKey] = useState("");
  const currentLoca = router.asPath.split("/");
  const onNextclick = () => {
    setBack(false);
    setIndex((prev) => (prev === 5 ? 5 : prev + 1));
  };
  const onPrevclick = () => {
    setBack(true);
    setIndex((prev) => (prev == 1 ? 1 : prev - 1));
  };
  const customValue = {
    direction: back,
  };
  useEffect(() => {
    if (index === 1) {
      if (currentLoca[3] === "KoreanLanguage") {
        setImage(koreanAppImg1);
      } else if (currentLoca[3] === "Paint") {
        setImage(paintAppImg1);
      } else if (currentLoca[3] === "YouTube") {
        setImage(youtubeAppImg1);
      } else if (currentLoca[3] === "ToDo") {
        setImage(todoAppImg1);
      } else if (currentLoca[3] === "Jobs") {
        setImage(jobsAppimg1);
      } else if (currentLoca[3] === "Cart") {
        setImage(cartAppImg1);
      }
      setKey(index + "");
    } else if (index === 2) {
      if (currentLoca[3] === "KoreanLanguage") {
        setImage(koreanAppImg2);
      } else if (currentLoca[3] === "Paint") {
        setImage(paintAppImg2);
      } else if (currentLoca[3] === "YouTube") {
        setImage(youtubeAppImg2);
      } else if (currentLoca[3] === "ToDo") {
        setImage(todoAppImg2);
      } else if (currentLoca[3] === "Jobs") {
        setImage(jobsAppimg2);
      } else if (currentLoca[3] === "Cart") {
        setImage(cartAppImg2);
      }
      setKey(index + "");
    } else if (index === 3) {
      if (currentLoca[3] === "KoreanLanguage") {
        setImage(koreanAppImg3);
      } else if (currentLoca[3] === "Paint") {
        setImage(paintAppImg3);
      } else if (currentLoca[3] === "YouTube") {
        setImage(youtubeAppImg3);
      } else if (currentLoca[3] === "ToDo") {
        setImage(todoAppImg3);
      } else if (currentLoca[3] === "Jobs") {
        setImage(jobsAppimg3);
      } else if (currentLoca[3] === "Cart") {
        setImage(cartAppImg3);
      }
      setKey(index + "");
    } else if (index === 4) {
      if (currentLoca[3] === "KoreanLanguage") {
        setImage(koreanAppImg4);
      } else if (currentLoca[3] === "Paint") {
        setImage(paintAppImg4);
      } else if (currentLoca[3] === "YouTube") {
        setImage(youtubeAppImg4);
      } else if (currentLoca[3] === "ToDo") {
        setImage(todoAppImg4);
      } else if (currentLoca[3] === "Cart") {
        setImage(cartAppImg4);
      }
      setKey(index + "");
    } else if (index === 5) {
      if (currentLoca[3] === "KoreanLanguage") {
        setImage(koreanAppImg5);
      } else if (currentLoca[3] === "Paint") {
        setImage(paintAppImg5);
      } else if (currentLoca[3] === "YouTube") {
        setImage(youtubeAppImg5);
      } else if (currentLoca[3] === "Cart") {
        setImage(cartAppImg5);
      }
      setKey(index + "");
    }
  }, [index, image, setImage]);
  return (
    <TopPart className="ml-[1.7rem] mt-5 flex justify-between outline-none">
      <AnimatePresence mode="sync" custom={customValue.direction}>
        <motion.div
          whileHover={{ scale: 1.3, originX: 1, originY: 0.5 }}
          onClick={onPrevclick}
          key="prev"
          className="absolute left-2 mt-20 cursor-pointer sm:mt-24 md:mt-28"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-4 w-4 "
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute ml-4 h-48 w-[50%] snap-x sm:ml-8 sm:h-56 sm:w-[27.5rem] md:ml-14 md:h-60 md:w-[30rem] xl:ml-9 xl:h-64 xl:w-[32rem] "
        >
          {image && (
            <Image
              src={image}
              alt="AppImg"
              key={key}
              layout="fill"
              placeholder="blur"
              quality={100}
              onClick={() => window.open(image.src)}
              className="cursor-pointer snap-center overflow-hidden rounded-3xl object-cover shadow-md ease-out "
            />
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, originX: 1, originY: 0.5 }}
          onClick={onNextclick}
          key="next"
          className="absolute right-[20rem] mt-20 cursor-pointer sm:right-2 sm:mt-24 md:mt-28 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512 "
            className="h-4 w-4 "
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </motion.div>
      </AnimatePresence>
    </TopPart>
  );
}

const TopPart = styled(motion.div)`
  /* background-image: linear-gradient(to top, white, transparent); */
`;