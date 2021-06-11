import { UniNodeJSON } from '@dcloudio/uni-shared'
import {
  ACTION_TYPE_INSERT,
  ACTION_TYPE_REMOVE,
  ACTION_TYPE_REMOVE_ATTRIBUTE,
  ACTION_TYPE_SET_ATTRIBUTE,
  ACTION_TYPE_SET_TEXT,
  InsertAction,
  SetAttributeAction
} from '../../src/dom/Page'
import {
  createElement,
  createPageNode,
  createTextNode
} from '../../src/dom/ops'
describe('dom', () => {
  const pageId = 1
  const root = createPageNode(pageId, {
    version: 1,
    locale: 'zh_CN',
    disableScroll: false,
    onPageScroll: false,
    onPageReachBottom: false,
    onReachBottomDistance: 50,
    statusbarHeight: 24,
    windowTop: 0,
    windowBottom: 0
  })
  test('proxyNode', () => {
    const viewElem = createElement('view')
    viewElem.setAttribute('id', 'view')
    root.appendChild(viewElem)
    viewElem.setAttribute('hidden', true)
    const { updateActions } = root
    const addElementAction = updateActions[0] as InsertAction
    expect(addElementAction[0]).toBe(ACTION_TYPE_INSERT)
    expect(addElementAction[1]).toBe(1) // nodeId
    expect(addElementAction[2]).toBe(0) // parentNodeId
    expect(addElementAction[3]).toBe(0) // index
    const elementJson = addElementAction[4] as UniNodeJSON
    expect(elementJson.a.id).toBe('view')

    const setAttributeAction = updateActions[1] as SetAttributeAction
    expect(setAttributeAction[0]).toBe(ACTION_TYPE_SET_ATTRIBUTE)
    expect(setAttributeAction[1]).toBe(1)
    expect(setAttributeAction[2]).toBe('hidden')
    expect(setAttributeAction[3]).toBe(true)

    root.updateActions.length = 0
    viewElem.removeAttribute('hidden')
    const {
      updateActions: [removeAttributeAction]
    } = root
    expect(removeAttributeAction[0]).toBe(ACTION_TYPE_REMOVE_ATTRIBUTE)
    expect(removeAttributeAction[1]).toBe(1)
    expect(removeAttributeAction[2]).toBe('hidden')

    root.updateActions.length = 0
    viewElem.textContent = 'text'
    const {
      updateActions: [setTextAction]
    } = root
    expect(setTextAction[0]).toBe(ACTION_TYPE_SET_TEXT)
    expect(setTextAction[1]).toBe(1)
    expect(setTextAction[2]).toBe('text')

    root.updateActions.length = 0
    root.removeChild(viewElem)
    const {
      updateActions: [removeChildAction]
    } = root
    expect(removeChildAction[0]).toBe(ACTION_TYPE_REMOVE)
    expect(removeChildAction[1]).toBe(1)
    expect(removeChildAction[2]).toBe(0)

    root.updateActions.length = 0
    const textNode = createTextNode('hello')
    root.appendChild(textNode)
    const {
      updateActions: [addTextNodeAction]
    } = root
    expect(addTextNodeAction[0]).toBe(ACTION_TYPE_INSERT)
    expect(addTextNodeAction[1]).toBe(2)
    expect(addTextNodeAction[2]).toBe(0)
    expect(addTextNodeAction[3]).toBe(0)
    const textNodeJson = addTextNodeAction[4] as UniNodeJSON
    expect(textNodeJson.t).toBe('hello')

    root.updateActions.length = 0
    const clickFn = () => {}
    textNode.addEventListener('click', clickFn)
    const {
      updateActions: [addEventListenerAction]
    } = root
    expect(addEventListenerAction[0]).toBe(ACTION_TYPE_SET_ATTRIBUTE)
    expect(addEventListenerAction[1]).toBe(2)
    expect(addEventListenerAction[2]).toBe('onClick')
    expect(addEventListenerAction[3]).toBe(1)

    root.updateActions.length = 0
    textNode.removeEventListener('click', clickFn)
    const {
      updateActions: [removeEventListenerAction]
    } = root
    expect(removeEventListenerAction[0]).toBe(ACTION_TYPE_REMOVE_ATTRIBUTE)
    expect(removeEventListenerAction[1]).toBe(2)
    expect(removeEventListenerAction[2]).toBe('onClick')
  })
})
