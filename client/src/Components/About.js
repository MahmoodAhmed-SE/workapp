import pic from "./pic1.jpg"; //0.5 mark

//component creation = 1 mark
const About = () => {
  return (
    <div>
      {/*img = 0.25 mark, src=0.25 mark, style=0.5 mark */}
      <img
        src={pic}
        style={{
          width: "50%",
          height: "500px",
        }}
      ></img>
      {/*h2 = 0.25 mark and bootstrap = 0.25 mark */}
      <h1 className="display-4">Boosting work efficiency!</h1>
    </div>
  );
};
export default About;
