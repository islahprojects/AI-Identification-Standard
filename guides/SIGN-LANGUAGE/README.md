# 🤟 Sign Language Integration
## Making AI ID Accessible to Deaf Users

---

## 🎥 Video Explainers

We're creating sign language videos explaining the AI ID standard in:

### Priority Languages
- [ ] American Sign Language (ASL)
- [ ] British Sign Language (BSL)
- [ ] Filipino Sign Language (FSL)
- [ ] Langue des Signes Française (LSF)
- [ ] Deutsche Gebärdensprache (DGS)
- [ ] 日本手話 (JSL - Japanese Sign Language)

### Video Content
1. **What is AI ID?** (30 seconds)
2. **How to recognize it** (30 seconds)
3. **What it means** (30 seconds)

---

## 🔗 Integration

Embed QR code or link in the AI ID tooltip:
```html
<div class="ai-id-container" 
     data-ai-id-state="rendered"
     data-ai-id-sign-video="https://ai-id.org/sign-language/asl-explainer.mp4">
  AI was here 🧬
  <button class="ai-id-sign-button" aria-label="Watch sign language explanation">
    🤟
  </button>
</div>

🤝 Contributing
If you are a certified sign language interpreter and can help record these videos, please contact:
📧 signlanguage@ai-id.org
License: CC BY-SA 4.0


---

## 📁 File 14: Update `/assets/ai-id-universal.css` (Add these lines)
```css
/* =========================================
   ACCESSIBILITY ENHANCEMENTS
   ========================================= */

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus visible for keyboard navigation */
.ai-id-container:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
  border-radius: 4px;
}

/* High visibility mode */
.ai-id-container[data-ai-id-visual="high"] {
  border: 2px solid currentColor;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.15);
  font-weight: 600;
}

/* Dyslexia-friendly variant */
.ai-id-container[data-ai-id-font="dyslexia"] {
  font-family: 'OpenDyslexic', 'Comic Sans MS', 'Chalkboard SE', sans-serif;
  letter-spacing: 0.05em;
  word-spacing: 0.1em;
  line-height: 1.8;
}

/* Haptic feedback trigger (mobile) */
.ai-id-container[data-ai-id-haptic="true"] {
  /* CSS can't trigger vibration, but JS can read this attribute */
}

/* Sign language button */
.ai-id-sign-button {
  display: inline-block;
  margin-left: 8px;
  padding: 4px 8px;
  background: rgba(255,255,255,0.2);
  border: 1px solid currentColor;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  opacity: 0;
  transition: opacity 0.2s;
}

.ai-id-container:hover .ai-id-sign-button,
.ai-id-container:focus-within .ai-id-sign-button {
  opacity: 1;
}

.ai-id-sign-button:focus,
.ai-id-sign-button:hover {
  background: rgba(255,255,255,0.3);
}
