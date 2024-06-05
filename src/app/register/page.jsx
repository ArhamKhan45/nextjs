// pages/index.js

import RegisterForm from "./RegisterForm";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Register</h1>
        <div className="w-[500px] border p-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
