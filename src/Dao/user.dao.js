import userModel from "./Mongo/models/user.model.js";

class UserMongoDao {
  constructor() {}

  //crear user
  async addUser(dataPacked) {
    try {
      const userToPush = await userModel.create(dataPacked);
      console.log("Usuario creado");
      return userToPush;
    } catch (error) {
      return error;
    }
  }

  //getUser By Id
  async getUser(userId) {
    const userById = await userModel.findById(userId);
    return userById
  }

  //getUser by email
  async getUserByEmail(email) {
    const userToChk = await userModel.findOne({ email: email });
    return userToChk;
  }

  //actualizar user
  async updateUserPass(email, dataUpdate) {
    const update = await userModel.findOneAndUpdate({ email: email }, dataUpdate);
    return update;
  }

  //eliminar user
  async deleteUser(userId) {
    try {
    } catch (error) {
      return error;
    }
  }
  //modificar user

  async updateUserRole(userId, dataUpdate) {
    const update = await userModel.findByIdAndUpdate(userId, { role: dataUpdate })
    return update
  }
}

export default UserMongoDao;
