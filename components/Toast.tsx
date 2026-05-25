"use client";

import { colors } from "@/constants/colors";

interface ToastProps {
  message: string;
  onClose?: () => void;
  positionClassName?: string;
  maxWidthClassName?: string;
}

const Toast = ({
  message,
  onClose,
  positionClassName = "top-20",
  maxWidthClassName = "max-w-sm",
}: ToastProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className={`fixed right-4 z-50 sm:right-6 ${positionClassName}`}>
      <div
        role="status"
        aria-live="polite"
        className={`${maxWidthClassName} rounded-2xl border px-4 py-3 text-sm font-semibold shadow-lg`}
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: `${colors.primary}22`,
          color: colors.textPrimary,
          boxShadow: `0 12px 30px ${colors.primary}20`,
        }}
      >
        <p>{message}</p>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="mt-2 text-xs font-bold uppercase tracking-[0.08em]"
            style={{ color: colors.primary }}
          >
            Close
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Toast;
