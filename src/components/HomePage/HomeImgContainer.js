import hiImg from '../../assets/images/hi.gif'

const HomeImgContainer = () => 
{
    return (
      <div className="my-5 mx-5">
        <img src={hiImg} className={"imgHome shadow"} />
      </div>
    );
}

export default HomeImgContainer;