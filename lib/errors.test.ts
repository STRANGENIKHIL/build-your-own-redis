import { expect, test } from "bun:test";
import {
  FriendlyError,
  DockerConnectionError,
  StageNotFoundError,
  CourseDefinitionFileNotFoundError,
} from "./errors";

test("FriendlyError inheritance", () => {
  const err = new FriendlyError("Something went wrong");
  expect(err).toBeInstanceOf(Error);
  expect(err.message).toBe("Something went wrong");
});

test("DockerConnectionError message formatting", () => {
  const defaultErr = new DockerConnectionError();
  expect(defaultErr.message).toContain("Cannot connect to the Docker daemon");

  const detailedErr = new DockerConnectionError("Socket timeout");
  expect(detailedErr.message).toContain("Socket timeout");
});

test("StageNotFoundError formats available stages", () => {
  const err = new StageNotFoundError("unknown-stage", ["stage-1", "stage-2"]);
  expect(err.message).toContain("unknown-stage");
  expect(err.message).toContain("stage-1, stage-2");
});

test("CourseDefinitionFileNotFoundError formats directory", () => {
  const err = new CourseDefinitionFileNotFoundError("/custom/path");
  expect(err.message).toContain("/custom/path");
  expect(err.message).toContain("course-definition.yml");
});
