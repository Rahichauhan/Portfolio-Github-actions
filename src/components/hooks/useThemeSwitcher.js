import React, { use, useEffect, useState } from "react";
//If is user requested for light or dark color theme then use this cSS property prefer-color-scheme
const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const [mode, setMode] = useState("");
  //check for the user's preference and device settings fo the light or dark mode of the website
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    
    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
      else{
        let check=mediaQuery.matches ?"dark ": "light"
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return ()=>mediaQuery.removeEventListener("change",handleChange);
  },[]);

//Update the values in the local storage


useEffect(()=>{

},[]);
  useEffect(()=>{
if(mode === "dark")
{
  window.localStorage.setItem("theme","dark");
  document.documentElement.classList.add("dark");
}
if(mode ==="light"){
  window.localStorage.setItem("theme","light");
  document.documentElement.classList.remove("dark");
}
  },[mode])

 return [mode,setMode];
};

export default useThemeSwitcher;