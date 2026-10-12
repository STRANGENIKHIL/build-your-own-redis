# Course SDK

[![Build & Test](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Runtime](https://img.shields.io/badge/runtime-bun-fbf0df.svg?logo=bun)]()
[![TypeScript](https://img.shields.io/badge/typescript-%5E5.0.0-blue.svg?logo=typescript)]()
[![Docker](https://img.shields.io/badge/docker-supported-blue.svg?logo=docker)]()
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

CLI tool to develop, compile, and test CodeCrafters challenges and courses across multiple programming languages.

---

## Features

- **Polyglot Compilation**: Compile starter code and solution diffs for Go, Python, Rust, C, C++, Java, TypeScript, and more.
- **Isolated Testing**: Execute test suites inside tailored Docker containers mimicking real grading environments.
- **Incremental Solutions**: Compile stage-by-stage diffs and starter code from a single YAML course definition.
- **Template Synchronization**: Seamlessly pull and sync upstream language templates from local or remote caches.

---

## Installation

### Prerequisites
- [Docker](https://docs.docker.com/engine/install/) installed and running.
- [Bun](https://bun.sh/) runtime installed.

### Setup
```bash
# Clone the repository
git clone https://github.com/STRANGENIKHIL/build-your-own-redis.git
cd build-your-own-redis

# Install dependencies and build CLI binary
bun install
make install
```

Verify installation:
```bash
course-sdk --version
```

---

## Usage

### 1. Compile Starter Code & Solutions
```bash
# Compile all supported languages
course-sdk compile

# Compile only Go starter templates and solutions
course-sdk compile go
```

### 2. Run Stage Tests
```bash
# Test all stages for Python
course-sdk test python

# Test specific stages only
course-sdk test go stage_1,stage_2

# Skip compilation and run tests directly
course-sdk test rust --no-compile
```

### 3. Add or Upgrade Language Support
```bash
# Bootstrap templates for a new language
course-sdk add-language rust

# Upgrade existing language templates
course-sdk upgrade-language go
```

---

## Documentation

- [Architecture Overview](docs/ARCHITECTURE.md) - Details on compilers, testers, and Docker pipelines.
- [Contributing Guide](CONTRIBUTING.md) - How to add new courses, stages, and submit PRs.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
