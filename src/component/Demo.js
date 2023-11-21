import { createProject } from "../services/blockchain";

const Demo = () => {
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
      <button id="createProjectButton" onClick={handleButtonClick}>
        Create Project
      </button>
    </div>
  );
};

export default Demo;
