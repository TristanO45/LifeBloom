import React from "react";
import Navbar from "../components/main/Navbar";
import TeamHeader from "../components/team/teamHeader";
import TeamPage from "../components/team/teamPage";
import TeamCards from "../components/team/teamCards";
import Footer from "../components/main/Footer";

function Team() {
  return (
    <>
      <Navbar />
      <div id="team">
        <TeamHeader />
        <TeamCards />
        {/* <TeamPage /> */}
      </div>
      <Footer />
    </>
  );
}

export default Team;
