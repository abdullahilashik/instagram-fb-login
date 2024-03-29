import Footer from "./components/Footer";
import SocialLogin from "./pages/SocialLogin";

function App() {
  return (
    <div className="min-h-screen w-full">
        <div className="flex flex-col items-center justify-between p-12">
          <SocialLogin />
          <Footer />
        </div>
    </div>
  );
}

export default App;
