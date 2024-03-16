import { useState } from "react";
import Bill from "./Bill";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  function handeResetClick() {
    setBillAmount("");
    setPercentage(0);
    setFriendPercentage(0);
  }
  return (
    <div>
      <Bill
        billAmount={billAmount}
        onBillAmountChange={(e) => {
          const value = Number(e.target.value);
          if (!value) setBillAmount("");
          else setBillAmount(value);
        }}
      />
      <SelectPercentage
        percentage={percentage}
        onPercentageChange={(e) => setPercentage(Number(e.target.value))}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        onPercentageChange={(e) => setFriendPercentage(Number(e.target.value))}
      >
        How did your friend like the service?
      </SelectPercentage>
      {billAmount > 0 && (
        <>
          <Output
            billAmount={billAmount}
            percentage={percentage}
            friendPercentage={friendPercentage}
          />
          <Reset onResetClick={handeResetClick} />
        </>
      )}
    </div>
  );
}

export default App;
