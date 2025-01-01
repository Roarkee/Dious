import mypic from './assets/logo.png';
import usericon from './assets/login_icon.png';
function Food(){
    return(

       
    <div class="container">
        <div class="side-thing"><img src={mypic} alt="logo" ></img>
           
            </div>
    <form id="form">
        <div class="image-icon"><img src={usericon}></img></div>
        <div class="input-container">
        <i class="fas fa-envelope icon"></i>
        <input type="text" placeholder="enter email" id="email" required></input>
        </div>

        <div class="input-container">
        <i class="fas fa-lock icon"></i>
        <input type="password" id="password" placeholder="enter password" required></input>
            </div>
            <div class="links">
                <a href="#"><p>forgot password?</p></a>
            </div>
        <div id="login-container">
        <input type="submit" value="Login" id="login"></input>
        </div>
        <div class="signup-link">
            <p>don't have an account? <a href="#">sign up</a></p>
        </div>

    </form>
</div>


      
    );
}

export default Food