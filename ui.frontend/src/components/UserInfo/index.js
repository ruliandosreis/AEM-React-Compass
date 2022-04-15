import React from "react"
import { useDevs } from "../../context/Devs"
import { UserInfoContainer } from "./style"

const UserInfo = (props) => {

    const { userData } = props
    const { devs, setDevs } = useDevs()

    return (
        <UserInfoContainer>
            {
                !devs ?
                    <p>{
                        `O usuário buscado não existe,${'\n'} por favor tente novamente!`
                    }
                    </p>
                    :
                    <p>{`            
                        Nome: ${devs.name} ${'\n'}
                        DC: ${devs.dc} ${'\n'}
                        Inovatioon Istudio: ${devs.istudio} ${'\n'}
                        Idade: ${devs.age} ${'\n'}
                        Cargo: ${devs.position}
                    `}
                    </p>
            }
        </UserInfoContainer>
    )
}

export default UserInfo;