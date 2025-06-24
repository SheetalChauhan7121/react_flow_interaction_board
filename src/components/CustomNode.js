import React from "react";
import { Handle, Position } from "react-flow-renderer";

const CustomNode = ({ data }) => {
  return (
    <div
      className={`custom-node ${data.type}`}
      onContextMenu={data.onContextMenu}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
      />

      <div>{data.label}</div>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
      />
    </div>
  );
};

export default CustomNode;
