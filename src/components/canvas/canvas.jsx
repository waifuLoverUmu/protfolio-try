import React, { useEffect, useRef } from "react";

const Canvas = ({ drawItem }) => {
  const canvasRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    drawItem(context);
    return () => cancelAnimationFrame(canvas);
  }, [drawItem]);

  return <canvas className="canvas" width="400px" height="400px" ref={canvasRef} />;
};

export default Canvas;
