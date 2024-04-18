/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Suspense, use, useState } from "react";
import { ThemeContext } from "./provider/ThemeProvider";

export const App = () => {
  const { toggleTheme, setToggleTheme } = use(ThemeContext);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4 px-64 text-white bg-gradient-to-br from-slate-900 to-blue-600">
        <div
          className={`p-4 rounded-lg ${
            toggleTheme ? " bg-slate-800 " : "bg-violet-600"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          porro dignissimos nisi ipsam nesciunt quibusdam enim tenetur aliquid
          sequi tempora, molestias id rem laudantium architecto neque fugiat
          voluptas beatae cupiditate quod blanditiis dolores. Dignissimos quos
          dolorem, quas enim dolorum officia.
        </div>
        <button
          onClick={() => setToggleTheme(!toggleTheme)}
          className="px-4 py-2 bg-green-600 rounded-lg"
        >
          Change Theme
        </button>
      </div>
    </Suspense>
  );
};
