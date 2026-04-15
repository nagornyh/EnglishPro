import { useEffect, useCallback, useRef } from 'react';

// Hook for keyboard navigation in lists
export function useKeyboardNavigation(
  itemCount: number,
  onSelect: (index: number) => void,
  options?: {
    loop?: boolean;
    orientation?: 'horizontal' | 'vertical';
  }
) {
  const currentIndexRef = useRef(0);
  const { loop = true, orientation = 'vertical' } = options || {};

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const prevKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
    const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';

    if (event.key === prevKey) {
      event.preventDefault();
      if (currentIndexRef.current > 0) {
        currentIndexRef.current--;
      } else if (loop) {
        currentIndexRef.current = itemCount - 1;
      }
      onSelect(currentIndexRef.current);
    } else if (event.key === nextKey) {
      event.preventDefault();
      if (currentIndexRef.current < itemCount - 1) {
        currentIndexRef.current++;
      } else if (loop) {
        currentIndexRef.current = 0;
      }
      onSelect(currentIndexRef.current);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(currentIndexRef.current);
    } else if (event.key === 'Home') {
      event.preventDefault();
      currentIndexRef.current = 0;
      onSelect(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      currentIndexRef.current = itemCount - 1;
      onSelect(itemCount - 1);
    }
  }, [itemCount, onSelect, loop, orientation]);

  const setCurrentIndex = useCallback((index: number) => {
    currentIndexRef.current = index;
  }, []);

  return { handleKeyDown, setCurrentIndex, currentIndex: currentIndexRef };
}

// Hook for focus management
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Dispatch custom event for escape handling
        container.dispatchEvent(new CustomEvent('focustrap:escape'));
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscape);

    // Focus first element when trap activates
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isActive]);

  return containerRef;
}

// Hook for announcements to screen readers
export function useAnnounce() {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Find or create live region
    let liveRegion = document.getElementById('a11y-announcer');
    
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'a11y-announcer';
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    } else {
      liveRegion.setAttribute('aria-live', priority);
    }

    // Clear and set message (needs timeout to trigger announcement)
    liveRegion.textContent = '';
    setTimeout(() => {
      liveRegion!.textContent = message;
    }, 100);
  }, []);

  return announce;
}

// Hook for reduced motion preference
export function useReducedMotion() {
  const mediaQuery = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;
  
  return mediaQuery?.matches ?? false;
}

// Accessible button component props
export interface AccessibleButtonProps {
  label: string;
  description?: string;
  isPressed?: boolean;
  isExpanded?: boolean;
  controls?: string;
  disabled?: boolean;
}

// Generate accessible props for interactive elements
export function getAccessibleProps(props: AccessibleButtonProps) {
  return {
    'aria-label': props.label,
    'aria-describedby': props.description ? `desc-${props.label.replace(/\s/g, '-')}` : undefined,
    'aria-pressed': props.isPressed,
    'aria-expanded': props.isExpanded,
    'aria-controls': props.controls,
    'aria-disabled': props.disabled,
    tabIndex: props.disabled ? -1 : 0,
  };
}

// Focus visible utility class (for keyboard focus only)
export const focusVisibleClass = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800';

// Screen reader only class (for hidden but accessible content)
export const srOnlyClass = 'sr-only';

// Skip link component helper
export function createSkipLink(targetId: string, label: string = 'Saltar al contenido principal') {
  return {
    href: `#${targetId}`,
    className: `sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 
                focus:bg-accent-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg
                focus:outline-none`,
    children: label,
  };
}

// Color contrast helpers
export const a11yColors = {
  // Ensure 4.5:1 contrast ratio for normal text
  textPrimary: 'text-white',           // #ffffff on dark bg
  textSecondary: 'text-gray-300',      // #d1d5db on dark bg (7.5:1)
  textMuted: 'text-gray-400',          // #9ca3af on dark bg (4.6:1)
  
  // High contrast variants
  errorText: 'text-red-400',           // Better contrast than red-500
  successText: 'text-green-400',
  warningText: 'text-yellow-300',
  
  // Interactive states
  focusRing: 'ring-accent-primary',
  hoverBg: 'hover:bg-dark-600',
};
