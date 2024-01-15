import { ToastContainer } from "react-toastify";
import { RouterMain } from "./Routes/RouterMain";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { Spinner } from "react-loading-io";
import { CreateTechModal } from "./components/CreateTechModal";
import { TechContext } from "./providers/TechContext";
import { EditTechModal } from "./components/EditTechModal";

function App() {
  const { loading } = useContext(UserContext);
  const spinnerCfg = {left: "50%", transform: "translateY(150%)"}

  const { setIsOpen, isOpen } = useContext(TechContext);
  const { setIsOpen2, isOpen2 } = useContext(TechContext);

  return (
    <>
      {loading ? <Spinner style={spinnerCfg} /> : <RouterMain />}
      <ToastContainer theme="dark" autoClose={1.5 * 1000}/>
      {isOpen ? <CreateTechModal setIsOpen={setIsOpen}></CreateTechModal> : null}
      {isOpen2 ? <EditTechModal setIsOpen2={setIsOpen2}></EditTechModal> : null}
    </>
  )
};

export default App
