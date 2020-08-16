const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = values => {
  return sleep(1000).then(() => {
    if (["adarsh", "radha", "sonu", "monu"].includes(values.username)) {
      throw { username: "That username is taken" };
    }
    if (values.username === values.password) {
      throw {
        username: "username and  password can't be same ",
        password: "username and  password can't be same "
      };
    }
  });
};

export default asyncValidate;
