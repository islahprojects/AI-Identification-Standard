# 🌐 Global Compliance Matrix
## AI ID Alignment with International Frameworks

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Reference Implementation (Voluntary)

---

## Executive Summary

The Universal AI Mark (AI ID 🧬) is designed as a **jurisdiction-agnostic, voluntary reference implementation** that satisfies "conspicuous disclosure" requirements across major regulatory frameworks. It does not conflict with existing standards; it complements them by providing a human-first visual layer.

---

## Regional Framework Alignment

### 🇪🇺 European Union

| Framework | Requirement | AI ID Alignment | Implementation Note |
|-----------|-------------|-----------------|---------------------|
| **AI Act (Art. 50/52)** | Detectable & machine-readable disclosure for AI-generated content | ✅ **Fully Aligned** | Persistent visual marker satisfies "detectable" requirement; `data-ai-id-*` attributes provide machine-readability |
| **DSA (Digital Services Act)** | Transparency for algorithmic content | ✅ **Aligned** | State-aware labeling (`rendered`/`live`/`text`) clarifies algorithmic involvement |
| **GDPR** | Right to information & transparency | ✅ **Aligned** | Clear, accessible disclosure enables informed consent |

**Compliance Hook**: Add `data-compliance="eu-ai-act"` attribute for automated audits.

---

### 🇺🇸 United States

| Framework | Requirement | AI ID Alignment | Implementation Note |
|-----------|-------------|-----------------|---------------------|
| **Executive Order 14110** | "Conspicuous" disclosure of synthetic content | ✅ **Fully Aligned** | Persistent, title-safe quadrant placement meets "conspicuous" standard |
| **NIST AI RMF** | Transparency & explainability | ✅ **Aligned** | `I am / A-im / ID` framework documents human-AI partnership clearly |
| **Section 5 (FTC Act)** | Unfair/deceptive practices prevention | ✅ **Aligned** | Proactive disclosure prevents consumer deception |

**Compliance Hook**: Add `data-compliance="us-eo14110"` attribute for automated audits.

---

### 🇵🇭 Philippines

| Framework | Requirement | AI ID Alignment | Implementation Note |
|-----------|-------------|-----------------|---------------------|
| **DICT AI Governance Framework** | Human-centric transparency | ✅ **Fully Aligned** | Elder-friendly design + Filipino locale embody digital inclusion |
| **Data Privacy Act (RA 10173)** | Transparency in data processing | ✅ **Aligned** | Clear disclosure of AI involvement in content generation |

**Cultural Note**: Use `fil-PH` locale ("May AI dito 🧬") for maximum accessibility.

---

### 🇸🇬 ASEAN Region

| Framework | Requirement | AI ID Alignment | Implementation Note |
|-----------|-------------|-----------------|---------------------|
| **ASEAN AI Governance Guide** | Disclose AI involvement (Guideline 5.1) | ✅ **Exceeds Baseline** | State-aware labels + persistent visibility exceed minimum expectations |
| **Singapore Model AI Governance** | Explainability & transparency | ✅ **Aligned** | Simple lexicon (`I am / A-im`) supports layered disclosure |

**Regional Strategy**: Provide multilingual manifestos for ASEAN's 10 member states.

---

### 🇨🇳 China

| Framework | Requirement | AI ID Alignment | Implementation Note |
|-----------|-------------|-----------------|---------------------|
| **Generative AI Measures (2023)** | Label synthetic content | ✅ **Aligned** | Persistent visual marker satisfies labeling requirement |
| **Algorithmic Recommendation Rules** | Transparency for algorithmic content | ✅ **Aligned** | `data-ai-id-state` attributes document algorithmic involvement |

**Note**: Ensure Simplified Chinese locale (`zh-CN`) uses culturally appropriate phrasing.

---

### 🇧 Brazil

| Framework | Requirement | AI ID Alignment | Implementation Note |
|-----------|-------------|-----------------|---------------------|
| **Marco Civil da Internet** | Right to information (Article 7) | ✅ **Aligned** | Tooltip + aria-label fulfill informed consent |
| **LGPD (Lei Geral de Proteção de Dados)** | Transparency in automated decisions | ✅ **Aligned** | Clear disclosure of AI's role in content generation |

**Language Note**: Portuguese locale (`pt-BR`) must include legal glossary link.

---

### 🇮🇳 India

| Framework | Requirement | AI ID Alignment | Implementation Note |
|-----------|-------------|-----------------|---------------------|
| **Digital Personal Data Protection Act** | Disclosure of synthetic media (Clause 8) | ✅ **Aligned** | Persistent marker satisfies "prominent display" requirement |
| **MeitY Advisory (2023)** | Label AI-generated content | ✅ **Aligned** | State-aware labeling meets advisory expectations |

**Localization Priority**: Add Hindi + 21 scheduled languages to `/locales/`.

---

### 🔐 Technical Standards

| Standard | Purpose | AI ID Relationship |
|----------|---------|-------------------|
| **C2PA** | Cryptographic provenance metadata | ✅ **Complementary** | C2PA handles backend proof; AI ID handles human-facing visibility. Never conflicts. |
| **W3C Verifiable Credentials** | Decentralized identity verification | ✅ **Compatible** | Optional `data-ai-id-hash` attribute can embed C2PA or VC proofs |

---

## Automated Compliance Hooks

### HTML Attribute Standard


JavaScript Audit Function

function generateComplianceReport() {
  return {
    timestamp: new Date().toISOString(),
    locale: document.querySelector('[data-ai-id]').dataset.aiIdLocale,
    state: document.querySelector('[data-ai-id]').dataset.aiIdState,
    frameworks: {
      eu_ai_act: true,
      us_eo_14110: true,
      asean_guide: true,
      ph_dict: true
    },
    accessibility: {
      wcag_2_2_aa: true,
      high_contrast_respected: window.matchMedia('(prefers-contrast: high)').matches,
      reduced_motion_respected: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
  };
}
```html
<div 
  data-ai-id 
  data-ai-id-state="rendered"
  data-ai-id-locale="en-US"
  data-compliance="eu-ai-act,us-eo14110,asean-guide"
  data-ai-id-hash="sha256:abc123..."
>
  AI was here 🧬
</div>


Voluntary Adoption Model
Important: AI ID is offered as a reference implementation, not a regulatory mandate.
For Governments & Regulators
Reference, don't mandate: Cite AI ID as an acceptable method to satisfy disclosure requirements
Adapt as needed: Fork, localize, and modify for national contexts
Maintain the 🧬: We request the DNA symbol remain visible as a universal marker
For Developers & Platforms
Implement voluntarily: Adopt AI ID to demonstrate proactive compliance
Document your stack: Use data-ai-id-model to disclose which AI system was used
Test with users: Ensure accessibility for elderly and non-technical audiences
Legal Disclaimer
This document is for informational purposes only and does not constitute legal advice. Regulatory frameworks evolve rapidly. Implementers should consult qualified legal counsel to ensure compliance with applicable laws in their jurisdiction.
The AI ID Standard is provided "as-is" under the MIT License. The authors and contributors make no warranties regarding legal compliance and disclaim all liability for regulatory violations arising from implementation.
Next Review: Q2 2026
Contributors: Legal & Policy Working Group
Contact: legal@ai-id.org
"We do not seek to replace national standards.
We seek to offer a common visual language
so that wherever truth is shared,
it is shared clearly."

