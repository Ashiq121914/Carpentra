import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Carpentra`;
  }, [title]);
};

export default useTitle;
