import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { useReducedMotion } from "framer-motion";
import { useRef, ref } from "react";
import { BsSearch } from "react-icons/bs";
const SearchInput = (props) => {
  const { onSearch } = props;
  const ref = useRef(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games... "
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
