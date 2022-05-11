import { useDispatch, useSelector } from "react-redux";
import { selectEngine } from "../../store/plane/selector";
import { toggleEngine } from "../../store/plane/slice";

import "./engine.css";

export const Engine = () => {
  const dispatch = useDispatch();
  const engine = useSelector(selectEngine);

  console.log(engine);
  return (
    <div className="button-container">
      <button
        onClick={() => {
          dispatch(toggleEngine("left"));
        }}
      >
        Left Engine {engine.left ? "OFF" : "ON"}
      </button>
      <button
        onClick={() => {
          dispatch(toggleEngine("left_center"));
        }}
      >
        Left Center Engine {engine.left_center ? "OFF" : "ON"}
      </button>
      <button
        onClick={() => {
          dispatch(toggleEngine("right_center"));
        }}
      >
        Right Center Engine {engine.right_center ? "OFF" : "ON"}
      </button>
      <button
        onClick={() => {
          dispatch(toggleEngine("right"));
        }}
      >
        Right Engine {engine.right ? "OFF" : "ON"}
      </button>
    </div>
  );
};
