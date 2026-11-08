import { ReactElement } from "react";
import {
  AirplayIcon,
  BluetoothIcon,
  FadersIcon,
  GearIcon,
  GlobeHemisphereWestIcon,
  PlaylistIcon,
  SpeakerHifiIcon,
  SpotifyLogoIcon,
  UsbIcon,
  VinylRecordIcon,
} from "@phosphor-icons/react";
import { ICON_LG, ICON_WEIGHT } from "@/constants";

export type SourceItem = {
  name: string;
  icon: ReactElement;
  alias: string;
  url?: string;
  disabled?: boolean;
  render?: boolean;
  type?: string;
};

export const SOURCES: SourceItem[] = [
  {
    name: "Playlists",
    icon: <PlaylistIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "playlist",
  },
  {
    name: "DSP",
    icon: <FadersIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "settings/dsp",
  },
  {
    name: "Library",
    icon: <VinylRecordIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "local",
  },
  {
    name: "Storage",
    icon: <UsbIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "storage",
  },
  {
    name: "Radio",
    icon: <GlobeHemisphereWestIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "radio",
  },
  {
    name: "Bluetooth",
    icon: <BluetoothIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "bluetooth",
  },
  {
    name: "Spotify",
    icon: <SpotifyLogoIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "spotify",
  },
  {
    name: "Airplay",
    icon: <AirplayIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "shairportsync",
  },
  {
    name: "Multiroom",
    icon: <SpeakerHifiIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "multiroom",
  },
  {
    name: "Settings",
    icon: <GearIcon weight={ICON_WEIGHT} size={ICON_LG} />,
    alias: "settings",
  },
];
