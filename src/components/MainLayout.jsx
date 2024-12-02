import { Footer } from "./Footer";
import { Header } from "./Header";
import PropTypes from "prop-types";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

// proptype for children
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
