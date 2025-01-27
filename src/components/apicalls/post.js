export const postUser = async (user, setUsers) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to add user");
    }
    const newUser = await response.json();
    // Update the local state
    setUsers((prevUsers) => [...prevUsers, newUser]);

    console.log("User added successfully!");
  } catch (error) {
    console.error("Error adding user:", error);
  }
};
