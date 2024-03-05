import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';



const Account = () =>
{
    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <div>
                {`Hello ${user.First} ${user.Last}  `}
            </div>
        </>
    )

}

export default Account

