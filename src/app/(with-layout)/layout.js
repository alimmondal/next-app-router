import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
