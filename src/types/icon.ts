export interface IconProps {
  name: keyof typeof import("../constants/icons").ICON_PATHS;
  size?: number;
}