function User(props) {
    return ( 
    <div className="card-container">
        <span className={props.online?"pro online ":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src="A.jpg" className="imgu" alt="user" />
        <h3> {props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.desc}</p>
        <div className="btn">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
            <li>UI/UX</li>
            <li>Front end development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>      
            </ul>
        </div>
    </div>
    );
}
export const UserCard = () => {
   
    
  return <User name=" Mathumitha "  city=" Chennai" desc="Front-end Developer" online={true} />;
    
  
};