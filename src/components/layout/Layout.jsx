import { motion } from "framer-motion";
import logo from "/Ellipse.png";

export default function Layout(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-auto min-h-screen max-w-xl bg-gradient-to-br from-white to-rose-100 flex flex-col items-center"
    >
      {props.children}
      <p className={"mt-auto text-gray-400"}>
        ©StudySurf | All rights reserved
      </p>
    </motion.div>
  );
}
