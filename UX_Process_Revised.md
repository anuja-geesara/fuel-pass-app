# National Fuel Pass Redesign
## UX Process & Prototype Documentation

> **Project type:** Internship programme proposal prototype  
> **Purpose:** Redesign and develop the National Fuel Pass system as a proposal prototype for presentation to the director board of the Petroleum Corporation.

---

# 1. Project Overview

The project follows an end-to-end UX and development process for redesigning the National Fuel Pass experience.

The redesign focuses on two connected experiences:

- **Citizen / Vehicle Owner:** Accessing the fuel pass, checking quota, finding stations, and reviewing transactions.
- **Station Operator / Attendant:** Authenticating, scanning a citizen's QR pass, verifying eligibility, entering fuel quantity, and confirming the transaction.

The prototype is intended to demonstrate the proposed experience rather than represent a production implementation of the National Fuel Pass system.

## UX Process

The project follows this process:

**Research → Problem Definition → User & Stakeholder Analysis → Requirements → User Flows → Visual Design → Figma Prototype → Usability Testing → Iteration → React Development → Testing → Deployment**

AI tools are available throughout the internship workflow and are used to support research, analysis, ideation, documentation, development, and iteration. AI outputs are treated as working material and are reviewed before being incorporated into the project.

---

# 2. Stage 1: Research

## 2.1 Research Context

The redesign was approached as a dual-interface system involving citizens and station operators.

The initial research focused on identifying:

- The main tasks users need to complete.
- Potential friction during fuel transactions.
- Information users need before and during refuelling.
- Constraints that may affect the experience in real-world station environments.
- Opportunities where a clearer interface could reduce unnecessary interaction.

## 2.2 Initial Research Observations

The following observations were used as the starting point for the redesign:

1. Citizens need quick access to their fuel pass when they reach a station.
2. Citizens need clear visibility of their remaining weekly quota.
3. Citizens may benefit from knowing station availability before travelling to a station.
4. Station operators need a fast way to identify and verify a customer's fuel eligibility.
5. QR scanning and manual entry may require fallback options when scanning is unsuccessful.
6. Operator interfaces should make fuel quantity and remaining quota easy to understand.
7. The system serves different users, so the citizen and operator experiences should be designed separately while remaining connected.

These are design observations and starting points rather than claims of validated user research.

## 2.3 Initial Assumptions

The following assumptions were identified for validation through prototype review and usability testing:

1. Faster QR retrieval can reduce interaction time for citizens at fuel stations.
2. Showing remaining quota prominently can make the allowance easier to understand.
3. Station availability and estimated waiting information could help citizens choose where to refuel.
4. Preset fuel quantities could reduce operator input errors.
5. A manual registration-plate fallback could help when QR scanning is unsuccessful.
6. A clear confirmation step could reduce accidental quota deductions.

## 2.4 Proposed Validation

The prototype can be evaluated against the following questions:

- Can a citizen locate and display the QR pass quickly?
- Can a citizen understand their remaining quota and reset information?
- Can a citizen locate a station and understand its availability?
- Can an operator complete the verification and fuel-entry flow without unnecessary steps?
- Can an operator understand the amount being deducted before confirmation?
- Can users identify important actions and status messages without additional explanation?

---

# 3. Stage 2: Problem Definition

## 3.1 Problem Statement

The redesign aims to reduce friction in the fuel-distribution journey by making key information and actions easier to access for both citizens and station operators.

The main areas of focus are:

- Quick access to the citizen's fuel pass.
- Clear quota visibility.
- Better station information.
- Efficient operator verification.
- Reduced risk of incorrect fuel entry.
- Clear transaction confirmation.

## 3.2 Citizen Pain Points

### Station Uncertainty
Citizens may not know whether a station has the required fuel available or how long the queue may be.

### Quota Visibility
Users need an immediate understanding of how much fuel remains in their allocation and when the quota resets.

### Access to the Fuel Pass
The QR pass should be accessible without requiring users to navigate through multiple screens.

### Transaction History
Users should be able to review previous transactions and access their receipts.

## 3.3 Operator Pain Points

### Verification Time
Operators need to verify a customer's eligibility quickly to avoid unnecessary queue delays.

### QR Scanning Problems
Scanning may fail because of screen visibility, camera conditions, or other practical issues.

### Fuel Entry Errors
Manual quantity entry can introduce mistakes, particularly when the remaining quota is limited.

### Confirmation
The operator needs a clear final confirmation before the quota is deducted.

## 3.4 MVP Proposal

### Citizen Portal

- Sign in / onboarding
- Vehicle registration
- Quota dashboard
- QR Fuel Pass
- Station finder
- Station details
- Transaction history
- Digital receipt
- Profile and support

### Operator Portal

- Operator login
- QR scanner
- Manual registration-plate fallback
- Customer verification
- Fuel quantity entry
- Quick quantity presets
- Dispatch confirmation
- Transaction completion

---

# 4. Stage 3: Users & Stakeholders

## 4.1 Primary User: Citizen / Vehicle Owner

### Example Persona

**Name:** Nimal  
**Vehicle:** Toyota Yaris  
**Registration:** WP KA-5523  
**Fuel Type:** Petrol 92

### Goals

- Display the fuel pass quickly.
- Understand the remaining quota.
- Find a suitable fuel station.
- Review previous transactions.
- Access digital receipts.

### Needs

- Clear quota information.
- Simple navigation.
- Fast QR access.
- Understandable station availability.
- Easy access to transaction history.

> Personal identifiers such as NIC numbers, phone numbers, PINs, or other sensitive-looking values are intentionally excluded from this documentation.

## 4.2 Primary User: Station Operator

### Example Persona

**Role:** Fuel station attendant  
**Station:** CEYPETCO Colombo 07

### Goals

- Log into the operator interface.
- Scan and verify a customer's fuel pass.
- Confirm remaining quota.
- Enter the dispensed fuel amount.
- Complete the transaction efficiently.

### Needs

- Large, clear controls.
- High-visibility status information.
- QR scanning with fallback.
- Simple quantity selection.
- Clear final confirmation.

## 4.3 Stakeholders

Potential stakeholders considered during the redesign include:

- Petroleum Corporation / relevant fuel distribution authorities.
- Ministry-level bodies responsible for fuel allocation.
- Department of Motor Traffic-related vehicle records.
- Fuel retailers and station networks.
- Citizens and vehicle owners.
- Fuel station operators.

Stakeholder requirements should be validated against the actual operational requirements if the concept moves beyond the prototype stage.

---

# 5. Stage 4: Requirements

## 5.1 Functional Requirements

### Citizen Module

#### Onboarding & Authentication
- Landing screen with Sign In and Register Vehicle actions.
- Mobile authentication / OTP concept.
- Vehicle registration.

#### Dashboard
- Remaining quota.
- Allocated and used quota.
- Reset information.
- Quick access to QR pass.
- Quick access to station finder.
- Recent transactions.

#### QR Fuel Pass
- Full-screen QR presentation.
- High-contrast QR container.
- Clear vehicle information.
- Pass status / validity information.

#### Station Finder
- Station search.
- Fuel-type filtering.
- Availability indicators.
- Estimated waiting information.
- Station details.

#### History & Receipts
- Previous transactions.
- Transaction details.
- Digital receipt view.
- Receipt export concept.

#### Profile & Support
- Vehicle information.
- Language settings.
- Support / FAQ information.
- Government contact information where appropriate.

### Operator Module

#### Authentication
- Station/operator login.

#### QR Scanner
- Camera scanner interface.
- Flashlight control.
- Manual registration-plate fallback.

#### Customer Verification
- Verification status.
- Vehicle information.
- Remaining quota.

#### Fuel Entry
- Fuel quantity controls.
- Quick quantity presets.
- Automatic total calculation.

#### Dispatch Confirmation
- Final transaction summary.
- Clear quota deduction warning.

#### Completion
- Transaction success state.
- Receipt action.
- Scan next customer action.

## 5.2 Non-Functional Requirements

### Accessibility
- High-contrast interface choices.
- Large, easily identifiable interactive controls.
- Clear status indicators.
- QR presentation designed for scanning visibility.

Formal accessibility compliance should be validated separately rather than assumed.

### Localization

The prototype considers English, Sinhala, and Tamil language support.

### Responsive Design

The interface is designed primarily for mobile and handheld operator environments while allowing adaptation to different screen sizes.

---

# 6. Stage 5: User Flows

## 6.1 Master Flow

```text
                         LANDING
                            |
             +--------------+--------------+
             |                             |
       CITIZEN FLOW                 OPERATOR FLOW
             |                             |
       Sign In / Register             Operator Login
             |                             |
         Dashboard                    QR Scanner
             |                             |
     +-------+-------+              Verification
     |       |       |                    |
    QR    Stations History            Fuel Entry
            |       |                    |
       Station    Receipt            Confirmation
       Details                           |
                                         Success
```

## 6.2 Citizen Flow: Present Fuel Pass

1. Launch the application.
2. Sign in or complete registration.
3. Reach the dashboard.
4. View remaining quota.
5. Tap **Show Pass QR**.
6. Display the full-screen QR pass.
7. Present the QR pass to the station operator.

### UX Goal

The citizen should be able to reach the QR pass with minimal navigation.

## 6.3 Citizen Flow: Find Fuel

1. Open the dashboard.
2. Select **Find Stations**.
3. Review nearby stations.
4. Check fuel availability.
5. Review estimated waiting information.
6. Open station details if more information is required.

## 6.4 Citizen Flow: Review Receipt

1. Open transaction history.
2. Select a transaction.
3. View the digital receipt.
4. Review fuel quantity, price, date/time, and transaction information.
5. Use the available receipt/export action.

## 6.5 Operator Flow: Fuel Transaction

1. Open the operator interface.
2. Authenticate.
3. Open the QR scanner.
4. Scan the customer's QR pass.
5. Verify the customer and remaining quota.
6. Proceed to fuel entry.
7. Select or enter the fuel quantity.
8. Review the calculated amount.
9. Confirm the transaction.
10. Display the completion state.
11. Print/access the receipt where supported.
12. Return to scanner mode for the next customer.

---

# 7. Stage 6: Visual Design

## 7.1 Design Direction

The visual design uses a dark navy foundation with light surfaces and green action elements.

The design direction aims to communicate:

- Clarity
- Trust
- Fast interaction
- Strong visual hierarchy
- Consistency between citizen and operator interfaces

## 7.2 Color System

| Category | Example | Purpose |
|---|---|---|
| Dark Base | `#081B38` | Primary dark background |
| Dark Surface | `#0D2342` | Cards and operator surfaces |
| Light Surface | `#F8FAFC` / `#FFFFFF` | Content areas |
| Primary Action | `#059669` / `#10B981` | Main actions |
| Secondary Action | `#0F294A` | Secondary controls |
| Warning | `#D97706` | Limited stock / warnings |
| Danger | `#DC2626` | Errors / unavailable states |

The exact colors can be refined during implementation and accessibility testing.

## 7.3 Typography

- Primary font: Inter / system UI.
- Monospace styling can be used for registration plates, OTP values, and transaction identifiers where useful.
- Typography should maintain a clear hierarchy between headings, metrics, body text, and supporting information.

## 7.4 Core Components

### Quota Card

Displays:

- Remaining quota.
- Total allocation.
- Used quota.
- Reset information.
- Registered vehicle.

### QR Fuel Pass

Uses:

- Large QR code.
- White/high-contrast surrounding container.
- Clear vehicle information.
- Status/validity information.

### Operator Verification

Uses:

- Clear verification status.
- Vehicle information.
- Remaining quota.
- Strong primary action.

### Fuel Entry

Uses:

- Quantity controls.
- Quick presets.
- Automatic total calculation.
- Clear confirmation action.

---

# 8. Stage 7: Interactive Figma Prototype

## 8.1 Prototype Structure

The prototype contains two main sections.

### Citizen Portal

1. `landing`
2. `sign-in-otp`
3. `registration`
4. `dashboard`
5. `qr-fuel-pass`
6. `find-fuel`
7. `station-details`
8. `transactions`
9. `receipt`
10. `profile-help`

### Station Operator Portal

11. `operator-login`
12. `operator-scan-qr`
13. `operator-verify`
14. `operator-fuel-entry`
15. `operator-confirm`
16. `operator-success`

**Total: 16 prototype screens.**

## 8.2 Citizen Navigation

```text
landing
   |
   +--> sign-in-otp
   |
   +--> registration
            |
         dashboard
            |
    +-------+--------+----------+
    |       |        |          |
   QR    Stations  History   Profile
    |       |        |          |
  Pass   Details  Receipt     Help
```

## 8.3 Operator Navigation

```text
operator-login
      |
operator-scan-qr
      |
operator-verify
      |
operator-fuel-entry
      |
operator-confirm
      |
operator-success
      |
 +----+----+
 |         |
Receipt   Scan Next
```

## 8.4 Prototype Objective

The Figma prototype demonstrates the key user journeys before React development.

The prototype should be reviewed for:

- Navigation clarity.
- Task completion.
- Information hierarchy.
- Interaction consistency.
- Visual accessibility.
- Error prevention.

---

# 9. Stage 8: Usability Testing Plan

## 9.1 Testing Objectives

Testing should evaluate:

- How quickly citizens can find and display their QR pass.
- Whether citizens understand their quota.
- Whether station information is understandable.
- Whether operators can complete the transaction flow.
- Whether the fuel-entry controls reduce confusion.
- Whether important actions and warnings are noticed.

## 9.2 Suggested Participants

A small prototype usability test can include:

- Citizen / vehicle-owner participants.
- Station-operator-like participants or users familiar with point-of-sale workflows.

The number of participants should be based on the time and access available during the internship rather than treating a specific sample size as a proven requirement.

## 9.3 Test Tasks

### C1: Retrieve QR Pass

**Scenario:** You have arrived at a fuel station and need to present your fuel pass.

**Success:** Participant reaches the QR pass without unnecessary navigation.

### C2: Check Station Availability

**Scenario:** Find a nearby station with the required fuel and determine its availability.

**Success:** Participant identifies the fuel availability and waiting information.

### C3: Review a Transaction

**Scenario:** Find the details of a previous fuel transaction.

**Success:** Participant identifies the fuel quantity and total cost.

### O1: Operator Login

**Scenario:** Begin a station operator shift and access the scanner.

**Success:** Participant reaches the scanner interface.

### O2: Complete a Fuel Transaction

**Scenario:** Scan a customer's pass, verify the quota, enter the fuel amount, and confirm the transaction.

**Success:** Participant completes the flow without critical errors.

## 9.4 Metrics

### Task Completion

- Completed independently.
- Completed with minor assistance.
- Failed.

### Time on Task

Record the time required to complete each task.

### Errors

Record:

- Incorrect taps.
- Misunderstood labels.
- Navigation errors.
- Incorrect quantity selection.
- Missed warnings.

### SEQ

After each task:

> "On a scale from 1 to 7, how easy or difficult was this task?"

1 = Extremely difficult  
7 = Extremely easy

## 9.5 Testing Results

This section should only be completed **after testing is actually performed**.

| Participant | Persona | Task | Result | Time | Errors | SEQ |
|---|---|---|---|---|---|---|
| P-01 | Citizen | C1 | To be tested | | | |
| P-01 | Citizen | C2 | To be tested | | | |
| P-01 | Citizen | C3 | To be tested | | | |
| P-02 | Operator | O1 | To be tested | | | |
| P-02 | Operator | O2 | To be tested | | | |

---

# 10. Stage 9: Iteration

## 10.1 Iteration Principle

Design changes should be based on actual prototype review and usability-test observations.

Until testing is completed, the following are **proposed improvements**, not findings.

| Design Area | Proposed Improvement | Validation Needed |
|---|---|---|
| QR scanning | Use a high-contrast QR container | Test scanning/readability |
| Quota | Make remaining quota visually prominent | Test user comprehension |
| Operator entry | Use quick quantity presets | Test input accuracy |
| Scanner fallback | Provide manual plate entry | Test discoverability |
| Station information | Show availability and estimated waiting information | Test usefulness |

## 10.2 Actual Findings

To be completed after usability testing.

```text
Finding 1:
Observation:
Impact:
Design change:

Finding 2:
Observation:
Impact:
Design change:

Finding 3:
Observation:
Impact:
Design change:
```

---

# 11. Final Prototype Outcome

The final proposal prototype aims to provide:

### Citizen Experience

- Faster access to the fuel pass.
- Clear quota visibility.
- Easier station discovery.
- Accessible transaction history and receipts.
- Clear navigation and visual hierarchy.

### Operator Experience

- Dedicated operator workflow.
- Fast QR verification.
- Manual fallback when scanning fails.
- Simplified fuel quantity entry.
- Clear transaction confirmation.

The prototype is intended to demonstrate the proposed UX direction and key interactions. It is not a production implementation of the National Fuel Pass infrastructure.

---

# 12. Prototype Limitations

The current proposal prototype may use simulated data and interactions.

Potential limitations include:

- Real government authentication is not implemented.
- Real-time station inventory may be simulated.
- Real payment processing is outside the prototype scope.
- Physical thermal printing is represented as a prototype action rather than actual hardware integration.
- Camera/QR scanning may be simulated or use a development fallback.
- Offline functionality should be treated as a future implementation unless it is actually implemented in the React application.
- Accessibility compliance should be formally tested before making production-level claims.

---

# 13. Future Recommendations

Potential future improvements include:

### Offline QR Access

A Progressive Web App/service-worker approach could allow previously available pass information to remain accessible during temporary connectivity problems.

### Live Station Data

Production integration could provide live fuel stock and queue information.

### Improved Station Interaction

Future versions could explore location-aware station discovery and faster station check-in.

### Production Security

A production system would require secure authentication, authorization, data protection, audit logging, and integration with authoritative government and retailer systems.

---

# 14. AI-Assisted UX Process

AI tools are available throughout the internship and can be used as part of the workflow.

AI can support:

- Research planning.
- Problem analysis.
- Persona development.
- Requirement analysis.
- User-flow generation.
- UX ideation.
- Design critique.
- Usability-test planning.
- Documentation.
- React development.
- Debugging and iteration.

AI-generated suggestions should be reviewed by the team before being accepted as project decisions.

## AI Thread Links

Add the relevant AI conversation/thread links used during the project here.

| Activity | AI Tool | Thread / Link |
|---|---|---|
| UX Process | | |
| Research / Analysis | | |
| Requirements | | |
| UX / UI Design | | |
| Development | | |
| Testing / Iteration | | |

---

# 15. Project Artifacts

## Figma

**Figma Prototype:**  
`[Add Figma link]`

## GitHub

**Source Repository:**  
`[Add GitHub repository link]`

## Hosted React Application

**Live Prototype:**  
`[Add Vercel / hosting link]`

## UX Process

This document:

`UX_Process.md`

---

# 16. Development Handoff

The approved Figma prototype is used as the design reference for React development.

Development should preserve:

- The defined user flows.
- The visual hierarchy.
- The primary citizen and operator tasks.
- Key accessibility considerations.
- Prototype navigation.
- Error-prevention patterns.

The React implementation may simplify or simulate functionality where real backend services are outside the scope of the proposal prototype.

---

# 17. Final Checklist

Before final delivery, confirm:

- [ ] UX process documented.
- [ ] Research assumptions clearly separated from validated findings.
- [ ] Problem definition completed.
- [ ] Users and stakeholders documented.
- [ ] Requirements documented.
- [ ] User flows documented.
- [ ] Figma prototype completed.
- [ ] Prototype contains the final agreed screen count.
- [ ] Usability testing completed or clearly marked as planned.
- [ ] Actual findings documented if testing was performed.
- [ ] Design iterations linked to findings.
- [ ] AI thread links added.
- [ ] Figma link added.
- [ ] GitHub repository added.
- [ ] Hosted React application link added.
- [ ] Prototype limitations documented.
- [ ] No unnecessary personal or sensitive-looking data included.
- [ ] No unsupported claims of production functionality or accessibility compliance.
