# Fuel Pass Research

**Project:** National Fuel Pass Redesign – Internship Proposal Prototype  
**Purpose:** Secondary research to inform the redesign of Sri Lanka's National Fuel Pass citizen and fuel-station operator experience.  
**Research status:** Desk research completed using official government/ICTA/CPC sources and recent reporting. This document deliberately separates **evidence**, **inference**, and **hypotheses**. No primary user interviews or usability tests are claimed here.

---

## 1. Research Scope

This research covers:

1. Current Sri Lankan National Fuel Pass process
2. Citizen experience
3. Fuel station/operator experience
4. Known problems and friction
5. QR/verification workflow
6. Fuel quota management
7. Fuel station availability
8. Comparable digital systems
9. Accessibility and localization
10. Opportunities for redesign

### Evidence rule

- **Fact / observation:** directly supported by a cited source.
- **Inference:** a UX implication derived from one or more findings.
- **Hypothesis:** something the team should validate through user research or usability testing.
- **Not established:** information that could not be verified from the available sources.

---

# 2. Current National Fuel Pass Process

## Finding 2.1 – The system uses a vehicle-linked QR code to control fuel access

**Finding:** The National Fuel Pass provides a QR code linked to a registered vehicle and its permitted fuel quota. Fuel is issued by presenting the QR code at a fuel station, where station staff validate the QR code and available allocation.

**Source:** ICTA National Fuel Pass FAQ; Ceylon Petroleum Corporation National Fuel Pass information.

**Who it affects:** Citizens and fuel-station operators.

**Why it matters:** The QR code is the central interaction connecting the citizen's entitlement with the station transaction.

**UX implication:** The redesigned citizen experience should make the QR pass extremely easy to locate, understand, and present. The operator experience should make scanning and verification equally clear.

Sources:
- https://www.icta.lk/uncategorized-ta/frequently-asked-questions-about-the-national-fuel-pass
- https://ceypetco.gov.lk/2022/07/16/ministry-of-power-and-energy-launches-national-fuel-pass-to-streamline-fuel-distribution/

---

## Finding 2.2 – Registration requires identity, contact, and vehicle information

**Finding:** The ICTA FAQ states that registration requires a valid NIC/passport/business registration number, mobile number, vehicle number, chassis number, vehicle category, and fuel type. The mobile number is cross-validated using OTP, while vehicle information is cross-validated with the Department of Motor Traffic database.

**Source:** ICTA National Fuel Pass FAQ.

**Who it affects:** Citizens during onboarding; support staff when registration fails.

**Why it matters:** Registration depends on multiple pieces of information and external validation, creating several potential failure points.

**UX implication:** Registration should explain why each required field is needed, use clear formatting guidance, validate errors near the relevant field, and provide recovery paths when external data does not match.

---

## Finding 2.3 – One profile is associated with one vehicle in the documented standard flow

**Finding:** The ICTA FAQ states that the service is limited to one NIC/passport/business registration number and one vehicle, and one vehicle per profile.

**Source:** ICTA National Fuel Pass FAQ.

**Who it affects:** Citizens with one or more vehicles; organizations with multiple vehicles may require different registration arrangements.

**Why it matters:** Users may misunderstand whether their account, identity, phone number, or vehicle is the primary object being managed.

**UX implication:** The redesigned information architecture should make the relationship between **person/account → vehicle → QR pass → quota** explicit.

---

## Finding 2.4 – The 2026 reintroduction made QR mandatory for fuel issuance

**Finding:** The Ministry of Energy announced that the QR system would be enforced from 6:00 a.m. on 15 March 2026 and that fuel would not be issued at fuel stations without a QR code.

**Source:** Ministry of Energy, 15 March 2026.

**Who it affects:** Citizens, station operators, and fuel distribution stakeholders.

**Why it matters:** The QR interaction is not an optional convenience. In the 2026 rollout it became a required part of the service.

**UX implication:** QR retrieval, display, scanning, and recovery should be treated as a critical path rather than a secondary feature.

---

# 3. Citizen Experience

## Finding 3.1 – Citizens can retrieve a QR code after losing it

**Finding:** Official guidance states that users who already registered can retrieve their QR code through the Fuel Pass system. Earlier official guidance also documented SMS retrieval as an alternative.

**Source:** Ministry of Energy; ICTA; CPC.

**Who it affects:** Citizens who lose, delete, or cannot immediately access their QR code.

**Why it matters:** QR access must not depend on remembering where the original code was saved.

**UX implication:** Provide a highly visible **View / Retrieve QR Pass** action and clear recovery instructions.

---

## Finding 3.2 – Vehicle ownership and phone-number changes are major account edge cases

**Finding:** Current GIC guidance addresses situations involving previous vehicle owners, changed contact numbers, deleted profiles, and vehicles already associated with another registration. Users may need to re-register or use an ownership-related recovery process.

**Source:** Government Information Center Fuel Pass FAQ.

**Who it affects:** Second-hand vehicle owners and users who changed their mobile number.

**Why it matters:** These are not rare theoretical errors in the current system. They are explicitly represented in the support documentation.

**UX implication:** The redesign should provide dedicated recovery states for:
- vehicle already registered,
- previous owner linked,
- phone number changed,
- QR blocked,
- QR regeneration,
- registration temporarily unavailable.

---

## Finding 3.3 – Registration and onboarding generated significant friction during the 2026 relaunch

**Finding:** Recent reporting described users being unable to register with new phone numbers, used vehicles appearing as already registered, temporary service unavailability, and difficulty reaching support channels.

**Source:** Daily FT; EconomyNext; Sunday Times.

**Who it affects:** Citizens attempting registration or resolving registration problems.

**Why it matters:** A technically correct registration flow can still fail as a user experience if users cannot understand or recover from system-side problems.

**UX implication:** Error messages should explain:
1. What happened.
2. Whether the user's information was saved.
3. What the user should do next.
4. Whether they need to contact support.
5. What information to provide to support.

---

## Finding 3.4 – Users experienced uncertainty around system availability

**Finding:** Recent reporting and public commentary described periods in which the registration service was unavailable or overloaded during the 2026 relaunch.

**Source:** EconomyNext; Sunday Times; public commentary analysis by Sanjana Hattotuwa.

**Who it affects:** Citizens attempting registration during high-demand periods.

**Why it matters:** A generic "try again later" message creates uncertainty, especially when fuel access is time-sensitive.

**UX implication:** The redesign should distinguish between:
- service unavailable,
- registration processing,
- data mismatch,
- account already registered,
- temporary server issue,
- successful registration.

Where possible, provide a clear recovery action instead of a dead-end error.

---

# 4. Fuel Station / Operator Experience

## Finding 4.1 – Station staff validate the QR code against the vehicle and quota

**Finding:** Official guidance states that station staff scan the QR code and validate the registered vehicle information and fuel allocation. The ICTA FAQ specifically states that station staff validate the vehicle number in the QR against the vehicle presented for fueling.

**Source:** ICTA FAQ; CPC National Fuel Pass information.

**Who it affects:** Fuel-station operators and citizens.

**Why it matters:** Operator verification is a safety and fraud-control step as well as a transaction step.

**UX implication:** The operator interface should prioritize:
- fast scanning,
- highly visible vehicle identity,
- quota/balance,
- fuel amount,
- clear confirmation,
- clear rejection/error states.

---

## Finding 4.2 – Operators may encounter invalid or blocked QR codes

**Finding:** The Government Information Center FAQ documents cases where a QR code cannot be scanned and appears blocked, including situations related to vehicle ownership changes or mobile-number changes. It recommends regeneration of the QR code.

**Source:** Government Information Center Fuel Pass FAQ.

**Who it affects:** Operators and citizens.

**Why it matters:** The operator should not be left to diagnose a citizen's account problem.

**UX implication:** Invalid/blocked QR screens should provide a short explanation and a clear next step for the citizen, while allowing the operator to safely stop the transaction.

---

## Finding 4.3 – The 2026 rollout exposed station-side readiness problems

**Finding:** EconomyNext reported that some fuel stations were not ready with QR scanning equipment during the initial rollout, while the Sunday Times reported cases of stations dispensing fuel without scanning QR codes.

**Source:** EconomyNext; Sunday Times.

**Who it affects:** Operators and citizens.

**Why it matters:** The service depends on both the digital system and physical station workflow. A redesign cannot assume the software is the only point of failure.

**UX implication:** Operator UX should account for real station conditions:
- quick interaction,
- readable information,
- clear device states,
- scanner failure handling,
- explicit transaction confirmation,
- prevention of accidental duplicate transactions.

---

## Finding 4.4 – Operator workflow needs to support speed without removing verification

**Finding:** The official process requires QR validation and quota enforcement at the station. Recent reports also show that queues can remain even when QR rationing is active.

**Source:** ICTA/CPC process documentation; Daily FT; EconomyNext.

**Who it affects:** Operators and citizens waiting at stations.

**Why it matters:** The operator experience is part of overall queue performance.

**UX implication:** The redesign should minimize unnecessary operator decisions and screen transitions while preserving mandatory verification.

**Hypothesis to test:** A simplified scan → verify → fuel amount → confirm flow can reduce operator interaction time without increasing verification errors.

---

# 5. Known Problems and Friction

## Finding 5.1 – Registration problems are a major documented friction area

**Finding:** Current support documentation contains numerous registration-related cases, including duplicate/previous-owner registrations, changed contact numbers, vehicle ownership transfers, temporary service interruptions, and existing profiles.

**Source:** Government Information Center Fuel Pass FAQ.

**Who it affects:** Citizens and support teams.

**Why it matters:** Registration is not just a form. It is a recovery-heavy service.

**UX implication:** Error recovery should be designed as part of the primary experience rather than added later.

---

## Finding 5.2 – Support demand can overwhelm existing channels

**Finding:** During the 2026 relaunch, reporting stated that the 1919 hotline was overwhelmed. A dedicated WhatsApp support channel was subsequently introduced.

**Source:** Daily FT; Government Information Center.

**Who it affects:** Citizens and support teams.

**Why it matters:** When a digital service fails at national scale, support becomes part of the product experience.

**UX implication:** The interface should reduce avoidable support requests by providing contextual help, useful error messages, and clear escalation instructions.

---

## Finding 5.3 – Queues are not solved by QR allocation alone

**Finding:** Despite fuel quotas and QR distribution, reports from March 2026 described long queues at several fuel stations.

**Source:** Daily FT; EconomyNext; Reuters.

**Who it affects:** Citizens and station operators.

**Why it matters:** The redesign should not treat QR verification as the entire queue problem.

**UX implication:** Station availability, expected wait, stock status, and transaction speed are potential complementary UX opportunities.

**Hypothesis to test:** Giving citizens better station information before travelling may reduce unnecessary trips and improve perceived predictability.

---

## Finding 5.4 – Fraud and QR misuse are a significant concern

**Finding:** The Ministry/Government Information Center warns against fraudulent registrations and QR misuse. In March 2026, the Ministry of Digital Economy reported more than 1,000 complaints involving misuse of other people's QR codes, with some cases referred to police.

**Source:** Government Information Center; Ada Derana.

**Who it affects:** Citizens, operators, government, and fuel stations.

**Why it matters:** A redesign must improve usability without making identity/transaction verification weaker.

**UX implication:** Show enough vehicle/transaction information for legitimate verification while avoiding unnecessary exposure of personal data.

---

# 6. QR / Verification Workflow

## Current evidence-based flow

```text
Citizen registers / re-registers vehicle
        ↓
Identity + mobile + vehicle data validated
        ↓
QR code generated / retrieved
        ↓
Citizen presents QR at fuel station
        ↓
Station staff scans QR
        ↓
Vehicle / eligibility / quota validated
        ↓
Fuel issued within available allocation
        ↓
Transaction recorded / confirmation provided
```

**Sources:** ICTA FAQ; CPC; Ministry of Energy.

---

## UX observation

The current flow has two distinct users:

### Citizen
Needs to:
- register,
- recover account/QR,
- understand quota,
- present QR.

### Operator
Needs to:
- scan,
- verify,
- enter/confirm fuel amount,
- complete the transaction.

**UX implication:** The redesign should treat citizen and operator interfaces as two connected but distinct products.

---

# 7. Fuel Quota Management

## Finding 7.1 – Quota is linked to vehicle category

**Finding:** Official documentation states that fuel allocation is based on vehicle category. The Ministry of Energy's March 2026 announcement listed different quota amounts for categories including motorcycles, cars, vans, buses, lorries, three-wheelers, and special-purpose vehicles.

**Source:** Ministry of Energy, 15 March 2026.

**Who it affects:** Citizens, operators, and administrators.

**Why it matters:** Users need to understand why their quota has a particular value.

**UX implication:** Show:
- eligible weekly quota,
- remaining balance,
- amount used,
- next reset,
- vehicle category.

Avoid forcing users to infer the quota from transaction history.

---

## Finding 7.2 – Quota reset information needs especially clear communication

**Finding:** Older official documentation states that unused quota does not carry forward and that the quota refreshed every Sunday. Current GIC guidance says quotas reset at 12:00 AM on Saturday, while the March 2026 Ministry announcement provides quota amounts but does not establish the reset wording in the same way.

**Source:** ICTA FAQ; CPC; current GIC Fuel Pass page; Ministry of Energy.

**Why it matters:** The official sources currently contain different wording about the reset timing.

**UX implication:** The prototype should not hard-code a reset day/time unless the project team verifies the currently authoritative rule. A safer design is to display an explicit **Next quota reset: [date/time]** value supplied by the system.

**Research note:** This discrepancy should be flagged to the internship team rather than silently "fixing" it in the UX documentation.

---

# 8. Fuel Station Availability

## Finding 8.1 – Sri Lanka has previously implemented fuel availability information

**Finding:** ICTA documented a Fuel Information Management System intended to provide visibility into fuel stations, fuel types, dispatched quantities, and available stock. The first phase used daily updates and allowed searching by location, station, and fuel type.

**Source:** ICTA Fuel Information Management System.

**Who it affects:** Citizens.

**Why it matters:** Station availability is an established need in Sri Lanka's fuel-distribution context, not an arbitrary feature invented for the redesign.

**UX implication:** A redesigned Fuel Pass could integrate station information into the citizen journey instead of treating fuel availability as a separate problem.

---

## Finding 8.2 – Historical availability data was not necessarily real-time

**Finding:** The documented Fuel Information Management System described daily morning updates in its first phase.

**Source:** ICTA.

**Why it matters:** Users can be misled if a UI visually implies live availability while the underlying data is stale.

**UX implication:** Display **Last updated** time and distinguish between:
- available,
- low stock,
- unavailable,
- unknown/stale data.

**Hypothesis to test:** Users may value a trustworthy "last updated" indicator more than an apparently precise stock number that may already be outdated.

---

# 9. Comparable Digital Systems

## Finding 9.1 – Indonesia's Subsidi Tepat / MyPertamina uses vehicle-linked QR access for subsidized fuel

**Finding:** Indonesia's official Subsidi Tepat service allows users to create an account, register a vehicle/business, complete verification, and obtain a vehicle QR code used for subsidized fuel transactions. The service provides an account area for managing vehicle data and downloading the QR code.

**Source:** Official Subsidi Tepat / MyPertamina.

**Who it affects:** Comparable fuel-rationing users and service designers.

**Why it matters:** It demonstrates a comparable pattern in which vehicle registration, identity verification, QR access, and fuel transactions form one connected service.

**UX implication:** Useful patterns to study include:
- clear account/vehicle relationship,
- dedicated QR management,
- registration guidance,
- document preparation guidance,
- explicit verification states.

Source:
https://subsiditepat.mypertamina.id/

---

## Finding 9.2 – Government digital-service standards emphasize user research and usability testing

**Finding:** Singapore's Government Digital Service Standards explicitly recommend understanding user context and needs before deciding on a solution and conducting usability testing before public release.

**Source:** Government Technology Agency of Singapore.

**Who it affects:** The project team.

**Why it matters:** This supports the internship team's planned sequence of research → requirements → prototype → testing → iteration.

**UX implication:** The team's usability testing should be documented with findings and severity, not treated as a formality.

---

# 10. Accessibility and Localization

## Finding 10.1 – Sri Lankan government websites are expected to support Sinhala, Tamil, and English

**Finding:** ICTA's Sri Lanka Government Website Guidelines state that government organizations should make website content available in Sinhala, Tamil, and English and use Unicode. The guidelines also recommend accessibility efforts for everyone.

**Source:** ICTA, Guidelines for Developing Sri Lanka Government Websites 4.0.

**Who it affects:** All citizens, particularly users who prefer Sinhala or Tamil.

**Why it matters:** Localization is not simply translating a few labels. It affects navigation, error messages, help content, dates, numbers, and the ability to complete the whole transaction.

**UX implication:** The prototype should include a visible language selector and ensure the important transaction path is available in all three languages.

---

## Finding 10.2 – Language should be considered during testing

**Finding:** Sri Lankan government language policy recognizes Sinhala and Tamil as official languages and English as the link language. Government services are expected to support citizens' language rights.

**Source:** Official Languages Commission; Ministry of Justice National Language Division.

**UX implication:** If possible, usability testing should include participants using different language versions, particularly for critical flows and error messages.

---

## Finding 10.3 – Avoid unsupported accessibility claims

**Finding:** The available sources support designing for accessibility, but they do not establish that the team's prototype meets WCAG AAA.

**Why it matters:** A prototype should not claim compliance that has not been tested.

**UX implication:** Document accessibility as **design goals and checks** unless formal conformance testing is performed.

Suggested checks:
- sufficient contrast,
- readable text,
- clear focus/interaction states,
- meaningful labels,
- understandable errors,
- non-color-only status indicators,
- scalable layouts,
- keyboard support where applicable.

---

# 11. Initial Research-Derived Problem Areas

Based on the evidence above, the redesign should investigate these problem areas:

### Problem Area 1 – Registration recovery

Citizens can encounter vehicle ownership, phone-number, duplicate-registration, and temporary service issues.

**Design opportunity:** Build recovery directly into onboarding rather than treating every problem as a support ticket.

---

### Problem Area 2 – QR accessibility

The QR code is a critical transaction credential.

**Design opportunity:** Make QR access one of the most prominent actions after login, with clear retrieval and regeneration paths.

---

### Problem Area 3 – Operator transaction speed

The station workflow requires scanning and verification while queues may form.

**Design opportunity:** Reduce unnecessary steps and cognitive load while keeping verification visible.

---

### Problem Area 4 – Quota understanding

Users need to understand both entitlement and remaining balance.

**Design opportunity:** Make quota a first-class dashboard element and clearly show reset information.

---

### Problem Area 5 – Station uncertainty

Historical ICTA work and recent queue reports demonstrate the importance of fuel-station availability information.

**Design opportunity:** Provide station information with a visible freshness/last-updated state.

---

### Problem Area 6 – Error recovery

Current support material contains many specific failure scenarios.

**Design opportunity:** Convert common support questions into contextual error states and guided recovery.

---

### Problem Area 7 – Trust and fraud prevention

QR misuse and fraudulent registration are documented concerns.

**Design opportunity:** Provide strong verification feedback without unnecessarily exposing personal information.

---

### Problem Area 8 – Multilingual public service

Sinhala, Tamil, and English support is important for an inclusive government service.

**Design opportunity:** Design the information architecture and components so all three languages can be supported consistently.

---

# 12. Initial Users

These are **design personas**, not research participants.

## Primary User A – Citizen / Vehicle Owner

**Goals**
- Register or access vehicle
- Know available fuel quota
- Find a suitable station
- Present QR quickly
- Confirm that the transaction succeeded

**Needs**
- Clear information
- Reliable QR access
- Understandable errors
- Station information
- Language choice

**Likely pain points to validate**
- Registration confusion
- Vehicle ownership issues
- Difficulty finding QR
- Uncertainty about quota
- Uncertainty about station availability

---

## Primary User B – Fuel Station Operator

**Goals**
- Authenticate
- Scan QR
- Verify vehicle/pass
- Record fuel amount
- Complete transaction quickly

**Needs**
- Fast scanning
- Clear verification information
- Strong success/error feedback
- Minimal unnecessary navigation

**Likely pain points to validate**
- Scanner failures
- Ambiguous QR states
- Slow verification
- Duplicate/incorrect transactions
- Poor readability in station conditions

---

# 13. Requirements Derived from Research

These are **initial requirements** and should be reviewed against the final research and Figma.

## Citizen

| ID | Requirement |
|---|---|
| C-01 | Register a vehicle using required identity/contact/vehicle information |
| C-02 | Receive OTP-based verification where required |
| C-03 | Clearly see the registered vehicle |
| C-04 | View eligible and remaining fuel quota |
| C-05 | See next quota reset information |
| C-06 | Access QR fuel pass quickly |
| C-07 | Recover/regenerate QR when necessary |
| C-08 | Find fuel stations |
| C-09 | View station availability with last-updated information |
| C-10 | View transaction history |
| C-11 | Access transaction receipt/confirmation |
| C-12 | Receive clear recovery instructions for common errors |
| C-13 | Use the service in Sinhala, Tamil, or English |

## Operator

| ID | Requirement |
|---|---|
| O-01 | Authenticate as an operator |
| O-02 | Scan citizen QR |
| O-03 | Display verified vehicle/pass information |
| O-04 | Show available quota/balance |
| O-05 | Enter fuel amount |
| O-06 | Validate amount against available allocation |
| O-07 | Confirm transaction |
| O-08 | Clearly display success |
| O-09 | Clearly display invalid/blocked QR states |
| O-10 | Prevent or warn against accidental duplicate processing |

---

# 14. Research Hypotheses to Validate

The following are **not research findings**. They are hypotheses for usability testing.

### H1 – QR visibility
Users will locate the QR fuel pass quickly if it is presented as a primary dashboard action.

### H2 – Quota comprehension
Users will understand their remaining allowance more easily when eligible quota, remaining balance, and reset date are displayed together.

### H3 – Station information
Users will make better station decisions when availability information includes a clear last-updated timestamp.

### H4 – Registration recovery
Users will complete more registration-recovery tasks when errors explain the cause and provide a specific next action.

### H5 – Operator flow
Operators will complete QR verification more efficiently when the workflow is reduced to scan → verify → fuel amount → confirm.

### H6 – Localization
Users will complete critical tasks more confidently when all transaction-critical content is available in their preferred language.

---

# 15. Research Gaps

The desk research does **not** answer several important questions.

These require primary research or usability testing:

1. How quickly can citizens locate their QR?
2. Which dashboard information is most important to citizens?
3. Do citizens understand the quota terminology?
4. Which station information is most useful before travelling?
5. How much time does the operator actually spend per transaction?
6. Which operator information is essential during verification?
7. What happens when a QR cannot be scanned?
8. Which error messages are easiest to understand?
9. How do Sinhala/Tamil users perceive the translated interface?
10. Do users understand the relationship between vehicle, quota, QR, and transaction history?

---

# 16. Evidence vs Assumptions

| Statement | Classification |
|---|---|
| Fuel Pass uses a vehicle-linked QR code | Evidence |
| Registration requires identity, mobile, and vehicle information | Evidence |
| Vehicle information is cross-validated with DMT data | Evidence |
| Station staff validate QR/vehicle/quota | Evidence |
| Registration and ownership-transfer problems exist | Evidence |
| QR misuse/fraud is a documented issue | Evidence |
| Fuel availability information has previously been provided through a separate government system | Evidence |
| Station availability should be integrated into the redesigned experience | UX inference |
| QR should be a primary dashboard action | UX hypothesis/design recommendation |
| Real-time stock is required | Not established |
| Users will prefer a map over a list | Hypothesis |
| Operator flow must take under 15 seconds | Target/hypothesis, not evidence |
| Prototype meets WCAG AAA | Not established |
| Users find the current dashboard confusing | Not established without user testing |
| Users prefer English/Sinhala/Tamil in specific proportions | Not established |

---

# 17. Recommended Research-to-Design Chain

The research should now feed directly into the next UX stages:

```text
Research Evidence
       ↓
Problem Areas
       ↓
User Needs
       ↓
Requirements
       ↓
User Flows
       ↓
Figma Prototype
       ↓
Usability Testing
       ↓
Findings
       ↓
Design Iteration
       ↓
React MVP
```

The team should not treat the Figma screens as the starting point for deciding what the product does. The research and requirements should explain why the screens exist.

---

# 18. Immediate Next Actions

## Action 1 – Review current Figma against the requirements

Check every existing screen against the requirements in Section 13.

Record:

```text
Requirement:
Figma screen:
Satisfied?:
Evidence:
Change needed:
```

## Action 2 – Resolve the quota-reset discrepancy

The research sources currently contain different wording about the quota reset timing. Confirm the rule with the project team before putting a specific reset day/time into the final prototype.

## Action 3 – Validate the highest-risk flows

Prioritize testing:

1. Registration
2. QR retrieval
3. Quota understanding
4. Station discovery
5. Operator QR verification
6. Fuel amount confirmation
7. Invalid QR recovery

## Action 4 – Prepare usability testing

Recruit a small set of representative participants and use task-based testing rather than explaining the interface to them.

## Action 5 – Update `UX_Process.md`

Only after research/testing findings are confirmed should the relevant sections of `UX_Process.md` be updated.

---

# 19. Primary Sources

1. **ICTA – Frequently Asked Questions about the National Fuel Pass**  
   https://www.icta.lk/uncategorized-ta/frequently-asked-questions-about-the-national-fuel-pass

2. **Government Information Center – Fuel Pass FAQ**  
   https://fuelpass.gic.gov.lk/faq.html

3. **Government Information Center – Fuel Pass**  
   https://fuelpass.gic.gov.lk/

4. **Ministry of Energy – Implementation of the National Fuel QR Code System**  
   https://energymin.gov.lk/index.php/2026/03/15/news-07-15-03/

5. **Ceylon Petroleum Corporation – National Fuel Pass**  
   https://ceypetco.gov.lk/2022/07/16/ministry-of-power-and-energy-launches-national-fuel-pass-to-streamline-fuel-distribution/

6. **ICTA – Fuel Information Management System**  
   https://www.icta.lk/uncategorized-ta/fuel-information-management-system-to-be-introduced-for-efficiency-in-fuel-distribution

7. **ICTA – Guidelines for Developing Sri Lanka Government Websites 4.0**  
   https://www.icta.lk/icta-assets/uploads/2022/03/Guidelines-for-developing-Sri-Lanka-Government-Websites-4.0.pdf

8. **Official Languages Commission – Language Rights**  
   https://olc.gov.lk/en/home/

9. **Official Subsidi Tepat / MyPertamina**  
   https://subsiditepat.mypertamina.id/

10. **Government Technology Agency of Singapore – Digital Service Standards**  
    https://www.tech.gov.sg/products-and-services/for-government-agencies/digital-service-standards/

---

# 20. Secondary Sources Used for Recent 2026 Friction

These sources were used to identify reported problems during the March 2026 relaunch. They should be treated as reported observations, not as proof that every user experienced the same problem.

- Daily FT – Glitches persist in QR Fuel Pass System  
  https://www.ft.lk/front-page/Glitches-persist-in-QR-Fuel-Pass-System-as-motorists-report-registration-problems/44-789654

- EconomyNext – Sri Lanka motorists complain lapses in fuel QR system amid queues  
  https://economynext.com/sri-lanka-motorists-complain-lapses-in-fuel-qr-system-amid-queues-264057/

- Sunday Times – QR Code persists amidst glitches and hitches  
  https://www.sundaytimes.lk/260322/news/qr-code-persists-amidst-glitches-and-hitches-635204.html

- Daily FT – QR Fuel Pass glitches largely resolved  
  https://www.ft.lk/front-page/QR-Fuel-Pass-glitches-largely-resolved--over-5-m-users-on-system--Deputy-Minister/44-789691

- Ada Derana – More than 1,000 complaints filed over misuse of fuel QR system  
  https://adaderana.lk/news/120276

---

## Research Conclusion

The evidence suggests that the strongest redesign opportunities are not simply visual improvements. The main opportunity is to make the service **more understandable, recoverable, and efficient across the complete citizen-to-station journey**.

The most important areas to validate are:

1. Registration and account recovery
2. QR retrieval and presentation
3. Quota comprehension
4. Station discovery and availability freshness
5. Operator verification speed and clarity
6. Error recovery
7. Multilingual usability
8. Trust, privacy, and fraud prevention

The next UX activity should therefore be **requirements and flow validation against the team's current Figma prototype, followed by usability testing**.