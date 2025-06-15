DEFAULT_BRANCH ?= main
LOG_LEVEL ?= INFO
SHELL := /bin/bash

.PHONY: default
default:
	docker run \
		-e LOG_LEVEL=$(LOG_LEVEL) \
		-e DEFAULT_BRANCH=$(DEFAULT_BRANCH) \
		-e SHELL=$(SHELL) \
		-e RUN_LOCAL=true \
		-v $$PWD:/tmp/lint \
		ghcr.io/super-linter/super-linter:latest
