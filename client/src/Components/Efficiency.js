import { useState, useEffect } from "react";
import pic from "./pic2.jpg";
import Axios from "axios";

const Efficiency = () => {
  const ptype = ["Software Development", "Marketing", "Sales", "Deployment"];

  //useState hooks = 3 marks
  const [type, setType] = useState("");
  const [size, setSize] = useState(0);
  const [totalhrs, setTotalhrs] = useState(0);
  const [totaltasks, setTotaltasks] = useState(0);
  const [eff, setEff] = useState(0);
  const [note, setNote] = useState("");

  useEffect(() => {
    //javascript function = 3 marks
    const computeEfficiency = () => {
      const eff = (totaltasks * size) / totalhrs;
      setEff(eff);
      const note = eff >= 80 ? "Highly Efficient" : "Needs Improvement";
      setNote(note);
    };
    computeEfficiency();
  }, [totaltasks, size, totalhrs]); //dependencies = 1 mark

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-5 d-flex justify-content-center mt-5">
          <div
            className="form-container p-5"
            style={{
              backgroundColor: "lavender",
              borderRadius: "15px",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              width: "100%",
            }}
          >
            <h1>WORKFLOW DETAILS</h1>
            <form>
              {/*bootstrap class = 0.5 mark */}
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <td>Project Type:</td>
                    <td>
                      {/*event handler = 0.5 mark */}
                      <select
                        className="form-control"
                        onChange={(e) => setType(e.target.value)}
                      >
                        {/* Show the content of the ptype array as options using the map method = 1.5 marks */}
                        {ptype.map((a, index) => (
                          <option key={index}>{a}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Team Size:</td>
                    <td>
                      {/*event handler = 0.5 mark */}
                      <input
                        type="number"
                        className="form-control"
                        onChange={(e) => setSize(Number(e.target.value))}
                      ></input>
                    </td>
                  </tr>

                  <tr>
                    <td>Total Hours Worked:</td>
                    <td>
                      {/*event handler = 0.5 mark */}
                      <input
                        type="number"
                        className="form-control"
                        onChange={(e) => setTotalhrs(Number(e.target.value))}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Tasks Completed:</td>
                    <td>
                      {/*event handler = 0.5 mark */}
                      <input
                        type="number"
                        className="form-control"
                        onChange={(e) => setTotaltasks(Number(e.target.value))}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
              <button className="btn btn-primary" onClick={async () => {
                try {
                  const response = await Axios.post("http://localhost:3001/addWorkflowDetails", {
                    type,
                    size,
                    totalhrs,
                    totaltasks,
                    eff,
                    note,
                  });
  
                  if (response.status == 200) {
                    alert("Workflow Saved Successfully!");
                  } else {
                    alert("Error while saving data. Error code:", response.status);
                  }
                } catch (err) {
                  console.log(err);
                  alert("Error while saving data.");
                }
              }}>Save</button> 
          </div>
        </div>

        <div className="col-md-5 d-flex justify-content-center mt-5">
          <div
            className="summary-container p-5"
            style={{
              backgroundColor: "lavender",
              borderRadius: "15px",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
              width: "100%",
            }}
          >
            {/*display the data from state variables = 1.5 marks */}
            <h3 style={{ textDecoration: "underline" }}>SUMMARY</h3>
            <h4>Project Type: {type}</h4>
            <h4>Efficiency: {eff.toFixed(2)}</h4>
            <h4 className="text-danger">Note: {note}</h4>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-8 d-flex justify-content-center">
          <img
            src={pic}
            className="img-fluid"
            alt="digital"
            style={{ width: "100%", height: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Efficiency;
