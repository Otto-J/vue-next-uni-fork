import { UniElement } from '@dcloudio/uni-shared'

import {
  ref,
  nextTick,
  createApp,
  createPageNode,
  createVNode as _createVNode,
  openBlock as _openBlock,
  createBlock as _createBlock,
  createCommentVNode as _createCommentVNode
} from '../src'

const defaultPageNodeOptions = {
  version: 1,
  locale: 'zh_CN',
  disableScroll: false,
  onPageScroll: false,
  onPageReachBottom: false,
  onReachBottomDistance: 50,
  statusbarHeight: 24,
  windowTop: 0,
  windowBottom: 0
}
describe('vue', () => {
  test('vdom', () => {
    const show = ref(true)
    let handleClick: Function | null = () => {}
    const Page = {
      setup() {
        return () => {
          return (
            _openBlock(),
            _createBlock(
              'view',
              { class: 'a', onClick: handleClick },
              [
                show.value
                  ? (_openBlock(),
                    _createBlock(
                      'view',
                      {
                        key: 0,
                        style: { color: 'red' }
                      },
                      '123'
                    ))
                  : _createCommentVNode('v-if', true)
              ],
              8 /* PROPS */,
              ['onClick']
            )
          )
        }
      }
    }
    const pageNode = createPageNode(1, defaultPageNodeOptions, true)
    createApp(Page).mount((pageNode as unknown) as UniElement)
    pageNode.mounted()
    show.value = false
    handleClick = null
    nextTick(() => {
      pageNode.update()
    })
  })
})
