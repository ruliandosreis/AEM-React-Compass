import React, { useEffect, useState } from "react"
import { useDevs } from "../../context/Devs"
import { getDevs } from "../../helpers/devsAPI"
import AutoComplete from "../AutoComplete"
import { InputSearchContainer } from "./style"

export const getUser = (user,usersData,changeState) => {
    if (!user) {
        changeState([])
        return;
    }
    let users = usersData.filter(element =>
        element.name.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "").includes(user.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, ""))
    );
    changeState(users)
}

const InputSearch = () => {

    const [userName, setUserName] = useState("")
    const [usersData, setUsersData] = useState([])
    const [usersFilter, setUsersFilter] = useState([])

    const changeState = (value) => {
        setUsersFilter(value)   
    }

    const saveAllUsers = () => {
        getDevs().then(res => {
            if (res.status == 200) {
                setUsersData(res.data.developers)
            }
        })
    }

    useEffect(() => {
        saveAllUsers()
    }, [])

    return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <InputSearchContainer
                type={'text'}
                placeholder="Buscar usuários"
                onChange={e => {
                    setUserName(e.target.value)
                    getUser(userName,usersData,changeState)
                }}
                onKeyPress={event => {
                    if (event.key == 'Enter') {
                        getUser(userName,usersData,changeState)
                        // setDevs(usersFilter.length == 0 ? null : usersFilter)
                    }
                }}
            />
            {usersFilter.length > 0 ?
                < AutoComplete users={usersFilter} />
                : null
            }
        </div>
    )
}

export default InputSearch