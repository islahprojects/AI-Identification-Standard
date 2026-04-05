Audio Announcements
Trigger: When content loads or enters viewport
Voice: Clear, calm, non-intrusive
Timing: Once per page load (not repeated on scroll)
Languages: Match user's system locale

Haptic Feedback (Mobile)
// Vibration pattern for AI ID detection
// Pattern: Short pulse (50ms) = gentle notification
if ('vibrate' in navigator) {
  navigator.vibrate(50);
}

Braille Display Compatibility
Use semantic HTML (role="note")
Provide full text alternative (not just emoji)
Ensure proper reading order
Test with JAWS, NVDA, VoiceOver
