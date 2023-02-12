import googleIcon from "/google-icon.jpeg";
import fakeLogo from "/Ellipse.png";

function TeacherLogin() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-white to-rose-100 flex flex-col justify-center items-center gap-6">
      <img className="mt-10 h-20 w-20" src={fakeLogo} alt="logo" />
      <div className="my-auto px-1 rounded-md flex justify-start items-center gap-6 h-14 w-3/5 max-w-md bg-google-blue hover:bg-google-blue-active cursor-pointer">
        <div className="w-12 h-12">
          <img
            className="rounded-md object-cover bg-white"
            src={googleIcon}
            alt=""
          />
        </div>
        <p className=" text-white">Sign in with google</p>
      </div>
      <p className={"mt-auto text-gray-400 "}>
        ©Splash Screen | All rights reserved
      </p>
    </div>
  );
}

export default TeacherLogin;
