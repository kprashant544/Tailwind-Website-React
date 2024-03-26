import Cookies from "js-cookie";
import { create } from "zustand";

/* Parse converts string values into objects */
const cookieData = Cookies.get("theme") ? JSON.parse(Cookies.get("theme")) : {};
const defaultColor = cookieData.color || "white";
const defaultBgColor = cookieData.bgColor || "black";

const useTheme = create((set) => ({
  theme: { color: defaultColor, bgColor: defaultBgColor },

  setTheme: (data) => {
    Cookies.set("theme", JSON.stringify(data));
    set({ theme: { color: data.color, bgColor: data.bgColor } });
  },
  setDefault1: () => {
    Cookies.remove("theme"),
      set({ theme: { color: defaultColor, bgColor: defaultBgColor } });
  },
}));

export default useTheme;
