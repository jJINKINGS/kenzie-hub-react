import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";
import { useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();
    const pathname = window.location.pathname;
    const localToken = localStorage.getItem("@TOKEN");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [techList, setTechList] = useState([]);
    const[token, setToken] = useState(localToken ? localToken : "");

    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true);
                const { data } = await api.get("/profile", { headers: { Authorization: `Bearer ${token}`} });
                setUser(data);
                setTechList(data.techs);
                navigate(pathname);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if(token) {
            getUser();
        };

    }, []);

    const userRegister = async(userData, setLoading, reset) => {
        try {
            setLoading(true);
            await api.post("/users", userData);
            reset();
            navigate("/");
            toast.success("Cadastro realizado com sucesso!");
        } catch (error) {
            toast.error("E-mail já cadastrado!");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const userLogin = async(userData, setLoading, reset) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", userData);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
            setToken(data.token);
            setTechList(data.user.techs);
            navigate("/dashboard");
            reset();
            toast.success("Login realizado com sucesso!");
        } catch (error) {
            console.log(error);
            if(error.response.data.message === "Incorrect email / password combination") {
                toast.error("Credenciais inválidas!");
            }
        } finally {
            setLoading(false);
        }
    };
    

    const userLogout = () => {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        setTechList([]);
        setToken("");
        navigate("/");
        toast.warn("Deslogando...");
    };


    return <UserContext.Provider value={{ loading, user, userRegister, userLogin, userLogout, techList, setTechList, token }}>{children}</UserContext.Provider>
};
