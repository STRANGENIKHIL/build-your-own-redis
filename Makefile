.PHONY: help install clean lint test update_schemas

help:
	@echo "Course SDK Build & Development Commands"
	@echo "---------------------------------------"
	@echo "  make install         - Build and link binary to /usr/local/bin/course-sdk"
	@echo "  make clean           - Remove compiled binaries and temporary artifacts"
	@echo "  make lint            - Run code formatting and linter checks"
	@echo "  make test            - Run bun test suite"
	@echo "  make update_schemas  - Sync latest course definition schemas"

install:
	bun build ./cli.ts --compile --outfile=main.out
	if [ ! -L /usr/local/bin/course-sdk ]; then sudo ln -sf $(shell pwd)/main.out /usr/local/bin/course-sdk; fi

clean:
	rm -f main.out
	rm -rf /tmp/codecrafters-*

lint:
	bunx prettier --check "**/*.ts"

test:
	bun test

update_schemas:
	gh repo clone codecrafters-io/core /tmp/codecrafters-core-tmp --depth 1
	cp /tmp/codecrafters-core-tmp/data/course_definition_schema.json ./schemas/course-definition.json
	rm -rf /tmp/codecrafters-core-tmp