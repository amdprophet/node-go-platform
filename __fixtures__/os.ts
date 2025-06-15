import type * as os from 'os'
import { jest } from '@jest/globals'

export const machine = jest.fn<typeof os.machine>()
export const type = jest.fn<typeof os.type>()
