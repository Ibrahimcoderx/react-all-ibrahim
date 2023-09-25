import React, {useContext} from "react"
import { UserContext } from "../Context/UsersConText"


export const useUserContext = () =>{
    return useContext(UserContext)
}