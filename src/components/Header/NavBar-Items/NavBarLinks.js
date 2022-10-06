import NavBarLink from "./NavBarLink";

const NavBarLinks = () => 
{
    return (
      <ul class="nav">
        
        <NavBarLink linkTitle={"About"} to={"about"} />
        <NavBarLink linkTitle={"Projects"} to={"projects"}/>
        <a class="btn btn-link contact_link" href="mailto: Natanger97@gmail.com"
        >Contact</a>

        
        
      </ul>
    );
}

export default NavBarLinks;