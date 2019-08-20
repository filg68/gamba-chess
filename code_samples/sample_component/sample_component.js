import React, { useState } from "react";
import useDropDown from "../custom_hook/useDropdown";

const SampleComponent = () => {
  const [location, setLocation] = useState("Dundas, ON");
  // hooks always start with use(Something) and return and array of two values
  const [mood, MoodDropdown] = useDropDown('mood','energized',
                                          ['eager','stoked','liberated']);

  return (
    <div>
      <form>
        <label htmlFor="location">
          Where are You?
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
            onBlur={e => setLocation(e.target.value)}
          />
        </label>
        <MoodDropdown/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SampleComponent;
