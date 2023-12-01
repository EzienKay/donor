// // Import necessary modules and functions

// // ... (Your existing imports)

// const connectWallet = async () => {
//   try {
//     if (!ethereum) {
//       throw new Error('MetaMask not detected. Please install MetaMask.');
//     }

//     const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//     if (accounts.length > 0) {
//       setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
//     } else {
//       throw new Error('No accounts found.');
//     }
//   } catch (error) {
//     if (error.message.includes('MetaMask not detected')) {
//       // Handle MetaMask installation guidance
//       // You can display a UI element with instructions on how to install MetaMask
//       console.log('MetaMask not detected. Please install MetaMask.');
//       // Example: Display an alert or a message in the UI
//       // alert('MetaMask not detected. Please install MetaMask.');
//     } else if (error.message.includes('No accounts found')) {
//       // Handle case where no accounts are found
//       // You can display a message asking the user to connect their wallet
//       console.log('No accounts found.');
//       // Example: Display an alert or a message in the UI
//       // alert('No accounts found. Please connect your wallet.');
//     } else {
//       // Handle other errors
//       reportError(error);
//       // Example: Display an alert or a message in the UI
//       // alert('An error occurred. Please try again.');
//     }
//   }
// };

// // ... (Your other functions)

// export {
//   connectWallet,
//   // ... (Other exports)
// };

// // ... (Your UpdateProject component)

// // Example of how you might use these functions in your UI components
// // You can add similar error handling for other functions

// // ...









// const handleConnectWallet = async () => {
//   try {
//     await connectWallet();
//   } catch (error) {
//     // Handle errors from connectWallet in the UI
//     console.error(error.message);
//     // Example: Display an alert or a message in the UI
//     // alert('Error connecting wallet. Please try again.');
//   }
// };

// // ...







// const handleCreateProject = async () => {
//   try {
//     await createProject({
//       title: "Urgent Gaza Appeal",
//       description:
//         "Our charity partners are delivering aid to our brothers and sisters in Gaza.",
//       imageURL:
//         "https://ucarecdn.com/defce42f-83ed-43d3-8f79-a1cffc5dd09b/-/resize/624x/-/format/auto/",
//       cost: "256", // Assuming this is the cost in ether or other unit expected by your contract
//       expiresAt: toTimestamp(date),
//     });
//   } catch (error) {
//     reportError(error);
//   }
// };







// const deleteProject = async (id) => {
//   try {
//     if (!ethereum) throw new Error('Please install Metamask');
//     const contract = await getEtheriumContract();
//     const options = {
//       gasLimit: 500000, // Adjust the gas limit based on your contract's needs
//     };
//     await contract.deleteProject(id, options);
//   } catch (error) {
//     reportError(error);
//   }
// };