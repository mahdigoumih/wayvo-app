/* ============================================
   WAYVO ANIMATIONS & KEYFRAMES
   ============================================ */

/* Typing Indicator Animation */
@keyframes typingPulse {
  0%, 100% {
    opacity: 0.2;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-3px);
  }
}

/* Splash Screen Logo Animation */
@keyframes logoScale {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In Right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse Glow */
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 200, 150, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 200, 150, 0);
  }
}

/* Shimmer Loading Effect */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Bounce */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Spin */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Heart Beat */
@keyframes heartBeat {
  0%, 100% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.15);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.15);
  }
  70% {
    transform: scale(1);
  }
}

/* Toast Slide Up */
@keyframes toastSlideUp {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

/* Toast Fade Out */
@keyframes toastFadeOut {
  from {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -10px);
  }
}

/* Skeleton Loading */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-background-secondary) 25%,
    var(--color-border-primary) 50%,
    var(--color-background-secondary) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}

/* Animation Utility Classes */
.animate-fade-in {
  animation: fadeIn var(--transition-base);
}

.animate-slide-up {
  animation: slideUp var(--transition-base);
}

.animate-slide-in-right {
  animation: slideInRight var(--transition-base);
}

.animate-pulse-glow {
  animation: pulseGlow 2s infinite;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-heart {
  animation: heartBeat 1.2s;
}

/* Transition Utilities */
.transition-all {
  transition: all var(--transition-base);
}

.transition-transform {
  transition: transform var(--transition-base);
}

.transition-opacity {
  transition: opacity var(--transition-base);
}

.transition-colors {
  transition: background-color var(--transition-fast),
              border-color var(--transition-fast),
              color var(--transition-fast);
}

/* Hover Lift Effect */
.hover-lift {
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Press Down Effect */
.press-down:active {
  transform: scale(0.98);
}
