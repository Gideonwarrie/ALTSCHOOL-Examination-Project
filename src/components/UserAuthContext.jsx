import React, { createContext, useState, useContext} from "react"; 
import { useContext } from "react"; 

export const AppContext = createContext(); 

export const useAppContext = () => { 
    return useContext(AppContext);
 }; 

export const ContextProvider = (props) => { 
    const  [user, setuser] =useState(null) 

    function modifyUser (prop){
        setUser(prop);{}
    }
    
return(
    <AppContext.Provider
     value={{ 
        user,
        modifyUser,
        }}
         > 
         {props.children} 
        </AppContext.Provider> 
        ); 
    };

   