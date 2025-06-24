const CustomNode = ({ data }) => {
  return (
    <div
      className={`custom-node ${data.type}`}
      onContextMenu={data.onContextMenu}
    >
      {data.label}
    </div>
  );
};

export default CustomNode;
