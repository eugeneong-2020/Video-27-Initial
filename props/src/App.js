import { useState } from "react";
import MembershipList from "./components/MembershipList";
import MembershipForm from "./components/MembershipForm";
function App() {
  const [memberships, setMemberships] = useState([
    {
      membershipCode: "SLVR",
      title: "Silver",
      description: "Customer Accumulating $100 spent enjoy 2% discount",
    },
    {
      membershipCode: "GLD",
      title: "Gold",
      description: "Customer Accumulating $500 spent enjoy 5% discount",
    },
    {
      membershipCode: "PLTNM",
      title: "Platinum",
      description: "Customer Accumulating $1000 spent enjoy 10% discount",
    },
  ]);

  const addMembershipHandler = (newMembership) => {
    setMemberships((prevMemberships) => {
      return prevMemberships.concat(newMembership);
    });
  };

  return (
    <div className="App">
      <MembershipForm onAddMembership={addMembershipHandler} />
      <MembershipList memberships={memberships} />
    </div>
  );
}

export default App;
