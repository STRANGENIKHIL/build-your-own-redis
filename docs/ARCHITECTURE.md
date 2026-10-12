# Architecture Overview

`course-sdk` is the core engine for building, compiling, and testing CodeCrafters challenges across multiple programming languages.

## High-Level Architecture

```
+-------------------------------------------------------------------+
|                            CLI Entrypoint                         |
|                               (cli.ts)                            |
+---------------------------------+---------------------------------+
                                  |
            +---------------------+---------------------+
            |                                           |
            v                                           v
+-----------------------+                   +-----------------------+
|   Commands Handler    |                   |   Course Definition   |
| (test, compile, etc.) |                   | (course-definition.yml|
+-----------+-----------+                   +-----------+-----------+
            |                                           |
            +---------------------+---------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                         Compilers & Testers                       |
|   - StarterTemplateCompiler       - BaseTester                    |
|   - SolutionDiffsCompiler         - DockerfileTester              |
|   - ManualSolutionsCompiler       - SolutionTester                |
+---------------------------------+---------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                        Docker Execution Engine                    |
|                (lib/docker-shell-command-executor.ts)             |
+-------------------------------------------------------------------+
```

## Core Modules

### 1. Course Definition & Schema
- Courses are declared via `course-definition.yml`.
- Validated against `schemas/course-definition.json` to guarantee stage identifiers, difficulty labels, and test definitions are structurally sound.

### 2. Compilers Pipeline (`lib/compilers/`)
- **`StarterTemplateCompiler`**: Merges global language templates with language-specific implementations.
- **`SolutionDiffsCompiler`**: Generates git-style diffs illustrating incremental solutions between stages.
- **`ManualSolutionsCompiler`**: Assembles standalone reference solutions for students and automated test runners.

### 3. Testers & Container Isolation (`lib/testers/`)
- Isolates test code execution within language-specific Docker containers.
- Dynamically provisions test runners and validates student implementations across edge cases for each stage.

### 4. Language Templates System
- Supports polyglot challenge development (Go, Python, Rust, C, Java, TypeScript, etc.).
- Synchronizes template definitions from remote or local template repositories via `COURSE_SDK_LANGUAGE_TEMPLATES_REPO`.
