import React from "react";
import { AutoCompleteContainer, AutoCompleteItem } from "./style";

const AutoComplete = ({ users }) => {

    const renderUsers = () => users.map(user => <AutoCompleteItem>{user.name}</AutoCompleteItem>)

    return (
        <AutoCompleteContainer>
            { renderUsers() }
        </AutoCompleteContainer>
    )
}

export default AutoComplete;