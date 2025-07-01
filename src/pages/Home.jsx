import React from "react";
import { AsyncImage } from "loadable-image";
import useTitle from "../components/useTitle";
import toroinoue from "../assets/ti.webp";
import border from "../assets/border.svg";

function Home() {
  useTitle("");

  return (
    <>
      <div className="squares">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="background-image">
        <AsyncImage
          className="aspect-177/40 h-auto w-full"
          loader={<div className="bg-ti-bg" />}
          src={toroinoue}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="font-gws text-ti-brown text-center text-[4.5vw] leading-[1] font-normal not-italic select-none max-lg:text-7xl">
          GETLIES
          <br />
          <span className="tracking-[-0.5vw] select-none max-lg:tracking-[-2px] text-2xl inline-block mx-2 align-middle flex items-center justify-center" style={{height: '1.8em'}}>
            x
          </span>
          <br />
          DPRIAN
        </div>
      </div>
      <img
        src={border}
        className="pointer-events-none fixed bottom-0 w-screen max-w-none drop-shadow-(--border) select-none max-xl:h-36 max-xl:w-auto"
        alt=""
      />
    </>
  );
}

export default Home;
