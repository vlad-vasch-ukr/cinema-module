import React from "react";
import AppHeader from "../components/AppHeader/Appheader";

const MainLayout: React.FC = ({children}) => {
  return (
    <div className="main-layout">
      <AppHeader />
      <main>
        { children }
      </main>
    </div>
  )
}

export default MainLayout