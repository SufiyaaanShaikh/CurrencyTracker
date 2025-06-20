import React, { useContext } from "react";
import { ThemeContext } from "../common/ThemeProvider";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";

function SupportTeam() {
  const { isDark } = useContext(ThemeContext);
   const navigate = useNavigate();
  return (
    <div
      className={`w-full h-[40vh] ${isDark ? "dark:bg-zinc-900 " : " bg-white"}`}
    >
      <div className={`flex m-auto max-w-7xl py-2 px-4 flex-col items-center justify-center h-full  bg-gray-100 ${isDark ? "dark:bg-zinc-900" : "bg-white"}`}>
        <h3 className={`text-3xl font-medium mb-2 text-center ${isDark ? " text-gray-200" : "  text-gray-800"}`}>
          Want to talk to our Support team?
        </h3>
        <p className={`text-gray-600 text-sm ${isDark ? "dark:text-gray-300" : " text-gray-700"} text-center mt-2`}>
          We are here to help you with any questions or issues you may have.
        </p>
        <Button
          variant="secondary"
          className="mt-10 cursor-pointer rounded-lg"
          onClick={() => navigate("/contact")}
        >
          {" "}
          Ask you Question{" "}
        </Button>
      </div>
    </div>
  );
}

export default SupportTeam;
