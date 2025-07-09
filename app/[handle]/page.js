"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "@/component/Skeleton";
import { toast, Bounce } from "react-toastify";

const Page = () => {
  const { handle } = useParams();
  const [tree, setTree] = useState(null);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const getTree = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/${handle}`);
      const data = await res.json();
      if (res.ok) {
        setTree(data.tree);
        // console.log(data.tree);
      } else {
        // console.log(data);
        toast.error(data.message || "Internal server error", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        // notFound();
      }
    };
    getTree();
  }, []);

  if (!tree) return <Skeleton />;

  return (
    <div className="bg-[#cdd1d6] min-h-screen p-8">
      <div className="relative lg:w-[25vw] mt-10 lg:mt-30 bg-white min-h-[80vh] flex flex-col pt-20 rounded-2xl shadow-gray-100 items-center mx-auto">
        <h1 className="absolute text-lg  left-2 top-2  p-3">@{handle}</h1>
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-25 h-25 rounded-full"
            src={tree.ProfilePicture}
            alt="profile picture"
          />
          <h1 className="capitalize font-bold text-xl">
            {tree.name || "Default name"}
          </h1>
        </div>

        <div className="pt-5 text-center">
          <button
            onClick={() => setShowLinks((prev) => !prev)}
            className="border-b-2 border-black cursor-pointer px-5 py-2 mt-5 rounded-lg bg-gray-100 font-semibold hover:bg-gray-200 transition-all"
          >
            {showLinks ? "Hide Links" : "Show Links"}
          </button>

          <AnimatePresence>
            {showLinks && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col pt-10 gap-5"
              >
                {tree.LinkTree.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 20, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={e.url}
                      target="_blank"
                      className="capitalize cursor-pointer w-60 lg:w-80 text-center bg-gray-200 px-10 rounded-2xl hover:font-bold py-3 block"
                    >
                      {e?.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Page;
