import './Socials.css'

function Socials(){
    return (
        <div className="socials-container">
            <div className='socials-followers'>
                <h3 style={{marginBottom:0}}>80K</h3>
                <p style={{marginTop:0}}>Followers</p>
            </div>
            <div className='socials-likes'>
                <h3 style={{marginBottom:0}}>803K</h3>
                <p style={{marginTop:0}}>Likes</p>
            </div>
            <div className='socials-photos'>
                <h3 style={{marginBottom:0}}>1.4K</h3>
                <p style={{marginTop:0}}>Photos</p>
            </div>

        </div>
    )
}


export default Socials;