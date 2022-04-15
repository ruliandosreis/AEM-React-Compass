import React from "react";
import { useDevs } from "../../context/Devs";
import { AutoCompleteContainer, AutoCompleteItem } from "./style";

const AutoComplete = ({ users }) => {

    const { setDevs } = useDevs()

    const renderUsers = () => users.map(user => <AutoCompleteItem onClick={() => setDevs(user)}>{user.name}</AutoCompleteItem>)

    return (
        <AutoCompleteContainer>
            { renderUsers() }
        </AutoCompleteContainer>
    )
}

export default AutoComplete;