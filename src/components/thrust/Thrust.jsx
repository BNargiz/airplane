import { useDispatch, useSelector } from "react-redux";
import { SelectThrust } from "../../store/plane/selector";
import { changeThrust } from "../../store/plane/slice";

export const Thrust = () => {
  const dispatch = useDispatch();
  const thrust = useSelector(SelectThrust);

  return (
    <div className="thrust">
      <button
        disabled={thrust === 0}
        onClick={() => {
          dispatch(changeThrust(-10));
        }}
      >
        -
      </button>
      Thrust: {thrust}
      <button
        disabled={thrust === 100}
        onClick={() => {
          dispatch(changeThrust(+10));
        }}
      >
        +
      </button>
    </div>
  );
};
