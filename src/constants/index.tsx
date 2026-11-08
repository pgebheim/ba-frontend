const dev = import.meta.env.DEV;
const devHost = import.meta.env.VITE_DEV_HOST;

// host includes the port so the socket/RPC follow wherever the UI is
// served from (vite preview, :8080 direct, nginx :80 where it's empty)
const host = dev ? devHost : window.location.host;

const httpProtocol = window.location.protocol;
const wsProtocol = httpProtocol === "https:" ? "wss:" : "ws:";

export const SERVER_URL = `${httpProtocol}//${host}`;
export const WEBSOCKET_URL = `${wsProtocol}//${host}/ws`;

export const WEBRTC_URL = `${httpProtocol}//${host}:8082/stream`;
export const RPC_URL = `${httpProtocol}//${host}/rpc`;
export const STROKE_WIDTH = 1.5;

export const ICON_WEIGHT = "light";
export const ICON_FILL = "fill";
export const ICON_XL = 70;
export const ICON_LG = 40;
export const ICON_MD = 30;
export const ICON_SM = 25;
export const ICON_XS = 20;

export const WLAN_DEVICE = "wlan0";
export const ETH_DEVICE = "eth0";

export const LOCAL_IP = "127.0.0.1";
