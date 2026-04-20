import React, { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { motion, AnimatePresence } from "motion/react";

interface AiFeedbackSuccessAlertProps {
  visible: boolean;
  onClose: () => void;
}

export function AiFeedbackSuccessAlert({
  visible,
  onClose,
}: AiFeedbackSuccessAlertProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-[96px] left-1/2 -translate-x-1/2 bg-[#edf7ed] rounded-[4px] px-[16px] py-[6px] flex items-center gap-[12px] shadow z-50 min-w-[300px]"
        >
          <Icon name="p3b975200" size={22} fill="#1E4620" />
          <span className="flex-1 text-[16px] font-medium text-[#1E4620] tracking-[0.15px]">
            AI 分段品質回饋提交成功
          </span>
          <button 
            onClick={onClose}
            className="w-[20px] h-[20px] flex items-center justify-center rounded hover:bg-black/5"
          >
            <Icon name="p33817400" size={12} fill="rgba(0,0,0,0.54)" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
