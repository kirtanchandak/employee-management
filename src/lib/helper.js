const BASEURL = "http://localhost:3000";

export const getUsers = async () => {
  const response = await fetch(`${BASEURL}/api/users`);
  const json = await response.json();

  return json;
};

export const getUser = async (userId) => {
  const response = await fetch(`${BASEURL}/api/users/${userId}`);

  const json = await response.json();
  if (json) return json;
  return {};
};

//posting new user
export const postUser = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASEURL}/api/users`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (userId, formData) => {
  try {
    const Options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASEURL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId) => {
  try {
    const Options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    };
    const response = await fetch(`${BASEURL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
