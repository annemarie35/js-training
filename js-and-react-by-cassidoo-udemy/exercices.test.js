import { expect, test, vi } from 'vitest'
import {getElementsByAttributes} from "./exercices";
import {JSDOM} from "jsdom";

/* Another simplier way to mock
const Mock = {
    getElementsByTagName: vi.fn().mockReturnValue([{
        innerHTML: 'Hello world',
        getAttribute: vi.fn().mockReturnValue('some-id-value')
    }]),
}*/

const mockedDom = new JSDOM(`<!DOCTYPE html><p id='some-id-value'>Hello world</p>`)
const MockImplementationWithJsdomLib = mockedDom.window.document
vi.stubGlobal('document', MockImplementationWithJsdomLib)


test('Get element that have id with value some-id-value', () => {
    const element = getElementsByAttributes('id', 'some-id-value')
    expect(element[0].innerHTML).toBe('Hello world')
    vi.unstubAllGlobals()

})