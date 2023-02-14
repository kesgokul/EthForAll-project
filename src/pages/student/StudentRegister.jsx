import fakeLogo from "/Ellipse.png";
import fakeProfile from "/profile-pic.png";
import StudentForm from "../components/StudentForm";
import Layout from "../components/Layout";

import { useAuth } from "@arcana/auth-react";

export default function StudentRegister() {
  const { user } = useAuth();
  return (
    <Layout>
      <div className="mb-auto mt-10 px-4 w-full flex justify-between items-center">
        <div className="flex justify-start items-center">
          <img className=" w-14 h-14" src={fakeLogo} alt="logo" />
          <p className="text-black">Splash Screen</p>
        </div>
        <img
          className="w-10 h-10"
          src={user.picture || fakeProfile}
          alt="profile picture"
        />
      </div>
      <h2 className="text-2xl font-semibold">Add you details</h2>
      <StudentForm name={user.name} />
    </Layout>
  );
}