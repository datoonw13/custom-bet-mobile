import { loaderRef } from "../App";

const loaderService = {
  start: () => {
    loaderRef.start();
  },
  stop: () => {
    loaderRef.stop();
  }
};

export default loaderService;
