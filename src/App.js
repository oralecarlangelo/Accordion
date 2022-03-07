import React from "react";
import Caret from "./assets/Caret";
import datas from "./common/data";

function App() {
  const [selected, setSelected] = React.useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="w-full min-h-[100vh] bg-gray-50 flex justify-center items-center">
      <div>
        {datas.map((data, i) => {
          return (
            <div className="max-w-4xl mb-2 overflow-auto rounded-lg bg-emerald-200">
              <div
                className="flex items-center justify-between p-3 rounded-lg bg-emerald-400"
                onClick={() => toggle(i)}
              >
                <h1 className="text-xl font-semibold">{data.title}</h1>
                <div
                  className={`text-xl transition-all duration-300 ${
                    selected === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <i class="fa-solid fa-angle-down"></i>
                </div>
              </div>
              <div
                className={`p-5 text-sm transition-all duration-500 overflow-hidden ${
                  selected !== i ? "max-h-[0px] p-0" : "max-h-[9999px] p-5"
                }`}
              >
                {data.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
