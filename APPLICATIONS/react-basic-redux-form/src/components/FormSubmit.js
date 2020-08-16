import { SubmissionError } from "redux-form";
import showResult from "./ShowResult";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const formSubmit = values => {
  return sleep(1000).then(() => {
    if (!["adi", "radha"].includes(values.username)) {
      throw new SubmissionError({
        username: "User does not exist",
        _error: "Login failed!"
      });
    } else if (values.password !== values.username) {
      throw new SubmissionError({
        password: "Wrong password",
        _error: "Login failed!"
      });
    } else {
      showResult(values);
    }
  });
};

export default formSubmit;
