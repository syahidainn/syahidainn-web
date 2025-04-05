"use client";
import { motion } from "motion/react";
import { InView } from "../ui/in-view";
// import Image from "next/image";

export function GalleryHome() {
  return (
    <div className="h-full w-full overflow-auto">
      {/* <div className="mb-20 py-16 text-center text-sm"></div> */}
      <div className="flex items-end justify-center pb-12">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-2 gap-4 px-8 sm:columns-3">
            {[
              "https://res.cloudinary.com/dbvyywl6v/image/upload/w_600,h_400,c_fill,q_auto,f_auto/v1741060443/syahidainn-assets/Events_xmacwj.jpg",
              "https://res.cloudinary.com/dbvyywl6v/image/upload/w_652,h_950,c_fill,q_auto,f_auto/v1741055605/syahidainn-assets/Gallery_Home_1_zysy5o.jpg",
              "https://res.cloudinary.com/dbvyywl6v/image/upload/w_600,h_400,c_fill,q_auto,f_auto/v1741055545/syahidainn-assets/Gallery_Home_4_gkee7g.png",
              "https://res.cloudinary.com/dbvyywl6v/image/upload/w_652,h_950,c_fill,q_auto,f_auto/v1741055634/syahidainn-assets/Gallery_Home_2_r2fa3v.jpg",
              "https://res.cloudinary.com/dbvyywl6v/image/upload/w_600,h_400,c_fill,q_auto,f_auto/v1741060450/syahidainn-assets/Playground_unkf3k.jpg",
              "https://res.cloudinary.com/dbvyywl6v/image/upload/w_578,h_433,c_fill,q_auto,f_auto/v1741055576/syahidainn-assets/Gallery_Home_3_cepmxn.jpg",
              "https://res.cloudinary.com/dbvyywl6v/image/upload/w_808,h_540,c_fill,q_auto,f_auto/v1741060454/syahidainn-assets/Gazebo_umxi3q.jpg",
            ].map((imgSrc, index) => {
              //   console.log("Image URL:", imgSrc);
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                  key={index}
                  className="mb-4"
                >
                  <img
                    // width={800}
                    // height={800}
                    src={imgSrc}
                    alt={`Image placeholder from cosmos.so, index:${index}`}
                    className="size-full rounded-lg object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}
