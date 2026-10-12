# Contributing to Course SDK

Thank you for your interest in contributing to the Course SDK! This guide outlines how to set up your environment, contribute new features, and test changes.

## Prerequisites

- [Bun](https://bun.sh/) (latest version)
- [Docker](https://docs.docker.com/get-docker/) installed and running
- [Make](https://www.gnu.org/software/make/) (optional, but recommended)

## Development Setup

1. Clone your fork and enter the directory:
   ```bash
   git clone https://github.com/STRANGENIKHIL/build-your-own-redis.git
   cd build-your-own-redis
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Compile and install locally:
   ```bash
   make install
   ```

## Running Tests & Linters

- **Run test suite**:
  ```bash
  bun test
  ```
- **Check formatting**:
  ```bash
  bun run lint
  ```
- **Format codebase**:
  ```bash
  bun run format
  ```
- **Typecheck**:
  ```bash
  bun run typecheck
  ```

## Adding Support for a New Language

1. Add base template files to `starter_templates/<language_slug>/`.
2. Define compile and run scripts under `.codecrafters/compile.sh` and `.codecrafters/run.sh`.
3. Add solution implementations in `solutions/<language_slug>/<stage_slug>/code/`.
4. Validate with:
   ```bash
   course-sdk compile <language_slug>
   course-sdk test <language_slug>
   ```

## Pull Request Guidelines

- Ensure all existing tests pass before submitting.
- Keep commits clear, descriptive, and adhering to Conventional Commits format (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).
