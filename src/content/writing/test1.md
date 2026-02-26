---
slug: "background-agents"
title: "The future of background agents"
pubDate: 2026-02-26
description: "The industry is slowly shifting towards delegating more and more work to agents; how can we do this responsibly?"
tags: ["AI", "Agents"]
---

*This post is 100% written by a human. (In spite of the subject matter)*

I used to be a major AI skeptic. In fact, before June of last year, I was severely
against *tab complete*. 6 months later I have many projects where I haven't looked
at a single line of code. It seems like since things have sped up rapidly in the past
two months, in a way that we haven't seen since GPT-3.

A big player behind this is [OpenClaw](https://openclaw.ai) - it's the first time that I, and many others,
have truly felt the power that AI will have over our lives. It's a brilliant showcase
of just how much benefit you can derive from LLMs. While I don't believe it'll stick 
around long-term, it has had a supremely profound impact on how we'll further integrate 
AI into our lives.

The largest bottleneck I noticed when setting up OpenClaw was the single threaded
nature of it. On a platform like Telegram, you can only have one ongoing conversation
with it. That's why I moved to Discord, allowing me to have as many channels as I wanted,
but it still felt clunky; not designed from the ground up to run many sessions at once.

I began looking into how best to give OpenClaw better tools to be an orchestrator 
of agents. It has a sub-agent system, but it isn't particularly powerful. I started off
by allowing it to run and communicate with [Ralph loops](https://github.com/snarktank/ralph),
and that worked great for a while, but they were two fundamentally different technologies
that don't play too well together.

Finally, we come to background agents. The team at Ona did a [brilliant job of explaining them](https://background-agents.com),
but in a nutshell, they're agents that are able to operate autonomously, without
direct intervention from humans. The degree of their autonomy varies, but I like
to classify them as agents that either begin or complete a task without our input.
A perfect background agent would be one that can do both (correctly). That raises
another question of how we can evaluate agent correctness, which is an arguably bigger
topic.

Tying this back to OpenClaw, I built a system called 'Dom' (get it?) that allows it to build
sub-agent workflows, then start, monitor, and evaluate them. This means that I can work with it
to quickly spin up these agents, and leverage its stellar context and understanding
of my repositories, without locking it up into a session. OpenClaw is also notoriously token-intensive,
and delegating the work to a harness like OpenCode allows for a much more efficient use of tokens.

I might open-source Dom at same point, and do a deep dive into its architecture, 
but it's still very much so a work-in-progress with a lot of sharp edges. If you
have any thoughts around background agents, or agents in general, [reach out](mailto:benceredmond@gmail.com)!
