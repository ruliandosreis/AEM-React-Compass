import React, { useEffect, useState } from "react"
import { getDevs } from "../../helpers/devsAPI"
import AutoComplete from "../AutoComplete"
import { InputSearchContainer } from "./style"

const InputSearch = () => {

    const [userName, setUserName] = useState("")
    const [usersData, setUsersData] = useState([])
    const [usersFilter, setUsersFilter] = useState([])

    const getUser = (user) => {
        if (!user) {
            setUsersFilter([])
            return;
        }
        let users = usersData.filter(element =>
            element.name.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "").includes(user.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, ""))
        );
        setUsersFilter(users)
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
        <div style={{ heigh: '100%', paddingTop: 50, paddingBottom: 50 }}>
            <InputSearchContainer
                type={'text'}
                placeholder="Buscar usuários"
                onChange={e => {
                    setUserName(e.target.value)
                    getUser(e.target.value)
                }}
                onKeyPress={event => {
                    // direcionar para a tela 3 com os dados encontrados
                    // if (event.key == 'Enter') getUser(userName)
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