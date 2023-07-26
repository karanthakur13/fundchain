## FundChain

### Introduction

Welcome to the Crowdfunding Application based on the Sepolia-Ethereum chain. This decentralized application (dApp) allows users to create fundraising campaigns, donate to ongoing campaigns, volunteer to help with campaigns, and track campaign details in real-time. The application utilizes the Ethereum blockchain for transparency, security, and immutability.

### Features

1. **Create Campaigns:** Users can create fundraising campaigns by providing essential details such as title, category, description, target amount, deadline, and an image to represent the campaign.

2. **View Ongoing Campaigns:** Users can browse and view all ongoing campaigns on the platform. Each campaign will display its title, category, target amount, and the amount raised so far.

3. **View Hosted Campaigns:** Users can view campaigns hosted by them on a separate dashboard. This dashboard will show all the campaigns they have created.

4. **Donate to Campaigns:** Users can contribute to any campaign by donating Ether (ETH). The donated amount will be added to the campaign's total funds raised.

5. **Volunteer for Campaigns:** Users can volunteer to help with a specific campaign by providing their name. The campaign owner can see the list of volunteers.

6. **Live Count of Donors and Volunteers:** Each campaign page will display a live count of the number of donors and volunteers who have participated in the campaign.

7. **View Donors and Volunteers:** Users can access a specific campaign page to view the list of donors and volunteers who have contributed to the campaign.

### Installation

Follow the steps below to set up the Crowdfunding Application on your local machine:

1. Clone the Repository:

   ```bash
   git clone <repository_url>
   cd fundchain
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Configure Sepolia-Ethereum Chain:

   - Make sure you have a Sepolia-Ethereum chain running, and your local environment is properly configured to interact with the chain.

4. Frontend Setup:

   - Configure the frontend to connect with your Sepolia-Ethereum chain. Update the contract address and other relevant information in the frontend code to ensure it communicates with the deployed smart contract.

5. Deploy Smart Contract:

   - Deploy the provided `FundChain.sol` smart contract on your Sepolia-Ethereum chain. Note down the contract address as you will need it to configure the frontend.

6. Run the Application:

   ```bash
   npm start
   ```

   The application should now be running locally at `http://localhost:3000`.

### Usage

1. Create a Campaign:

   - Click on the "Create Campaign" button and provide the required details to create a new fundraising campaign.

2. View Ongoing Campaigns:

   - Explore the list of ongoing campaigns on the homepage. Click on a campaign card to view more details about a particular campaign.

3. View Hosted Campaigns:

   - Navigate to the "My Campaigns" section to see all the campaigns you have created.

4. Donate to Campaigns:

   - On a specific campaign page, click the "Donate" button and enter the desired amount to contribute to the campaign.

5. Volunteer for Campaigns:

   - Visit a campaign page, click on "Volunteer," and provide your name to volunteer for the campaign.

6. View Donors and Volunteers:

   - On a campaign page, you can find the lists of donors and volunteers who have participated in that campaign.

### Contributing

We welcome contributions to the Crowdfunding Application. If you find any bugs or have ideas for improvements, please feel free to open an issue or submit a pull request.

### License

This Crowdfunding Application is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).


---

This README.md file provides a comprehensive guide to set up and use the Crowdfunding Application. Remember to adjust the installation and configuration steps based on your specific implementation and blockchain setup.
