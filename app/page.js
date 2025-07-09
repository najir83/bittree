"use client";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const Start = process.env.NEXT_PUBLIC_URL_STARTS;
  const [linktree, setLinktree] = useState(Start);
  const router = useRouter();
  return (
    <main>
      <section className="lg:h-[100vh]   bg-[#254f1a]  ">
        <div className="grid lg:grid-cols-2 grid-rows-2  lg:w-[80vw] mx-auto  pt-60 items-center gap-10">
          <div className="px-10">
            <h1 className="text-3xl lg:text-8xl py-4 font-black text-yellow-400">
              Everything you are. In one, simple link in bio.
            </h1>
            <h3 className="text-sm lg:text-2xl font-semibold text-white">
              Join 70M+ people using Bittree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </h3>
            <div className=" m-5 ml-0 mt-10">
              <input
                onChange={(e) => {
                  if (e.target.value.startsWith(Start)) {
                    setLinktree(e.target.value);
                  } else setLinktree(Start);
                }}
                className=" p-3 lg:w-80 lg:py-5 lg:px-3 lg:text-lg text-gray-500 font-semibold rounded-xl bg-white"
                value={linktree}
              ></input>
              <button
                onClick={() => {
                  router.push(`/generate?handle=${linktree.split(Start)[1]}`);
                }}
                className="px-3 py-2 mt-3 cursor-pointer lg:w-60 lg:py-5 lg:px-3 lg:texy-lg lg:ml-3 bg-[#E9C0E9] rounded-full font-semibold"
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
      <section className="lg:h-[100vh] bg-[#E9C0E9]">
        <div className="grid grid-rows-2 lg:grid-cols-2  w-[80vw] mx-auto  pt-60 items-center gap-10">
          <div>
            <img src="home2.png" />
          </div>
          <div>
            <h1 className=" text-2xl lg:text-7xl py-4 font-black text-[#502274]">
              Create and customize your Bittree in minutes
            </h1>
            <h3 className="text-sm lg:text-2xl pt-5 ">
              Connect your TikTok, Instagram, Twitter, website, store, videos,
              music, podcast, events and more. It all comes together in a link
              in bio landing page designed to convert.
            </h3>
            <button
              onClick={() => {
                router.push("/generate");
              }}
              className="bg-[#502274] px-3 py-2 cursor-pointer lg:px-15 lg:py-5 font-semibold mt-10 text-white text-xl rounded-full"
            >
              {" "}
              Get Started for free
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
