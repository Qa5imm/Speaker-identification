import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRecording } from "../Redux/features/state";

const RemoveFile = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateSlice);

  const removeFile = (uname, fname) => {
    dispatch(removeRecording({ uname, fname }));
  };
  return (
    <div>
      {state.recordings[props.name] !== undefined && (
        <div className="flex flex-col m-auto">
          {state.recordings[props.name] !== undefined && // map only if there exist files against a person
            state.recordings[props.name].map((file) => {
              return (
                <div className="flex m-auto gap-x-2 ">
                  <p className="text-2xl">{file?.name}</p>
                  <button
                    className="border-2 px-2 rounded text-white bg-orange-400"
                    onClick={() => removeFile(props?.name, file?.name)}
                  >
                    x
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default RemoveFile;
