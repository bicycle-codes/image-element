import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('example', async t => {
    const el = await waitFor('image-element')
    t.ok(el, 'should find an `image-element` tag')
})
