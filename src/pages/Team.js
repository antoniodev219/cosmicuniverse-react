import React from "react";
import {TEAM} from "../teamData";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="section-title pb-0 pt-5">
          <h2>Our Team</h2>
        </div>
        <div className="row">
          {TEAM.map((item) => {
            return (
              <div className=" col-lg-4 mb-4 d-flex align-items-stretch">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body text-center p-0">
                      <img alt="" className="img-fluid rounded-circle" src={item.wizardId ? `https://images.cosmicuniverse.io/wizards/${item.wizardId}` : item.img}/>
                      <div className="title">{item.username || item.name}</div>
                      {item.name && item.username && <div className="subtitle mb-1">{item.name}</div>}
                      <div className="subtitle mb-3">{item.title}</div>
                      <p className="desc">{item.desc}</p>
                      {item.desc2 && <><br /><p className="desc">{item.desc2}</p></>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;