import { create } from "zustand";

const defaultColor = "red";
const defaultBgcolor = "white";

const useTheme = create((set) => ({
  color: defaultColor,
  bgColor: defaultBgcolor,
  setColor: (data1, data2) => set({ color: data1, bgColor: data2 }),
  setDefault: () => set({ color: defaultColor, bgColor: defaultBgcolor }),
}));

export default useTheme;
