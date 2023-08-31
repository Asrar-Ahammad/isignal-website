import '../universityConnect/connect.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import UniLogo from "../../assets/images/university-connect.svg"

function UniConnect(){
    return (
        <>
        <Header />
            <div className='connect-heading'>
                <h1 className='connect-heading-style'><span style={{ color: "#C10000" }}>i</span>Signal<sup>®</sup> University Connect</h1>
            </div>

            <div className="connectForm">
            <div className="connect-form">
                    <form>
                        <div className="name">
                            <input type="text" placeholder='First Name' required />
                            <input type="text" placeholder='Last Name' required />
                        </div>
                        <input type="text" placeholder='Designation' required />
                        <input type="email" placeholder='someone@example.com' required />
                        <input type="text" placeholder='College name' required />
                        <input type="text" placeholder='College address' required />
                        <input type="tel" placeholder='(+91) 123-456-7890' required />
                        <input type="file" id="myFile" name="filename" />
                        <textarea placeholder='Message....' cols="30" rows="10" style={{fontSize:'1.1rem'}}></textarea>
                        <button className='Sentbtn'>Submit</button>
                    </form>
                </div>

                <div className="connect-image">
                    <img src={UniLogo} alt='university-logo'/>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default UniConnect;