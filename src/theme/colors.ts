import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "red" /*  "#1D1746", */,
  primary1: "#1D1746",
  buttonHover: "#145DA0",
  iconHover: "#FFB6C1",
  iconDarkHover: "#000000",
  primaryBright: "pink" /*"#aa8929", */,
  primaryDark: "#FFB6C1" /*  "#aa8929", */,
  secondary: "#FF6666" /* "#7645D9", */,
  success: "#FF6666",
  warning: "#FFB237" /* #8f80ba */,
};

export const brandColors = {
  binance: "#0000FF",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f1f1",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#B0B0B0", //  "#AFEEEE",
  tertiary: "rgb(12, 12, 78)" /* "#EFF4F5",*/,
  text: "#1D1746" /*   "#FF0000" "#452A7A" */,
  textDisabled: "#BDC2C4",
  textSubtle: "#000034" /* "#8f80ba" */,
  borderColor: "#E9EAEB",
  card: "#f2f8fb",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#EAE2FC" /* "#9A6AFF", */,
  background: "#000034" /* "#343135", */,
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "red", // "#AFEEEE",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF" /* "#353547", */,
  borderColor: "#524B63",
  card: "#000067", //   "#000034",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
