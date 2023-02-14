import {useEffect} from "react";

export default function Modal({isModalOpen, showCurrentItem}) {
const {name, price, imageUrl, desc} = showCurrentItem;
  useEffect(() =>{
    return () =>{
      showCurrentItem = {};
    }
  })

  return (
    <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none z-50"
          >
            <div className="relative sm:w-[80%] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {name}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex gap-3">
                  <img src={imageUrl} alt="" className="rounded w-32" />
                  <div className="flex flex-col gap-5">
                    <div>
                      <h2 className="font-extrabold text-lg uppercase">Description</h2>
                      <p>{desc}</p>
                    </div>
                    <div>
                      <p><span className="font-bold mr-2">Price:</span> {price}€</p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-amber-50 font-bold uppercase py-1 px-2 bg-slate-900 hover:bg-slate-700 rounded"
                    type="button"
                    onClick={isModalOpen}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  );
}