import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSourceService } from "@/services/source";
import { SOURCES, SourceItem } from "@/constants/sources";

const useSourceNav = () => {
  const navigate = useNavigate();
  const { setSource } = useSourceService();

  const onSelect = async (item: SourceItem) => {
    ["spotify", "shairportsync"].includes(item.alias) && (await setSource(item.alias));
    navigate(`/${item.alias}`);
  };

  return { onSelect, activeUri: useSelector((state: any) => state.player.source?.uri) };
};

export { SOURCES };
export default useSourceNav;
