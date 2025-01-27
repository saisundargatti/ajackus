export const putCall = async (updatedUser, activeId, setUsers) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${activeId}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    const editedUser = await response.json();
    console.log("Updated User:", editedUser);

    // Update the users state by replacing the edited user
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === activeId ? { ...user, ...editedUser } : user
      )
    );
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
