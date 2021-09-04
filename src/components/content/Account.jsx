import { useEffect, useState } from "react";
import { getUser } from "../../utils/api";
import UserPreview from "./UserPreview";

const Account = ({ appUser }) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        getUser(appUser).then((apiUser) => {
          setUser(apiUser);
        });
      }, []);
    return (
        <div>
            <p>You are logged in as {user.username}</p>
            <UserPreview user={user} />
            <div className='edit-account'>
            <button className='white-button'>Edit name</button>
            <button className='white-button'>Choose another avatar</button>
            </div>
        </div>
    );
};

export default Account;