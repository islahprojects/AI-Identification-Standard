# 🎨 Visual Kit: Usage & Variants
## Scaling the Universal AI Mark Across Contexts

> **Core Rule**: The text string `AI was here 🧬` (or locale equivalent) is the **primary mark**.  
> This SVG is for **icons, logos, UI buttons, and print layouts** where the emoji doesn't scale cleanly.

---

## 📐 Implementation Basics

### 1. Inline (Recommended for Web)
```html
<!-- Automatically inherits text color & size -->
<span class="ai-id-container">
  <svg aria-hidden="true" width="16" height="16" style="vertical-align: middle; margin-right: 6px;">
    <!-- Paste dna-helix.svg content here -->
  </svg>
  AI ID 🧬
</span>
