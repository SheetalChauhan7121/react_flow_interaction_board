import React from "react";
import { BLOCKS } from "../constants/blocks";

const BlockPanel = () => {
  const onDragStart = (event, block) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(block));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="block-panel">
      <h4>Blocks</h4>
      {BLOCKS.map((block) => (
        <div
          key={block.id}
          className="draggable-block"
          draggable
          onDragStart={(e) => onDragStart(e, block)}
        >
          {block.label}
        </div>
      ))}
    </div>
  );
};

export default BlockPanel;
