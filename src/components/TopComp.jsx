import '../components/TopComp.css'
import profileImg from '../assets/profile-pic.jpeg'

function TopComp(){
    return (
        <div className="top-comp-container">
            <div className='top-comp-imgchild'>
                <img src={profileImg}></img>
            </div>
            <div className='top-comp-namechild'>
                <div className='nameage'>
                    <h4 style={{margin:0, marginRight:"5px"}}>Max Flosh </h4>
                    <p style={{margin:0}}> 27</p>
                </div>
                <p style={{margin:0}}>London</p>

            </div>
            
        </div>
    )
}


export default TopComp;