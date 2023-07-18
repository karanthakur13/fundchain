import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xd87560990E4e6fD69369f984A6E0f02C6C8c7C31"
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );
  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign({
        args: [
          address,
          form.title,
          form.category,
          form.description,
          form.target,
          new Date(form.deadline).getTime(),
          form.image,
        ],
      });

      console.log("successful", data);
    } catch (error) {
      console.log("try again", error);
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract.call("getCampaigns");
    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaigns[i][0],
      title: campaign.title,
      description: campaign.description,
      category: campaign.category,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      fundRaised: ethers.utils.formatEther(campaign.fundRaised.toString()),
      countVolunteer: campaign.volunteers.length.toString(),
      countDonator: campaign.donations.length.toString(),

      image: campaign.image,
      PId: i,
    }));

    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    const allcampaigns = await getCampaigns();
    const filteredCampaign = allcampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaign;
  };

  const donate = async (pId, amount) => {
    const data = await contract.call("donateToCampaign", [pId], {
      value: ethers.utils.parseEther(amount),
    });

    return data;
  };

  const volunteer = async (pId, name) => {
    try {
      const data = await contract.call("volunteer", [pId, name], {});

      console.log("successful", data);
    } catch (error) {
      console.log("Unsuccessful", error);
    }
  };

  const getDonations = async (pId) => {
    const donations = await contract.call("getDoantors", [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  const getVolunteers = async (pId) => {
    const volunteers = await contract.call("getVolunteers", [pId]);
    const numberOfVolunteers = volunteers[0].length;

    const parsedVolunteers = [];

    for (let i = 0; i < numberOfVolunteers; i++) {
      parsedVolunteers.push({
        volunteer_name: volunteers[0][i],
        volunteer: volunteers[1][i],
      });
    }

    return parsedVolunteers;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        volunteer,
        getVolunteers,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
