import TestTokenAbi from "@/data/TestTokenAbi.json";
import {
  bridgeDataConfig,
  chainDomains,
  subgraphURIs,
  superTokensMapping,
} from "@/data/config";
import destinationAbi from "@/data/destinationAbi.json";
import originAbi from "@/data/originAbi.json";
import {
  fetchTokenStatistic,
  fetchxStreamInflow,
  fetchxStreamOutflow,
  superfluidInflowStreamData,
} from "@/helpers/xStreamSubgraph";
import { Framework } from "@superfluid-finance/sdk-core";
import { fetchBalance, getNetwork } from "@wagmi/core";
import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils.js";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import dayjs from "dayjs";
import { formatFlowrate } from "@/helpers/formatHelper";
import { create } from "@connext/sdk";
import { sdkConfig } from "@/helpers/connextSDK";

const useXStream = () => {
  const { address, isConnected } = useAccount();
  const [userEvents, setUserEvents] = useState([]);
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState();
  const [amount, setAmount] = useState(0);
  const [toChain, setToChain] = useState();
  const [fromChain, setFromChain] = useState();
  const [receipient, setReceipient] = useState();
  const [testFlowRate, setTestFlowRate] = useState(0);

  

};
export default useXStream;
