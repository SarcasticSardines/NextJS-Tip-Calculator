'use client'

import { useEffect, useState } from "react";
import split from '@/app/assets/images/logo.svg'

export default function Home() {

  const [billedAmount, setBilledAmount] = useState<string>("");
  const [partySize, setPartySize] = useState<string>("1");
  const [tiPercent, setTiPercent] = useState<number>(0);
  let customTip: any = "";

  const [tipFive, setTipFive] = useState<boolean>(false);
  const [tipTen, setTipTen] = useState<boolean>(false);
  const [tipFifteen, setTipFifteen] = useState<boolean>(false);
  const [tipTwentyfive, setTipTwentyfive] = useState<boolean>(false);
  const [tipFifty, setTipFifty] = useState<boolean>(false);
  const [tipCustom, setTipCustom] = useState<boolean>(false);
  const [resetTrue, setResetTrue] = useState<boolean>(false);
  const [partyFoul, setPartyFoul] = useState<boolean>(false);


  const [tipPer, setTipPer] = useState<string>("0.00");
  const [totalPer, setTotalPer] = useState<string>("0.00");

  const unchosen: string = "btnDark";
  const chosen: string = "btnLight";

  const noreset: string = "specialBtn w-full";
  const yareset: string = "moreSpecialBtn w-full";

  const partyon: string = "partyInput inputTxt mt-1"
  const partyoff: string = "evilPartyInput inputTxt mt-1"

  // end of variables section

  const choseFive = () => {
    setTipFive(!tipFive);
    console.log(tipFive);
    setTipTen(false);
    setTipFifteen(false);
    setTipTwentyfive(false);
    setTipFifty(false);
    setTipCustom(false);
    handleTotal();
  }

  const choseTen = () => {
    setTipTen(!tipTen);
    setTipFive(false);
    setTipFifteen(false);
    setTipTwentyfive(false);
    setTipFifty(false);
    setTipCustom(false);
    handleTotal();
  }

  const choseFifteen = () => {
    setTipFifteen(!tipFifteen);
    setTipFive(false);
    setTipTen(false);
    setTipTwentyfive(false);
    setTipFifty(false);
    setTipCustom(false);
    handleTotal();
  }

  const choseTwentyfive = () => {
    setTipTwentyfive(!tipTwentyfive);
    setTipFive(false);
    setTipTen(false);
    setTipFifteen(false);
    setTipFifty(false);
    setTipCustom(false);
    handleTotal();
  }

  const choseFifty = () => {
    setTipFifty(!tipFifty);
    setTipFive(false);
    setTipTen(false);
    setTipFifteen(false);
    setTipTwentyfive(false);
    setTipCustom(false);
    handleTotal();
  }

  const choseCustom = (e: any) => {
    setTipCustom(!tipCustom);
    customTip = (e.target.value)
    setTipFive(false);
    setTipTen(false);
    setTipFifteen(false);
    setTipTwentyfive(false);
    setTipFifty(false);
    handleTotal();
  }

  const resetValid = () => {
    if (billedAmount == null || billedAmount == "") {
      setResetTrue(false);
    } else {
      setResetTrue(true);
    }
  }

  // end of boolean focused functions section


  const handleBilled = (e: any) => {
    // parseFloat() to convert the string input into a float with 2 decimal places (.toFixed(2)), will return NaN if value isnt valid number, if NaN return an error message and change outline to red
    if (e.target.value != "" || e.target.value != null || e.target.value != undefined) {
      setBilledAmount(e.target.value)
    } else {
      setBilledAmount("0.00");
    }
    resetValid();
    handleTotal();
  }


  const handleParty = (e: any) => {
    //setPartySize, value will be used in handleTotal to divide up the total and tip per person. whole integers input only- parseInt()
    //if >1 or non number value(returns NaN), displays an error message "Can't be zero" and changes outline color to red/orange
    if (e.target.value != "0" || e.target.value != null || e.target.value != undefined || e.target.value != 0) {
      setPartySize(e.target.value)
      setPartyFoul(false);
    } else if (e.target.value == "0" || e.target.value == null || e.target.value == undefined || e.target.value == 0) {
      setPartyFoul(true);
      setPartySize("1");
    }
    handleTotal();
  }


  const handleTotal = () => {
    //calculation function, outputs final setTipPer and setTotalPer
    // setting selected tip value:
    switch (true) {
      case tipFive:
        setTiPercent(0.05);
        break;
      case tipTen:
        setTiPercent(0.10);
        break;
      case tipFifteen:
        setTiPercent(0.15);
        break;
      case tipTwentyfive:
        setTiPercent(0.25);
        break;
      case tipFifty:
        setTiPercent(0.50);
        break;
      case tipCustom:
        setTiPercent((parseFloat(customTip)));
      default:
        setTiPercent(0.00);
    }

    //setTotalPer(billedAmount / partySize = total per person)
    let totalBill = parseFloat(billedAmount)
    let total: any = totalBill.toFixed(2);
    let party: number = parseInt(partySize);
    let final = (total / party).toString();
    setTotalPer(final);

    //setTipPer((billedAmount * tiPercent) / partySize = tip per person)
    let finaltip = (total * tiPercent).toString();
    setTipPer(finaltip);

  }

  useEffect(() => {
    // handleBilled(e);
    // handleParty(e);
    handleTotal();
  }, [])

  const resetValues = () => {
    //sets all values back to blank/zero
    setBilledAmount("");
    setPartySize("1");
    setTotalPer("0.00");
    setTipPer("0.00");
    setTipFive(false);
    setTipTen(false);
    setTipFifteen(false);
    setTipTwentyfive(false);
    setTipFifty(false);
    setTipCustom(false);

  }


  return (
    <main className="flex flex-col items-center">

      <div className="lg:mt-24 lg:mb-10 py-10">
        <img src={split.src} />
      </div>

      <div className="mainBox lg:grid-cols-2 w-full lg:w-[60%] lg:h-[500px]">

        <div className="grid col-span-1 m-5 lg:w-[475px] lg:ms-8 lg:mt-10">
          <form>
            <label className="labelTxt">Bill</label>
            {/* position absolute the displayed number entered into right side of input */}
            <input className="billInput inputTxt mt-1" onChange={handleBilled} />
          </form>

          <div className="my-5 lg:my-3">
            <label className="labelTxt">Select Tip %</label>
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-x-4 gap-x-5 gap-y-6 lg:mx-0 lg:px-0 py-3">
              <button className={!tipFive ? unchosen : chosen} onClick={choseFive}>5%</button>
              <button className={!tipTen ? unchosen : chosen} onClick={choseTen}>10%</button>
              <button className={!tipFifteen ? unchosen : chosen} onClick={choseFifteen}>15%</button>
              <button className={!tipTwentyfive ? unchosen : chosen} onClick={choseTwentyfive}>25%</button>
              <button className={!tipFifty ? unchosen : chosen} onClick={choseFifty}>50%</button>
              <input placeholder="Custom" className="customInputTxt tipInput" onChange={choseCustom} />
            </div>
          </div>

          <form>
            <label className="labelTxt">Number of People</label>
            <input className={partyFoul ? partyoff : partyon} onChange={handleParty} />
          </form>

        </div>
        <div className="calculation grid col-span-1 m-5">
          <div className="lg:p-10 p-5">
            <form className="py-5 lg:mb-36 me-5 lg:me-0">
              <div className="grid grid-cols-3 lg:mb-7 mb-5">
                <div className="col-span-2">
                  <label className="text-white text-start spaceB">Tip Amount</label>
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
              <button className={!resetTrue ? noreset : yareset} onClick={resetValues}>
                <span>RESET</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="lg:pb-[300px] hideme">
        <p>&nbsp;</p>
      </div>

    </main>
  );
}
