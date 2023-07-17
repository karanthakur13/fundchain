// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract FundChain {
    struct Campaign {
        address owner;
        string title;
        string category;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 fundRaised;
        string image;
        uint256 countVolunteer;
        address[] donators;
        address[] volunteers;
        string[] names;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public noOfcampaigns = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _category,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage campaign = campaigns[noOfcampaigns];
        // to check feasibility
        require(
            campaign.deadline < block.timestamp,
            " Deadline should be a date in future."
        );
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.category = _category;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.fundRaised = 0;
        campaign.countVolunteer = 0;
        campaign.image = _image;

        noOfcampaigns++;

        return noOfcampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;
        Campaign storage campaign = campaigns[_id];
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        (bool sent, ) = payable(campaign.owner).call{value: amount}("");

        if (sent) {
            campaign.fundRaised = campaign.fundRaised + amount;
        }
    }

    function getDoantors(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](noOfcampaigns);
        for (uint i = 0; i < noOfcampaigns; i++) {
            Campaign storage item = campaigns[i];
            allCampaigns[i] = item;
        }
        return allCampaigns;
    }

    function volunteer(uint256 _id, string memory _name) public {
        Campaign storage campaign = campaigns[_id];
        campaign.volunteers.push(msg.sender);
        campaign.names.push(_name);
    }

    function getVolunteers(
        uint256 _id
    ) public view returns (string[] memory, address[] memory) {
        return (campaigns[_id].names, campaigns[_id].volunteers);
    }
}
