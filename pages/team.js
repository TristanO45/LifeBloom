import React from "react";
import Navbar from "../components/main/Navbar";
import TeamHeader from "../components/team/teamHeader";
import Footer from "../components/main/Footer";

function Team() {
  return (
    <>
      <Navbar />
      <div id="team">
        <TeamHeader />
      </div>
      <Footer />
    </>
  );
}

export default Team;
