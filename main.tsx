import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h1>Gram Panchayat Website</h1>
      <p>Website successfully deployed 🚀</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
