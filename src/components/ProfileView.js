import profileImage from "./Assets/teacher1.jpg";
import React from "react";
import Sidebar from "./Sidebar";

export default function ProfileView() {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-9">
          <div className="w-100 h-76 d-inline-block">
            <div className="container mt-5 my-5 pt-3 em-profile  bg-light">
              <div className="col-m-5">
                <div className="row">
                  <div className="row px-5">
                    <img
                      src={profileImage}
                      roundedCircle
                      style={{
                        width: "200px",
                        height: "200px",
                        marginRight: "20px",
                      }}
                    />
                    <div className="container col mt-5 px-5">
                      <div className="d-flex justify-content-end mt-2">
                        <i class="zmdi zmdi-pin"></i>
                        <h6 className="mx-3">Karachi, Sindh, Pakistan</h6>
                      </div>
                      <div className="d-flex justify-content-end mt-2">
                        <i class="zmdi zmdi-email"></i>
                        <h6 className="mx-3">Email: amirali200@hotmail.com</h6>
                      </div>
                      <div className="col-md-12 bg-light text-right">
                        <button
                          type="button-circle"
                          class="d-inline p-1 m-1 btn-sm bg-primary text-white"
                        >
                          Follow
                        </button>
                        <button
                          type="button"
                          class="d-inline p-1 m-2 bg-primary btn-sm text-white"
                        >
                          Message
                        </button>
                        <button
                          type="button"
                          class="d-inline p-1 bg-primary btn-sm text-white"
                        >
                          Book an appointment
                        </button>
                      </div>
                    </div>
                  </div>.

                </div>
                <div className="profile-head mx-3 mt-3">
                  <h3>Mr. Amir Ali</h3>
                  <h6 className="bg-light mb-5">
                    Machine Learning, Datascience
                  </h6>
                  <h3>Professional Summary:</h3>
                  <p>
                    State the name of the person you are making an introduction
                    to. The polite way to begin an introduction is to start with
                    the name of the person you are making the introduction to.
                    In most situations, this is the person who is older, has a
                    higher-ranking position or that you have known the longest.
                  </p>
                </div>
                <div className="mx-3">
                  <h3 className="mt-5">Experience</h3>
                  <p>
                    <h5>K-Electric</h5>
                    Team Lead - People ConnectTeam Lead - People Connect
                    <br />
                    Full-timeK-Electric · Full-time
                    <br />
                    Mar 2020 - Present · 3 yrsMar 2020 - Present · 3 yrs
                    <br />
                    Karāchi, Sindh, PakistanKarāchi, Sindh, Pakistan
                    <br />
                    Skills: Customer Experience · Mentoring · Team Coordination
                    · Supervisory Skills · Problem Solving · Phone Etiquette ·
                    Customer Relationship Management (CRM) · Team Motivation ·
                    Customer Support · Coaching · Team Mentoring · Stress
                    Management · Stakeholder Management · Interpersonal
                    Communication · Interpersonal Skills · Customer Service ·
                    Team Leadership · Leadership · Team Management · Sales
                    Management · Team Building
                  </p>
                  <br />
                  <p className="text-justify mb-5">
                    <h5>jazz</h5>
                    7 yrs 10 mos7 yrs 10 mos
                    <br />
                    PakistanPakistan
                    <br />
                    Experience Center ExecutiveExperience Center Executive
                    <br />
                    Nov 2014 - Jun 2019 · 4 yrs 8 mosNov 2014 - Jun 2019 · 4 yrs
                    8 mos
                    <br />
                    • Interact with customers to provide and process information
                    in response to inquiries, concerns and requests about
                    products and services.
                    <br />
                    • Managing proper documentation of the activities performed
                    for the customer.
                    <br />
                    • To achieve the target of new sales, pre to post
                    conversion, VAS upsell, MGM upsell and M-Wallet Accounts.
                    <br />
                    • Entering new products Services
                    <br />• Interact with customers to provide and process
                    information in response to inquiries, concerns and requests
                    about products and services. • Managing proper documentation
                    of the activities performed for the customer. • To achieve
                    the target of new sales, pre to post conversion, VAS upsell,
                    MGM upsell and M-Wallet Accounts. • Entering new products &
                    Services …see morek
                  </p>
                </div>
                <div className="mx-3">
                  <h3>Projects</h3>
                  <h5>Title: Credit Card Fraud</h5>
                  <p className="text-justify">
                    Credit cards are an essential financial tool that enables
                    its holders to make purchases and the luxury of paying back
                    the amount later. <br />
                    Credit card holders have an advantage of paying the amount
                    back later after a certain time.
                    <br /> This makes the credit cards an easy target for the
                    fraudsters. Without the owner’s knowledge a good amount of
                    money can be withdrawn by these fraudsters and they make it
                    look like the actual owners of these cards made the
                    withdrawal.
                    <br /> The fraudsters make does this very carefully and
                    anonymously that makes it difficult to stop and even catch
                    them. In 2017, there were data breaches and approximately
                    179 million records among which Credit card frauds were the
                    most common form.
                    <br /> With many frauds happening all over the world with
                    credit card frauds on the top, this makes this a serious
                    issue to look after. Credit card dataset is largely
                    imbalanced because there will be more valid data compared
                    with a fraudulent bone. Banks are now moving to EMV cards,
                    which store their data on integrated circuits making some
                    card payments safer, but still leaving non-card payment
                    frauds on advanced rates. According to 2017, the US Payments
                    Forum report, felons have loosened their focus on
                    conditioning related to CNP deals as the security of chip
                    cards were increased.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
