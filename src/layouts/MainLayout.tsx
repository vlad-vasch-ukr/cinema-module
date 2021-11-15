import React from "react";
import AppHeader from "../components/AppHeader/Appheader";
import AppFooter from "../components/AppFooter/AppFooter";

const MainLayout: React.FC = ({children}) => {
  return (
    <div className="main-layout">
      <AppHeader />
      <main>
        { children }
      </main>
      <AppFooter />
    </div>
  )
}

export default MainLayout