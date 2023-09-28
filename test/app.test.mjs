/* eslint-disable no-unused-expressions */
import { expect } from 'chai'

import { core } from '@kalisio/kdk/test.client.js'

const suite = 'app'

describe(suite, () => {
  let runner
  let page

  before(async () => {
    runner = new core.Runner(suite, {
      appName: 'teams',
      browser: {
        args: ['--lang=fr'],
        slowMo: 1
      }
    })
    page = await runner.start()
  })

  after(async () => {
    await runner.stop()
  })
})
