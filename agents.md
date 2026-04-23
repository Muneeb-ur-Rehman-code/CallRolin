# CallRolin AI Agents Documentation

CallRolin is a platform for building, configuring, and monitoring Intelligent AI Agents tailored for voice, chat, and multimodal business interactions. This document outlines the architecture and the specialized modules that govern agent behavior.

## 🤖 Agent Architecture Overview

The system follows a pipeline approach to transform a general AI model into a specialized business agent. The workflow moves from **Identity & Grounding** $\rightarrow$ **Governance** $\rightarrow$ **Logic Flow** $\rightarrow$ **Observability**.

---

## 🛠 Specialized Agent Modules

### 1. Agent Creator (`CreateAgent`)
**Role:** Identity and Knowledge Grounding.
The Agent Creator defines the fundamental nature of the AI agent and provides the context it needs to operate.

- **Modalities:** Supports `Chat`, `Voice`, and `Multimodal` (Text/Voice/Vision).
- **Knowledge Base:** Enables grounding by uploading business-specific documents (PDF, DOCX, Audio) to prevent hallucinations and ensure accuracy.
- **Effect:** Produces a grounded AI identity with the correct modality for the target channel.

### 2. Policy Manager (`DefinePolicies`)
**Role:** Guardrails and Compliance (The "Safety Agent").
This module ensures the agent operates within legal, ethical, and business boundaries.

- **Automation Policies:** Defines rules for autonomous approvals of low-risk requests.
- **Escalation Policies:** Logic for human hand-off (e.g., triggered by negative sentiment or high-complexity queries).
- **Compliance Policies:** Ensures strict adherence to requirements like age verification or government ID checks.
- **Effect:** Ensures controlled, safe, and compliant agent behavior.

### 3. Logic Designer (`DefineLogics`)
**Role:** Workflow Automation and Reasoning (The "Brain").
The Logic Designer maps out how the agent should navigate a conversation to achieve a specific business goal.

- **Scenario Engine:** Maps conversation flows (e.g., *Onboarding* $\rightarrow$ *KYC* $\rightarrow$ *Account Creation*).
- **Data Integration:** Connects the agent to external sources:
  - **PostgreSQL:** Customer databases.
  - **REST APIs:** Product catalogs and real-time services.
  - **Vector DBs:** Knowledge base retrieval.
- **Personalization:** Configures tone, formality, and empathy levels.
- **Effect:** Transforms a reactive AI into a proactive agent capable of completing complex business processes.

### 4. Monitor Agent (`MonitorImprove`)
**Role:** Observability and Continuous Improvement.
This module provides the feedback loop necessary to tune agent performance based on real-world data.

- **Transcript Analysis:** Reviews AI-user exchanges with sentiment tracking.
- **Latency Monitoring:** Tracks Response Time, Processing, and TTS (Text-to-Speech) generation to optimize the real-time experience.
- **Boot Logging:** Monitors the initialization process (Model loading $\rightarrow$ Voice engine $\rightarrow$ Policy application).
- **Effect:** Provides insights that drive iterations in the Logic and Policy modules.

---

## 🔄 Interaction Flow Summary

| Phase | Module | Primary Input | Outcome |
| :--- | :--- | :--- | :--- |
| **Definition** | Agent Creator | Modality, Documents | Grounded AI Identity |
| **Governance** | Policy Manager | Rules, Thresholds | Controlled Behavior |
| **Logic** | Logic Designer | Scenarios, API Sources | Structured Workflows |
| **Optimization**| Monitor Agent | Transcripts, Metrics | Performance Insights |
