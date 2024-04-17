/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Suspense, use, useState } from "react";

const MessageContainer = ({ message }) => {
  const Message = use(message);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="p-2 px-6 font-semibold bg-green-600 rounded-md">
        <p>{Message}</p>
      </div>
    </Suspense>
  );
};

const fetchMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🚀");
    }, 1000);
  });
};

export const App = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();

  const downloadMessage = async () => {
    setMessage(fetchMessage());
    setShow(true);
  };

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4 px-64 text-white bg-gradient-to-br from-slate-900 to-blue-600">
        {show ? (
          <MessageContainer message={message} />
        ) : (
          <button
            onClick={downloadMessage}
            className="px-4 py-2 text-white rounded-lg shadow-2xl bg-violet-600 "
          >
            Download message
          </button>
        )}
      </div>
    </Suspense>
  );
};
