import FooterBar from "./Footer/FooterBar";

const MainLayout = (props) => 
{
    return <div className="container-fluid " style={{height:"75%"}}>{props.children}</div>;
}

export default MainLayout;