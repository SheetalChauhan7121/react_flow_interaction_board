export const isValidConnection = (connection, nodes) => {
  const sourceNode = nodes.find((n) => n.id === connection.source);
  const targetNode = nodes.find((n) => n.id === connection.target);

  return (
    sourceNode?.data?.type === "blockA" && targetNode?.data?.type === "blockB"
  );
};
