import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  useReactFlow,
  ReactFlowProvider,
} from "react-flow-renderer";
import CustomNode from "./CustomNode";
import ContextMenu from "./ContextMenu";
import { isValidConnection } from "../utils/connectionValidation";

const nodeTypes = { custom: CustomNode };

const FlowCanvas = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const block = JSON.parse(
      event.dataTransfer.getData("application/reactflow")
    );
    const position = { x: event.clientX - 300, y: event.clientY };
    const newNode = {
      id: `${block.type}-${+new Date()}`,
      type: "custom",
      position,
      data: { label: block.label, type: block.type },
    };
    setNodes((nds) => nds.concat(newNode));
  }, []);

  const onConnect = useCallback(
    (params) => {
      if (isValidConnection(params, nodes)) {
        setEdges((eds) => addEdge(params, eds));
      } else {
        alert("Invalid connection: Only Block A → Block B allowed");
      }
    },
    [nodes]
  );

  const onContextMenu = (event, node) => {
    event.preventDefault();
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
      node,
    });
  };

  const onPaneClick = () => setContextMenu(null);

  return (
    <div
      className="flow-canvas"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: { ...node.data, onContextMenu: (e) => onContextMenu(e, node) },
        }))}
        edges={edges}
        onConnect={onConnect}
        isValidConnection={(connection) => isValidConnection(connection, nodes)}
        nodeTypes={nodeTypes}
        onPaneClick={onPaneClick}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
      {contextMenu && <ContextMenu x={contextMenu.x} y={contextMenu.y} />}
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <FlowCanvas />
  </ReactFlowProvider>
);
