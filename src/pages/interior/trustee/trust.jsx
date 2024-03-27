import React from "react";
import style from "./trust.module.css";

export const ConstructionTrust = () => {
  return (
    <>
      <div className={style.team_outer_layer}>
        <div className={style.team_layer_2}>
          <h1 className={style.team_header}>Our Guarantee</h1>
          <h4 className={style.team_header_2}>
            You visualise and we will create it
          </h4>
        </div>
        <div className={style.container_outer_about}>
          <div className={style.container_box_about}>
            <img
              src="https://i.ibb.co/2S3fbg0/9004819-clock-time-alarm-schedule-icon.png"
              alt=""
              height={120}
              width={120}
            />
            <h4 className={style.about_numbers}>DELIVERY ON TIME</h4>
          </div>
          <div className={style.container_box_about}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/business-finance-vol-2-56/512/budget_finance_expense_cost-1024.png"
              height={120}
              width={120}
            />

            <h4 className={style.about_numbers}>NO HIDDEN COST</h4>
          </div>
          <div className={style.container_box_about}>
            <img
              src="https://i.ibb.co/8KGhZfm/6045703-hand-handshake-no-shake-touch-icon.png"
              alt=""
              height={120}
              width={120}
            />
            <h4 className={style.about_numbers}>NO SUBCONTRACT </h4>
          </div>
          <div className={style.container_box_about}>
            <img
              src="https://i.ibb.co/1KPxc8L/669945-guarantee-achievement-certificate-quality-icon.png"
              alt=""
              height={120}
              width={120}
            />
            <h4 className={style.about_numbers}>TOP NOTCH QUALITY </h4>
          </div>
        </div>
        <div className={style.accordion}>
          <h1 className={style.team_header}>Frequently Asked Questions</h1>
          <div className={style.accordion_item}>
            <input type="checkbox" id="accordion1" />
            <label for="accordion1" className={style.accordion_item_title}>
              <span className={style.icon}></span>what is vesara construction ?
            </label>
            <div className={style.accordion_item_desc}>
              Vesara Construction is one of the leading House Construction
              Company in Bangalore. We have experience of over fifteen years in
              Individual House Construction, Commercial Construction, Industrial
              Construction, Renovation and Designs. We have successfully done
              200+ projects and created dream space as our clients imagination.
            </div>
          </div>

          <div className={style.accordion_item}>
            <input type="checkbox" id="accordion2" />
            <label for="accordion2" className={style.accordion_item_title}>
              <span className={style.icon}></span>What are services Vesara
              Construction provides ?
            </label>
            <div className={style.accordion_item_desc}>
              We provides Hoouse /Villa/Building Turn-key construction, Interior
              Design and House Renovations.
            </div>
          </div>

          <div className={style.accordion_item}>
            <input type="checkbox" id="accordion3" />
            <label for="accordion3" className={style.accordion_item_title}>
              <span className={style.icon}></span>How do I track the progress of
              my site ?
            </label>
            <div className={style.accordion_item_desc}>
              Vesara Construction provides regular updates on the progress of
              the construction project, including photographs and videos of the
              site. We also have a project management system that allows clients
              to track the progress of their project in real-time. Clients can
              communicate with the project manager and get updates on the
              project status, timelines, and any changes to the scope of work.
            </div>
          </div>

          <div className={style.accordion_item}>
            <input type="checkbox" id="accordion4" />
            <label for="accordion4" className={style.accordion_item_title}>
              <span className={style.icon}></span>Do Vesara Construction
              provides Warrenty on Home Construction ?
            </label>
            <div className={style.accordion_item_desc}>
              Yes, Vesara Construction offers a warranty on construction
              services. The warranty covers defects in workmanship and materials
              for a period of 6 Months from the date of completion of the
              construction project and 10 Years warranty on Struscture. The
              terms and conditions of the warranty are outlined in the contract
              between Vinra Construction and the client. Clients can make a
              claim under the warranty if they believe there is a defect in the
              workmanship or materials used in their construction project.
            </div>
          </div>

          <div className={style.accordion_item}>
            <input type="checkbox" id="accordion5" />
            <label for="accordion5" className={style.accordion_item_title}>
              <span className={style.icon}></span>Will my Home be ready on time
              ?
            </label>
            <div className={style.accordion_item_desc}>
              Vesara Construction understands that timely completion of a
              project is essential, and we have a proven track record of
              completing projects on time. We achieve this by using advanced
              construction techniques, following a strict project management
              process, and having an experienced team of professionals who work
              efficiently to complete the project within the agreed timeline.
            </div>
          </div>

          <div className={style.accordion_item}>
            <input type="checkbox" id="accordion5" />
            <label for="accordion5" className={style.accordion_item_title}>
              <span className={style.icon}></span>Is constructon done by Vesara
              more expensive than local contractor ?
            </label>
            <div className={style.accordion_item_desc}>
              No, Vesara Group is not more expensive than a local contractor. It
              offers packages at par with market rates and ensures 0 cost
              overruns during the construction project.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

