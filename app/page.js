"use client";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [linktree, setLinktree] = useState("bittre.nn/....");
const router=useRouter();
  return (
    <main>
      <section className="h-[100vh]   bg-[#254f1a]  ">
        <div className="grid grid-cols-2  w-[80vw] mx-auto  pt-60 items-center gap-10">
          <div className="px-10">
            <h1 className="text-8xl py-4 font-black text-yellow-400">
              Everything you are. In one, simple link in bio.
            </h1>
            <h3 className="text-2xl font-semibold text-white">
              Join 70M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </h3>
            <div className=" m-5 ml-0 mt-10">
              <input
                readOnly
                className=" w-80 pointer-events-none py-5 px-3 text-lg text-gray-500 font-semibold rounded-xl bg-white"
                value={linktree}
              ></input>
              <button
                onClick={() => {
                  router.push("/generate")
                }}
                className=" cursor-pointer w-60 py-5 px-3 texy-lg ml-3 bg-[#E9C0E9] rounded-full font-semibold"
              >
                Claim Your Linktree
              </button>
            </div>
          </div>
          <div>
            {" "}
            <img src="home.png" alt="home image" />
          </div>
        </div>
      </section>
      <section className="h-[100vh] bg-[#E9C0E9]">
        <div className="grid grid-cols-2  w-[80vw] mx-auto  pt-60 items-center gap-10">
          <div>
            <img src="home2.png" />
          </div>
          <div>
            <h1 className="text-7xl py-4 font-black text-[#502274]">
              Create and customize your Linktree in minutes
            </h1>
            <h3 className="text-2xl pt-5 ">
              Connect your TikTok, Instagram, Twitter, website, store, videos,
              music, podcast, events and more. It all comes together in a link
              in bio landing page designed to convert.
            </h3>
            <button  onClick={() => {
                  router.push("/generate")
                }} className="bg-[#502274] cursor-pointer px-15 py-5 font-semibold mt-10 text-white text-xl rounded-full">
              {" "}
              Get Started for free
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
