
export const TabItem = (props)  => 
{
    return (
       <div>
         <li class="nav-item">
        <a class={`nav-link ${props.active}`} data-toggle="tab" href={`{#${props.link}`}>
          {props.tabName}
        </a>
      </li>

      <div className="tab-content">
      <div id={props.link} class="container tab-pane active"><br/>
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
      </div>
      
       </div>
    
    )
}