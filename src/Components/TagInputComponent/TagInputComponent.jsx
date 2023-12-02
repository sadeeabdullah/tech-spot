/* eslint-disable react/prop-types */

import { TagsInput } from "react-tag-input-component";
import "./css.css";

const TagInputComponent = ({selected, setSelected}) => {
  // const [selected, setSelected] = useState([""]);

  return (
    <div>


      <TagsInput
        value={selected}
        onChange={setSelected}
        
        placeHolder="type a tag "
      />
    </div>
  );
};

export default TagInputComponent;