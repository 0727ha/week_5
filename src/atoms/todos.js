import { atom } from "recoil";

export const todos = atom({
  key: "todoList",
  default: [
    {
      id: 0,
      text: "멋사 과제",
      done: true,
    },
    {
      id: 1,
      text: "학교 공부하기",
      done: true,
    },
    {
      id: 2,
      text: "과외 학생 자료.",
      done: true,
    },
    {
        id: 3,
        text: "js, react추가 공부",
        done: true,
      },
  ],
});