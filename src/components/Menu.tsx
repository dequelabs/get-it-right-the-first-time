import { useRef, useEffect, useCallback } from 'preact/hooks';
import focusable from 'focusable';
import pizza from '../assets/images/pizza.jpg';

const menuItems = [
  {
    name: 'Pizza with no toppings'
  },
  {
    name: 'Pizza with some toppings'
  },
  {
    name: 'Pizza with all the toppings'
  },
]

interface MenuProps {
  onClose: () => void
}

const Menu = ({ onClose }: MenuProps) => {
  const dialogRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Immediately focus the dialog on render
    dialogRef.current?.focus();

    // Handle focus traps
    const focusableElements = dialogRef.current?.querySelectorAll(focusable);
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    const focusTrap = (event: KeyboardEvent) => {
      const isTabKey = event.key === 'Tab';

      if (!isTabKey) {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
      } else if (document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    }

    document.addEventListener('keydown', focusTrap, true);

    // Set every other element to hidden
    const nonModalElements = Array.from(document.querySelectorAll('body > *:not([role="dialog"]):not([aria-hidden="true"])'));
    console.log(nonModalElements)
    nonModalElements.forEach(el => el.setAttribute('aria-hidden', 'true'));

    return () => {
      document.addEventListener('keydown', focusTrap, true);
      // Cleanup aria-hidden elements
      nonModalElements.forEach(el => el.removeAttribute('aria-hidden'));
    }
  }, [dialogRef.current])

  return (
    <>
      <div class="backdrop"></div>
      <div class="dialog" role="dialog" aria-modal="true" tabIndex={-1} ref={dialogRef}>
        <div class="dialog__header">
          <h2>Our Menu</h2>
          <button onClick={onClose} aria-label="Close Menu">✕</button>
        </div>
        <div class="dialog__content">
          <ul>
            {menuItems.map(({ name }, index) => (
              <li key={index}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
};

export default Menu;