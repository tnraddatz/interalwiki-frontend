import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import Profile from "./Profile"

function Home() {
  return (
    <div> 
        Home Page
        <LoginButton />
        <LogoutButton />
        <Profile />
    </div>
  );
}

export default Home;