import React, { useEffect } from "react";

const MyModal = ({ handleClose }) => {

  // Disables the scroll behaviour in background when Modal pops up
  useEffect(()=>{
    document.body.style.overflowY="hidden";
    return()=>{
      document.body.style.overflowY="scroll";
    };
  },[])

  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-30 backdrop-blur-sm flex justify-center items-center">
      </div>

      {/* Modal Box */}
      <div 
        className="fixed inset-0 flex justify-center items-center z-50">
        <div className="w-1/3 bg-white text-black border rounded-xl px-20 py-10 shadow-lg flex flex-col items-center gap-5 mx-auto">
          <h2 className="text-3xl font-extrabold text-black">Description</h2>
          <p className="text-2xl font-bold max-w-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            laboriosam.
          </p>
          <button
            onClick={handleClose}
            className="mt-4 text-xl w-full px-5 py-2 bg-orange-500 text-center text-white font-medium rounded-md"
          >
            Exit
          </button>
        </div>
      </div>
    </>
  );
};

export default MyModal;
