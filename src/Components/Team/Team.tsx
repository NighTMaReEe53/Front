import Title from "../TitleMain/Title";
import "./team.css"

const Team = () => {
  return (
    <div className="team">
      <img src="image/shape/shape-11.png" className="team-shape" alt="" />
      <div className="middle-circle"></div>
      <div className="overlay-team"></div>
      <div className="container">
        <Title title="فريق العمل" />
        <div className="content">
          <div className="box">
            <div className="image">
              <img src="image/team/girl-1.png" alt="Team" />
            </div>
            <div className="text">
              <h2><span>يارا</span> كمال</h2>
              <p>مسؤولة عن الموقع</p>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="image/team/boy-1.png" alt="Team" />
            </div>
            <div className="text">
              <h2><span>مؤمن</span> محمد</h2>
              <p>مسؤول عن يو اي</p>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="image/team/girl-2.png" alt="Team" />
            </div>
            <div className="text">
              <h2><span>ندي</span> محمد</h2>
              <p>مساعدة في الموقع </p>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="image/team/boy-2.png" alt="Team" />
            </div>
            <div className="text">
              <h2><span>ناصر</span> مسعد</h2>
              <p>مساعد في التصميم </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
