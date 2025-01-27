export const deleteCall = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("User not deleted");
    }

    console.log(`User with ID ${id} deleted from the API.`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
