import { QuestionCircleOutlined } from '@ant-design/icons'
import { SelectLang as UmiSelectLang } from '@umijs/max'

export type SiderTheme = 'light' | 'dark'

export function SelectLang() {
  return <UmiSelectLang />
}

export function Question() {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started')
      }}
    >
      <QuestionCircleOutlined />
    </div>
  )
}
