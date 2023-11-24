import { connectWallet, createProject } from "../services/blockchain";
import { truncate, useGlobalState } from "../store/Index";

const Demo = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");



  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr);
    return dateObj / 1000;
  };

  const date = new Date("2024-01-01");

  const handleCreateProject = async () => {
    try {
      await createProject({
        title: "Urgent Gaza Appeal",
        description:
          "Our charity partners are delivering aid to our brothers and sisters in Gaza.",
        imageURL:
          "https://ucarecdn.com/7da37110-60df-4243-9943-78844df2f7e5/-/resize/x56/-/format/auto/",
        cost: "256", // Assuming this is the cost in ether or other unit expected by your contract
        expiresAt: toTimestamp(date),
      });
    } catch (error) {
      reportError(error);
    }
  };

  const handleButtonClick = async () => {
    await handleCreateProject();
  };

  return (
    <div>
      <button className="btn btn-primary" id="createProjectButton" onClick={handleButtonClick}>
        Create Project
      </button>

      {connectedAccount ? (
                    <button type="button" className="btn btn-success ">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                        </svg>
           ETH {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
          type="button"
          className="btn btn-primary"
          onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
    </div>
  );
};

export default Demo;
