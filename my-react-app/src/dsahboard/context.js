import Login from "../login/Log";
import Tables from "./table";



const App = () => {
    return (
      <Login>
        <Tables />
        {/* You can render Tables component anywhere within the UserLoginProvider */}
        {/* For example: <Tables /> */}
      </Login>
    );
  };
  
  export default App;