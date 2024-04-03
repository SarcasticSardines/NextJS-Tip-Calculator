'use client'

import { useState } from "react";
import split from '@/app/assets/images/logo.svg'

export default function Home() {
  const [billedAmount, setBilledAmount] = useState<number>(0);
  const [partySize, setPartySize] = useState<number>(0);
  const [tipPer, setTipPer] = useState<number>(0.00);
  const [totalPer, setTotalPer] = useState<number>(0.00);


  return (
    <main className="flex min-h-screen flex-col items-center">

     <div className="lg:mt-28 lg:mb-14 py-10">
      <img src={split.src}/>
     </div>

     <div className="mainBox lg:grid-cols-2">

      <div className="grid col-span-1 m-5 lg:w-[475px]">
        <form>
          <label className="labelTxt">Bill</label>
          {/* position absolute the displayed number entered into right side of input */}
          <input className="billInput inputTxt"/>
        </form>

        <form className="my-5 lg:my-3">
          <label className="labelTxt">Select Tip %</label>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-x-0 gap-x-5 gap-y-6 lg:mx-0 lg:px-0 py-3">
            <button className="btnDark">5%</button>
            <button className="btnDark">10%</button>
            <button className="btnLight">15%</button>
            <button className="btnDark">25%</button>
            <button className="btnDark">50%</button>
            <input placeholder="Custom" className="customInputTxt tipInput"/>
          </div>
        </form>

        <form>
          <label className="labelTxt">Number of People</label>
          <input className="partyInput inputTxt mt-2"/>
        </form>

      </div>
      <div className="calculation grid col-span-1 m-5">
        <div className="lg:p-10 p-5">
          <form className="py-5 lg:mb-32">
            <div className="grid grid-cols-3 lg:mb-7 mb-5">
              <div className="col-span-2">
            <label className="text-white spaceB">Tip Amount</label>
              <p className="text-start spaceN subTxt text-sm">/ person</p>
              </div>
              <div className="col-span-1">
                <h1 className="totalsTxt">${tipPer}</h1>
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="col-span-2">
            <label className="text-white spaceB">Total</label>
              <p className="text-start spaceN subTxt text-sm">/ person</p>
              </div>
              <div className="col-span-1">
                <h1 className="totalsTxt">${totalPer}</h1>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-end">
            <button className="specialBtn w-full">
              <span>RESET</span>
            </button>
          </div>
        </div>
      </div>

     </div>
    </main>
  );
}
