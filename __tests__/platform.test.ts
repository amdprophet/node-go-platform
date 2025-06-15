/**
 * Unit tests for src/index.ts
 */
import { jest } from '@jest/globals'
import { machine, type } from '../__fixtures__/os.js'

// Mocks should be declared before the module being tested is imported.
jest.unstable_mockModule('os', () => ({ machine, type }))

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
const { arch, os } = await import('../src/index.js')

describe('arch', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  for (const { detected, expected } of [
    { detected: 'aarch64', expected: 'arm64' },
    { detected: 'i386', expected: '386' },
    { detected: 'i686', expected: '386' },
    { detected: 'x86_64', expected: 'amd64' },
    { detected: 'arm64', expected: 'arm64' }
  ]) {
    it(`Returns "${expected}" when "${detected}" is detected`, async () => {
      machine.mockImplementation(() => detected)
      expect(arch()).toEqual(expected)
    })
  }
})

describe('os', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  for (const { detected, expected } of [
    { detected: 'Darwin', expected: 'darwin' },
    { detected: 'Linux', expected: 'linux' },
    { detected: 'Windows_NT', expected: 'windows' }
  ]) {
    it(`Returns "${expected}" when "${detected}" is detected`, async () => {
      type.mockImplementation(() => detected)
      expect(os()).toEqual(expected)
    })
  }
})
