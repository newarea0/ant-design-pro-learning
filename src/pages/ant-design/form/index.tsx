import React from 'react'
import { Button, Flex, Space } from 'antd'
import { Link, history, useModel } from '@umijs/max'

const AntDesignButton: React.FC = () => {
  const message = useModel('demo')
  const { counter, increment, decrement } = useModel('counter')

  function goTo() {
    history.push('/ant-design/table')
  }
  return (
    <>
      <Button>Primary</Button>

      <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>

      <div>{message}</div>

      <div>
        <Space>
          <Button onClick={increment}>+</Button>
          <Button onClick={decrement}>-</Button>
        </Space>
        <span>{counter}</span>
      </div>

      <Button onClick={goTo}>命令式跳转</Button>

      <Link to="/ant-design/table">跳转</Link>
    </>
  )
}

export default AntDesignButton
