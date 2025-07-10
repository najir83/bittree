"use client";
import React, { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { Camera, Mail, User } from "lucide-react";
import Link from "next/link";

const GenerateClient = () => {
  const searchParams = useSearchParams();
  const [authrizedHandle, setAuthorizedHandle] = useState("");
  const [handle, setHandle] = useState(searchParams.get("handle") || "");
  const [linkTree, setLinkTree] = useState([{ label: "", url: "" }]);
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [handles, setHandles] = useState(new Set());

  const [handleError, setHandleError] = useState("handle is too small");
  const [isSubmitting, setisSubmitting] = useState(0);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // console.log(reader);
    reader.onload = async () => {
      const base64Image = reader.result;
      // console.log(base64Image);
      setPicture(base64Image);
    };
  };
  useEffect(() => {
    const getHandles = async () => {
      //   console.log(`${process.env.NEXT_PUBLIC_HOST}/generate`);
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/generate`);
      const data = await res.json();
      const st = new Set();
      data.handles.forEach((hd) => {
        st.add(hd.handle);
      });
      //   console.log(st);
      setHandles(st);
    };
    getHandles();
  }, []);
  useEffect(() => {
    if (handle.length < 2) {
      setHandleError("handle is too small.");
    } else if (handles.has(handle)) {
      setHandleError("This handle is already taken.");
    } else {
      setHandleError("");
    }
  }, [handles]);
  const addLink = () => {
    setLinkTree([...linkTree, { label: "", url: "" }]);
  };

  const updateLink = (index, field, value) => {
    const updated = [...linkTree];
    updated[index][field] = value;
    setLinkTree(updated);
  };
  const handleSubmit = async () => {
    setAuthorizedHandle("");
    if (!handle) {
      toast.warn("handle is required..", {
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
      return;
    }
    setisSubmitting(1);
    const raw = JSON.stringify({
      handle: handle,
      LinkTree: linkTree,
      picture,
      name,
    });
    // console.log(raw);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
    });
    if (res.ok) {
      toast.success("Shorten url generated successfully", {
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
      setAuthorizedHandle(handle);
      setHandle("");
      setLinkTree([{ label: "", url: "" }]);
      setPicture("");
      setName("");

      setisSubmitting(0);
    } else {
      // const data = await res.json();
      // console.log(data);
      toast.error(
        res.status == 409
          ? `handle "${handle}" is not available`
          : "Internal Server Error",
        {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      setHandle("");
      setLinkTree([{ label: "", url: "" }]);
      setPicture("");
      setName("");

      setisSubmitting(0);

      // console.log(res);
    }
  };
  // console.log(process.env.NEXT_PUBLIC_URL_STARTS)
  return (
    <div className="bg-[#cdd1d6] min-h-screen p-3 lg:p-8">
      <div className="lg:max-w-7xl pt-50 mx-auto grid md:grid-cols-2 gap-10 lg:items-start">
        {/* Left: Form */}
        <div className="space-y-10  overflow-hidden  bg-white  p-10 lg:p-10 rounded-3xl shadow-xl">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 text-center">
            Create Your BitTree
          </h1>

          {/* Step 1: Handle */}
          <div>
            <p className="text-lg  lg:text-xl font-semibold mb-2">
              Step 1: Claim your handle
            </p>
            <input
              value={handle}
              onChange={(e) => {
                const value = e.target.value;
                if (e.target.value.length < 2) {
                  setHandleError("handle is too small.");
                } else if (handles.has(value)) {
                  setHandleError("This handle is already taken.");
                } else {
                  setHandleError("");
                }
                setHandle(value);
              }}
              className="w-full lg:w-70 bg-gray-100 p-3 lowercase rounded-xl lg:text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="e.g., najir"
            />
            {handleError ? (
              <p className="text-red-500 text-sm mt-1">{handleError}</p>
            ) : (
              <p className="text-green-400 text-sm mt-1">
                This handle is available{" "}
              </p>
            )}
          </div>

          {/* Step 2: Add Links */}
          <div>
            <p className="text-lg lg:text-xl font-semibold mb-2">
              Step 2: Enter Your Name
            </p>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="focus:outline-none focus:ring-2 focus:ring-teal-500 w-full  lg:w-70 lg:text-lg capitalize bg-gray-100 p-3 rounded-xl "
              placeholder=" Sk Najir"
            />
          </div>
          <div>
            <p className="text-lg lg:text-xl font-semibold mb-2">
              Step 2: Add Your Links
            </p>
            {linkTree.map((link, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:space-x-4 lg:block gap-4 mb-3"
              >
                <input
                  value={link.label}
                  onChange={(e) => updateLink(idx, "label", e.target.value)}
                  className=" bg-gray-100 p-3 capitalize rounded-xl text-sm focus:outline-none"
                  placeholder="Label (e.g. Instagram)"
                />
                <input
                  value={link.url}
                  onChange={(e) => updateLink(idx, "url", e.target.value)}
                  className=" bg-gray-100 p-3 rounded-xl text-sm focus:outline-none"
                  placeholder="URL (e.g. https://...)"
                />
                <div
                  className={`border-b-2 ${
                    idx == linkTree.length - 1 ? "hidden" : ""
                  } lg:hidden mb-4 border-gray-500 opacity-33`}
                ></div>
              </div>
            ))}
            <button
              disabled={handleError}
              onClick={addLink}
              className="mt-2 cursor-pointer px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl transition"
            >
              + Add Another Link
            </button>
          </div>

          {/* Step 3: Profile Picture */}
          <div>
            <p className="text-lg  lg:text-xl font-semibold mb-2">
              Step 3: Add Picture
            </p>

            <div className="flex   lg:flex-row lg:justify-between items-center">
              <div className="flex gap-4 text-lg lg:text-xl items-center">
                <Camera className="w-5 h-5 lg:w-6  lg:h-6 text-base-200" />
                <input
                  className="w-50"
                  type="file"
                  id="avatar-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              {picture && (
                <div>
                  <img
                    className="w-10 lg:w-17 rounded-full h-10 ml-3 lg:h-17"
                    src={picture}
                    alt="preview"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              disabled={handleError || isSubmitting}
              onClick={handleSubmit}
              className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white px-4 py-2 lg:px-8 lg:py-3 text-lg rounded-full transition"
            >
              {isSubmitting ? "Creating BitLink" : "🚀 Create Your BitLink"}
            </button>
          </div>
          {authrizedHandle && (
            <div className="text-lg italic">
              Your BitTree URL :{" "}
              <Link
                className="bold p-2 pl-4 font-bold hover:bg-gray-300 "
                target="_blank"
                href={`http://${process.env.NEXT_PUBLIC_URL_STARTS}${authrizedHandle}`}
              >
                {process.env.NEXT_PUBLIC_URL_STARTS}
                {authrizedHandle}
              </Link>
            </div>
          )}
        </div>

        {/* Right: Preview / Image */}
        <div className="rounded-3xl  overflow-hidden">
          <img
            src={"gen2.png"}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GenerateClient;
