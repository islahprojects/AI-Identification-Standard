/*!
 * Universal AI Mark (AI ID 🧬) - Script
 * Version: 1.0.0
 * License: MIT
 * Description: Auto-initializes AI ID containers, validates states,
 * and dispatches lifecycle events for analytics/audit.
 */

(function () {
  'use strict';

  const VALID_STATES = ['rendered', 'live', 'text'];
  const DEFAULT_LOCALE = 'en-US';

  /**
   * Initialize all AI ID markers on the page
   */
  function initAIID() {
    const markers = document.querySelectorAll('[data-ai-id]');
    if (!markers.length) return;

    markers.forEach((el, index) => {
      // Validate state attribute
      let state = el.dataset.aiIdState || 'rendered';
      if (!VALID_STATES.includes(state)) {
        console.warn(`🧬 AI ID Warning: Invalid state "${state}". Defaulting to "rendered".`);
        state = 'rendered';
        el.dataset.aiIdState = state;
      }

      // Ensure locale fallback
      if (!el.dataset.aiIdLocale) {
        el.dataset.aiIdLocale = DEFAULT_LOCALE;
      }

      // Add accessible role & label if missing
      if (!el.getAttribute('role')) el.setAttribute('role', 'note');
      if (!el.getAttribute('aria-label')) {
        el.setAttribute('aria-label', `AI-assisted content (${state}): verified human-AI collaboration`);
      }

      // Mark as initialized
      el.setAttribute('data-ai-id-init', 'true');
      console.log(`🧬 AI ID #${index + 1} mounted | State: ${state} | Locale: ${el.dataset.aiIdLocale}`);
    });

    // Dispatch global event for analytics/compliance tools
    window.dispatchEvent(new CustomEvent('aiid:ready', {
      detail: { count: markers.length, timestamp: new Date().toISOString() }
    }));

    console.log('%c🌍 Universal AI Mark: Initialized. Walang maiiwan.', 'color: #11998e; font-weight: bold;');
  }

  /**
   * Public API: Dynamically update state of an existing marker
   * Usage: window.AIID.updateState(element, 'live')
   */
  window.AIID = window.AIID || {};
  window.AIID.updateState = function (el, newState) {
    if (!el || !VALID_STATES.includes(newState)) return;
    el.dataset.aiIdState = newState;
    el.setAttribute('aria-label', `AI-assisted content (${newState}): verified human-AI collaboration`);
  };

  // Auto-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIID);
  } else {
    initAIID();
  }
})();
