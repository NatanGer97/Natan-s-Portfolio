import aboutMePic from '../../assets/images/aboutMePic.png'

const SkillCard = (props) => 
{
    return (
      <div className="col skill_card  shadow-sm rounded-pill " style={{backgroundColor:'transparent', maxWidth:"150px"}}>
        <div className="card ">
          
          <div className="card-body">
            <h5 className="card-title text-center fs-6">{props.skill}</h5>
          
          </div>
        </div>
      </div>
    );
};


export default SkillCard;