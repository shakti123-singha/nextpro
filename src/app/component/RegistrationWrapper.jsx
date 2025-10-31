"use client";

import { useState, useEffect } from "react";
import RegistrationModal from "./RegistrationModal";

export default function RegistrationWrapper() {
//     const [showModal, setShowModal] = useState(false);

//   // useEffect(() => {
//   //   // Show immediately
//   //   setShowModal(true);

//   //   // Show every 5 minutes
//   //   const interval = setInterval(() => {
//   //     setShowModal(true);
//   //   }, 1 * 60 * 1000);

//   //   return () => clearInterval(interval);
//   // }, []);
//   useEffect(() => {
//     // Function to open modal and auto-close after 30s
//     const openModal = () => {
//       setShowModal(true);
//       setTimeout(() => {
//         setShowModal(false);
//       }, 30 * 1000); // 30 seconds
//     };

//     // Show immediately
//     openModal();

//     // Show every 1 minute
//     const interval = setInterval(() => {
//       openModal();
//     }, 1 * 60 * 1000);

//     return () => clearInterval(interval);
//   }, [])
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const openModal = () => {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 30 * 1000);
    };

    openModal();

    const interval = setInterval(() => {
      openModal();
    }, 1 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <RegistrationModal open={showModal} onClose={() => setShowModal(false)} />
  );
}
