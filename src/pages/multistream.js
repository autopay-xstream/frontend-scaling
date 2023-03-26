import SendXStream from "../../components/SendXStream";
import { ethers } from "ethers";
import SideBar from "../../components/SideBar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import logowhite from "../../image/LogoWhite.png";
import useXStream from "../../hooks/useXStream";
import { GoerliIcon, PolygonIcon } from "../../components/icons";
import { bridgeDataConfig } from "../../data/config";
import { getNetwork } from "@wagmi/core";
import { useRef, useState } from "react";
import DropSelect from "../../components/DropSelect";
import DatePicker from "../../components/DatePicker";
import FlowRateModal from "../../components/FlowrateModal";
import { Button } from "@mui/material";

const MultiStream = () => {
  const hookXStream = useXStream();
  const receipientRef = useRef([]);
  const costRef = useRef([]);
//   let flowRate = [] // flowrate array

  const chainList = [
    { name: "goerli", id: "5", icon: <GoerliIcon /> },
    { name: "polygon mumbai", id: "80001", icon: <PolygonIcon /> },
  ];

  const [selectedType, setSelectedType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { chain } = getNetwork();

  const calculateFlowRate = (amountInEther) => {
    const now = new Date();
    const endD = new Date(hookXStream.endDate);
    const timeDiff = Math.abs(endD.getTime() - now.getTime());
    console.log(timeDiff);
    const amount = ethers.utils.parseEther(amountInEther.toString());
    const calculatedFlowRate = Math.floor(amount / timeDiff);
    // let result = calculatedFlowRate / 10 ** 18;
    return calculatedFlowRate.toString();
}

  const headerTemplate = () => {
    return (
      <div className="flex items-center justify-between w-full gap-10 ">
        <DropSelect
          selected={hookXStream.fromChain}
          setSelected={hookXStream.setFromChain}
          options={chainList}
          placeholder={"Transfer from chain"}
        />
        <DropSelect
          selected={hookXStream.toChain}
          setSelected={hookXStream.setToChain}
          options={chainList}
          placeholder={"Transfer to chain"}
        />
      </div>
    );
  };

  const middleTemplate = (index) => {
    return (
      <>
        <input
          ref={el => (receipientRef.current[index] = el)}
          className="rounded-lg mt-8 w-full px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none"
          placeholder="Enter  receipient address or ENS"
        />
        <div className="flex items-center justify-between gap-10">
          <DropSelect
            selected={hookXStream.token}
            setSelected={hookXStream.setToken}
            options={
              bridgeDataConfig[chain?.id]?.acceptedTokens
                ? bridgeDataConfig[chain?.id]?.acceptedTokens
                : []
            }
            placeholder={"Select a token"}
          />
          <DatePicker
            selected={hookXStream.endDate}
            setSelected={hookXStream.setEndDate}
          />
          <input
            ref = {el => (costRef.current[index] = el)}
            className="rounded-lg w-full mt-9 px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none"
            placeholder="Select token value or flow rate"
          />
        </div>
      </>
    );
  };

  const [multiTemplateForm, setMultiTemplateForm] = useState([middleTemplate(0)]);


  const multiTemplate = (index) => {
    setMultiTemplateForm([...multiTemplateForm, middleTemplate(index)])
  }

  const showReceipientLog = () => {
    console.log(receipientRef.current);
    // console.log(receipientRef.current[1]);
    // console.log(receipientRef.current[2);
  }

  const callMultiStream = () => {
    let flowRateArray = [];
    let costArray = [];
    let receiverArray = [];
    let approvalAmount = 0;
    for (const element of costRef.current) {
        const flowRate = calculateFlowRate(element.value);
        flowRateArray.push(flowRate);
        costArray.push(element.value);
        approvalAmount = approvalAmount + Number(element.value);
    }
    for (const address of receipientRef.current) {
        receiverArray.push(address.value);
    }
    console.log(flowRateArray, costArray, receiverArray, approvalAmount);
    hookXStream.sendMultiStreamCall(
      receiverArray,
      costArray,
      flowRateArray,
      approvalAmount
    )
  }

  return (
    <>
      <main className="main font-poppins">
        {/* ******************** Navbar ******************** */}

        <div className="navbar flex justify-between p-2 items-center absolute w-full px-4 z-10">
          <div className="navbar-logo flex-auto w-64  py-4 px-3">
            {/* //logo  */}
            <Image src={logowhite} alt="logo" height={40} />
          </div>
          <div className="connect-wallet">
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          </div>
        </div>

        {/* ******************** main ******************** */}

        <div className="flex  min-h-screen">
          {/* ****************main left panel************** */}
          <SideBar />

          {/* ****************main right panel************** */}
          <div className="w-full bg-[#F4F4F4]">
            <div className="inside-main-right">
              {/* <SendXStream /> */}
              <div className="main-container w-full h-screen ">
                <FlowRateModal
                  isOpen={isOpen}
                  selectedType={selectedType}
                  setAmount={hookXStream.setAmount}
                  setIsOpen={() => {
                    setIsOpen(!isOpen);
                  }}
                />
                <div className="max-w-6xl mx-auto mt-16 rounded-2xl bg-white w-full ">
                  <form className="p-10">
                    {headerTemplate()}
                    <br></br>
                    <hr></hr>
                    {
                        multiTemplateForm.map((element, index) => {
                            return (
                                <>
                                {element}   
                                </>
                            )
                        })
                    }
                    <Button onClick={() => multiTemplate(multiTemplateForm.length)}>+</Button>
                    <Button onClick={() => showReceipientLog()}>Show</Button>
                    <Button onClick={() => callMultiStream()}>Send</Button>
                    {/* replicate this whenever + is clicked */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MultiStream;
