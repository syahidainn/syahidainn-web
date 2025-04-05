import React from "react";
import { Tilt } from "../ui/tilt";
import { Spotlight } from "../ui/spotlight";

export default function TiltSpotlight({ children }) {
  return (
    <Tilt
      rotationFactor={6}
      isRevese
      style={{
        transformOrigin: "center center",
      }}
      springOptions={{
        stiffness: 26.7,
        damping: 4.1,
        mass: 0.2,
      }}
      className="group relative"
    >
      <Spotlight
        className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
        size={248}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
      />
      <div className="bg-gray-400  aspect-[4/3]">{children}</div>
    </Tilt>
  );
}
