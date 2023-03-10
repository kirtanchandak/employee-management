/** Controller */
import Users from "../model/user";

// get: http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) {
      return res.status(404).json({ error: "No Users Found" });
    } else {
      return res.status(200).json(users);
    }
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

export async function getUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not selected.." });
  } catch (error) {
    res.status(404).json({ error: "Cannot get specigic user..!" });
  }
}

//post: http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: "No Form Data Found" });
    } else {
      Users.create(formData, function (err, data) {
        return res.status(200).json(data);
      });
    }
  } catch (err) {
    return res.status(404).json({ err });
  }
}

//put: http://localhost:3000/api/users/1

export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "No Form Data Found" });
    }
  } catch (err) {
    res.status(404).json({ err: "Error while updating the data" });
  }
}

export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(404).json({ error: "No User Found" });
    } else {
      const user = await Users.findByIdAndDelete(userId);
      return res.status(200).json({ deleted: userId });
    }
  } catch (err) {
    res.status(404).json({ err: "Error while deleting the data" });
  }
}
