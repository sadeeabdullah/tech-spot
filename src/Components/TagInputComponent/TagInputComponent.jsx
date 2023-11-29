/* eslint-disable react/prop-types */

import { TagsInput } from "react-tag-input-component";
import "./css.css";

const TagInputComponent = ({selected, setSelected}) => {
  // const [selected, setSelected] = useState([""]);

  return (
    <div>

      <pre>{JSON.stringify(selected)}</pre>

      <TagsInput
        value={selected}
        onChange={setSelected}
        placeHolder="enter fruits"
      />
    </div>
  );
};

export default TagInputComponent;