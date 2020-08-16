import React from "react";
import MyLabel from "./MyLabel";
import MyButton from "./MyButton";

const Home = () => {
  const [salary, setSalary] = React.useState(100);
  const [bonus, setBonus] = React.useState(10);

  const salaryOperation = React.useCallback(() => setSalary(salary + 100), [
    salary
  ]);

  const bonusOperation = React.useCallback(() => {
    setBonus(bonus + 2);
  }, [bonus]);

  return (
    <div>
      <MyLabel title={"TOTAL PERK"} count={salary + bonus} />
      <br />
      <MyLabel title={"SALARY"} count={salary} />
      <MyButton actionFunction={salaryOperation}>COUNT SALARY</MyButton>
      <br />
      <MyLabel title={"BONUS"} count={bonus} />
      <MyButton actionFunction={bonusOperation}>COUNT SALARY</MyButton>
    </div>
  );
};

export default Home;
