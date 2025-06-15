import { machine, type } from 'os'

/**
 * Determines the GOOS equivalent of the detected operating system of the host.
 *
 * NOTE: This is not future-proof. It will need to be updated when support for
 * new operating systems are added to Go that do not match the name returned by
 * os.type() in NodeJS.
 *
 * @returns A string containing the GOOS of the host system.
 */
export function os(): string {
  const detected: string = type()

  // Some of the possible operating systems can be found on the Wikipedia page
  // for uname: https://en.wikipedia.org/wiki/Uname#Examples.
  switch (detected) {
    case 'Windows_NT':
      return 'windows'
    default:
      return detected.toLowerCase()
  }
}

/**
 * Outputs the GOARCH equivalent of the detected CPU architecture of the host.
 *
 * NOTE: This is not future-proof. It will need to be updated when support for
 * new CPU architectures are added to Go that do not match the name returned by
 * os.machine() in NodeJS.
 *
 * @returns A string containing the GOARCH of the host system.
 */
export function arch(): string {
  const detected: string = machine()

  // Some of the possible CPU architectures can be found on the Wikipedia page
  // for uname: https://en.wikipedia.org/wiki/Uname#Examples.
  switch (detected) {
    case 'aarch64':
      return 'arm64'
    case 'i386':
    case 'i686':
      return '386'
    case 'x86_64':
      return 'amd64'
    default:
      return detected
  }
}
