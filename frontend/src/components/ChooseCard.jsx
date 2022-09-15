const ChooseCard = (props) => {
  return (
    <>
      <div className="col-lg-6 col-12" style={{ cursor: "pointer" }}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseCard;

{
  /* <ChooseCard
title="Apply for CEA Allowance"
desc="Fill the form and submit an application for CEA Allowance"
/>

<ChooseCard
title="View Previous Applications"
desc="View the status of your previous applications."
/> */
}
