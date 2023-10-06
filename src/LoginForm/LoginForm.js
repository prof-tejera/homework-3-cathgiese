import "./LoginForm.css";
import Input from "components/Input/Input";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";

const LoginForm = () => {
  return (
    <Panel>
      Username: <Input /><br></br>
      Password: <Input /><br></br>
      <Button
        // active={activeType === "submit"}
        // onClick={() => handleClick("rewind")}
        text="Submit"
        />
    </Panel>
    );
};

export default LoginForm;
