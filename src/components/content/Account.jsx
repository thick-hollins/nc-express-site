import { useEffect, useState, useContext } from "react";
import { getUser, patchUser } from "../../utils/api";
import UserPreview from "./UserPreview";
import { AppUserContext } from "../../contexts";

const Account = () => {
  const { appUser } = useContext(AppUserContext)

  const [user, setUser] = useState({});
  const [editingName, setEditingName] = useState(false);
  const [editingAvatar, setEditingAvatar] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  useEffect(() => {
    getUser(appUser).then((apiUser) => {
      setUser(apiUser);
      setNewName(apiUser.name);
      setNewAvatar(apiUser.avatar_url);
    });
  }, []);
  const handleCancel = (e) => {
    e.preventDefault();
    if (editingAvatar) setNewAvatar(user.avatar_url);
    if (editingName) setNewName(user.name);
    setEditingAvatar(false);
    setEditingName(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingAvatar) {
      patchUser(user.username, { avatar_url: newAvatar }).then((apiUser) =>
        setUser(apiUser)
      );
    }
    if (editingName) {
      patchUser(user.username, { name: newName }).then((apiUser) =>
        setUser(apiUser)
      );
    }
    setEditingAvatar(false);
    setEditingName(false);
  };

  return (
    <div>
      <p>You are logged in as {user.username}</p>
      <UserPreview user={user} />
      <div className="edit-account">
        {!editingName && !editingAvatar && (
          <>
            <button
              className="white-button"
              onClick={() => setEditingName(true)}
            >
              Edit name
            </button>
            <button
              className="white-button"
              onClick={() => setEditingAvatar(true)}
            >
              Choose another avatar
            </button>
          </>
        )}
        {(editingName || editingAvatar) && (
          <form>
            <ul>
              <li>
                {editingName && (
                  <>
                    <p>Enter name</p>{" "}
                    <input
                      value={newName}
                      onChange={(event) => setNewName(event.target.value)}
                    ></input>
                  </>
                )}
              </li>
              <li>
                {editingAvatar && (
                  <>
                    <p>Enter avatar URL</p>
                    <input
                      value={newAvatar}
                      onChange={(event) => setNewAvatar(event.target.value)}
                    ></input>
                  </>
                )}
              </li>
              <li>
                <button className="white-button" onClick={handleSubmit}>
                  Submit
                </button>
                <button className="white-button" onClick={handleCancel}>
                  Cancel
                </button>
              </li>
            </ul>
          </form>
        )}
      </div>
    </div>
  );
};

export default Account;
