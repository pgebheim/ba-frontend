import useSourceNav, { SOURCES } from "@/hooks/useSourceNav";

/**
 * Desktop sidebar: vertical source navigation, shown on lg+ screens.
 * Mobile keeps the touch-optimised horizontal swiper on the Start view.
 */
const Sidebar = () => {
  const { onSelect, activeUri } = useSourceNav();

  return (
    <aside className="hidden lg:flex flex-col w-56 h-full flex-shrink-0 border-r border-white/10 overflow-y-auto p-3 gap-1">
      <div className="px-3 py-2 text-xs uppercase tracking-widest opacity-50">Sources</div>
      {SOURCES.map((item) => (
        <button
          key={item.alias}
          disabled={item.disabled}
          onClick={() => onSelect(item)}
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-200 hover:bg-black/40 ${
            item.disabled ? "opacity-30 cursor-default" : "cursor-pointer"
          } ${activeUri === item.alias ? "text-primary bg-selected" : ""}`}
        >
          <span className="flex-shrink-0">{item.icon}</span>
          <span className="truncate">{item.name}</span>
        </button>
      ))}
      <div className="flex-1" />
      <div className="px-3 py-2 text-[10px] opacity-30">berryaudio fork</div>
    </aside>
  );
};

export default Sidebar;
