import { useOutletContext } from "react-router";
import Button from "../components/ui/Button"

const Navbar = () => {
  
  const {isSignedIn, userName, signIn, signOut} = useOutletContext<AuthContext>();

  const handlAuthClick = async () => {
    console.log('Button clicked');
    console.log(isSignedIn)
    try {
      if (isSignedIn) {
        await signOut();
      }else{
        await signIn();
      }
    } catch (error) {
      console.log(error)
    }
    return;
  };

  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <div className="logo"/>

              <span className="name">
                Planora
              </span>

          </div>
            <ul className="links">
            <a href="#">Projects</a>
            <a href="#">Projects</a>
            <a href="#">Projects</a>
            </ul>
        </div>

        <div className="actions">
          {isSignedIn ? (
            <>
              <span className="greeting">
              {userName ? `Hi, ${userName}` : 'Signed in'}
              </span>

              <Button size="sm" onClick={handlAuthClick} className="btn">
                Log Out
              </Button>

            </>
          ) : (
          <>
            <Button
              onClick={handlAuthClick}
              size="sm" variant="ghost">
              Log In
            </Button>

          <a href="#upload"
             className="cta">Get
            Started</a>
          </>
          )}

        </div>
      </nav>

    </header>
  )
}

export default Navbar
