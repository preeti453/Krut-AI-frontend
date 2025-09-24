import { useParams } from "react-router-dom";
import ToolPage from "./ToolPage";

const ToolPageWrapper = () => {
  const { toolName } = useParams();

  // key={toolName} forces React to unmount/remount ToolPage whenever toolName changes
  return <ToolPage key={toolName} />;
};

export default ToolPageWrapper;