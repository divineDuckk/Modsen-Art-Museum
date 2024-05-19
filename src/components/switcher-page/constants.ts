const NUM_TO_HIDE: number = 5;
const MAX_VISIBLE_PAGE: number = 4;

const REQUIRED_REMAINDER_TO_MOVE_FORWARD: number = 1;
const REQUIRED_REMAINDER_TO_MOVE_BACK: number = 0;

enum Pages {
  FirstPage = 1,
  SecondPage = 2,
  ThirdPage = 3,
  FourthPage = 4,
}

export {
  MAX_VISIBLE_PAGE,
  NUM_TO_HIDE,
  Pages,
  REQUIRED_REMAINDER_TO_MOVE_BACK,
  REQUIRED_REMAINDER_TO_MOVE_FORWARD,
};
