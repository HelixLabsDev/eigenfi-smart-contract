async function main() {
    const initialOwner = "0xCa28eaA4fFF145c26074F3EA08b657B288401E33";
    const mockToken = await ethers.deployContract("MockToken", [initialOwner]);
    const mockTokenAddress = await mockToken.getAddress();
    console.log("MockToken Contract Address: ", mockTokenAddress);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });