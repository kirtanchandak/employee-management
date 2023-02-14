const BASEURL = "http://localhost:3000";

export const getUser = async () => {
  const response = await fetch(`${BASEURL}/api/users`);
  const json = await response.json();

  return json;
};
