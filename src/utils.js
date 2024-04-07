import { useState, useEffect } from "react";

export const withUserName = (Component) => {
  return function WithUserNameComponent(props) {
    const [user, setUser] = useState();
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((data) => {
          let name = "";
          name = data.forEach((user) => {
            if (user.id == props?.post?.userId) setUser(user);
          });
        });
    }, []);
    return (
      <Component
        {...props}
        nameOfUser={user?.name}
        usernameOfUser={user?.userName}
      />
    );
  };
};

export const withUsers = (Component) => {
  return function WithUsersComponent(props) {
    const [users, setUsers] = useState();
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        });
    }, []);
    return <Component {...props} users={users} />;
  };
};
