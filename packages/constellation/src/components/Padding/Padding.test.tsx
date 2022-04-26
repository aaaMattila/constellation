import { render } from '@testing-library/react'
import React from 'react'

import { Padding } from '.'

describe('Padding', () => {
  it('Should use 0 for all properties not defined', () => {
    const { container } = render(<Padding />)

    const element = container.firstElementChild

    if (!element) throw new Error('Could not find Padding element')

    const style = element.getAttribute('style')

    expect(style).toEqual('padding: 0px 0px 0px 0px;')
  })

  it('Should use the all prop  to apply the same padding to all sides', () => {
    const { container } = render(<Padding all={10} />)

    const element = container.firstElementChild

    if (!element) throw new Error('Could not find Padding element')

    const style = element.getAttribute('style')

    expect(style).toEqual('padding: 10px 10px 10px 10px;')
  })

  it('Should allow to apply padding only vertically', () => {
    const { container } = render(<Padding vertical={10} />)

    const element = container.firstElementChild

    if (!element) throw new Error('Could not find Padding element')

    const style = element.getAttribute('style')

    expect(style).toEqual('padding: 10px 0px 10px 0px;')
  })

  it('Should allow to apply padding vertically and left', () => {
    const { container } = render(<Padding vertical={10} left={16} />)

    const element = container.firstElementChild

    if (!element) throw new Error('Could not find Padding element')

    const style = element.getAttribute('style')

    expect(style).toEqual('padding: 10px 0px 10px 16px;')
  })

  it('Should allow to apply padding horizontal', () => {
    const { container } = render(<Padding horizontal={10} />)

    const element = container.firstElementChild

    if (!element) throw new Error('Could not find Padding element')

    const style = element.getAttribute('style')

    expect(style).toEqual('padding: 0px 10px 0px 10px;')
  })

  it('Should allow to apply padding horizontal and top', () => {
    const { container } = render(<Padding horizontal={10} top={16} />)

    const element = container.firstElementChild

    if (!element) throw new Error('Could not find Padding element')

    const style = element.getAttribute('style')

    expect(style).toEqual('padding: 16px 10px 0px 10px;')
  })

  it('Should allow to apply padding manually to all sides', () => {
    const { container } = render(<Padding top={16} bottom={10} left={5} right={2} />)

    const element = container.firstElementChild

    if (!element) throw new Error('Could not find Padding element')

    const style = element.getAttribute('style')

    expect(style).toEqual('padding: 16px 2px 10px 5px;')
  })
})