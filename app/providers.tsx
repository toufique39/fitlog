"use client";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FitLogProvider } from "../src/context/FitLogContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <FitLogProvider>
      {children}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
      />
    </FitLogProvider>
  );
}