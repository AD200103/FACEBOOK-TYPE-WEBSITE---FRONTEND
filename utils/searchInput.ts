import { SetStateAction, Dispatch, RefObject } from "react";
type HandlerType = {
  searchInpRef: RefObject<HTMLDivElement | null>;
  setSearchShifted: Dispatch<SetStateAction<boolean>>;
};
const HANDLER = ({ e, searchInpRef, setSearchShifted }: HandlerType): void => {
  if (
    searchInpRef.current &&
    !searchInpRef.current.contains(e.target as Node)
  ) {
    setSearchShifted(false);
  } else {
    setSearchShifted(true);
  }
};
export default HANDLER;
