import React from "react";
import Navbar from "../components/main/Navbar";
import TeamHeader from "../components/team/teamHeader";

function Team() {
  return (
    <>
      <Navbar />
      <div id="team">
        <TeamHeader />
      </div>
    </>
  );
}

export default Team;
