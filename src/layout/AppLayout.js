import Header from "../Header";
import Footer from "../Footer";
function AppLayout({ children }) {
    return (
        <>
        {/* Header */}
        <Header />
        {children}
        {/* Footer */}
        <Footer />
        </>
    );
}
export default AppLayout;