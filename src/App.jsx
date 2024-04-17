// import { useEffect, useState } from "react";
// export function App() {
//   const [joke, setJoke] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchJokes = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("https://api.chucknorris.io/jokes/random");
//       const data = await res.json();
//       setJoke(data?.value);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJokes();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center w-full h-screen gap-4 px-64 text-white bg-gradient-to-br from-slate-900 to-blue-600">
//       <h1 className="text-4xl font-black">Chuck Norris Jokes</h1>
//       {loading ? (
//         <h1 className="p-2">Loading...</h1>
//       ) : (
//         <p className="p-2 px-6 font-semibold bg-green-600 rounded-md">{joke}</p>
//       )}
//     </div>
//   );
// }








import { Suspense, use } from "react";

const fetchJokes = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

const JokeItem = () => {
  const joke = use(fetchJokes());

  return (
    <div className="p-2 px-6 font-semibold bg-green-600 rounded-md">
      <h1>{joke?.value}</h1>
    </div>
  );
};

export const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4 px-64 text-white bg-gradient-to-br from-slate-900 to-blue-600">
        <h1>Chuck Norris Jokes</h1>

        <JokeItem />
      </div>
    </Suspense>
  );
};
