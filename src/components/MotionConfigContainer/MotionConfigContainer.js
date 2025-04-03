"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

function MotionConfigContainer({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default MotionConfigContainer;
