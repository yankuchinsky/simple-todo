import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

type Props = {
  name: string;
  updateNameCallback: Function;
};

const ProjectName: React.FC<Props> = props => {
  const { name, updateNameCallback } = props;
  const [inputName, editInputName] = useState(name);

  const changeName = (event: any) => editInputName(event.target.value);

  const saveName = () => updateNameCallback(inputName);

  return (
    <div className="project-name-form">
      <Input value={inputName} onChange={changeName} />
      <Button onClick={saveName}>Save</Button>
    </div>
  );
};

export default ProjectName;
