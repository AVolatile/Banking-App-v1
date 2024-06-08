import TotalBalanceBox from "@/components/TotalBalanceBox";
import Headerbox from "@/components/ui/Headerbox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Anthony" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
